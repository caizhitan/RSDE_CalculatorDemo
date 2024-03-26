import React, { useState, useRef } from 'react';
import { GetSignedUrl, InsertFile } from '../Services/filesAPI';
import { PutFile } from '../Services/UploadFile';
import env from '../env';

interface IFileUpload {
  setLoading: (value: boolean) => void;
  onSuccess: () => void;
}

const FileUpload = (props:IFileUpload) => {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [fileInputKey, setFileInputKey] = useState<number>(0);
  const [showComponent, setShowComponent] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []).filter(file => {
      return (
        file.type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' ||
        file.type === 'application/pdf'
      );
    });
    setSelectedFiles(files);
  };

  const handleDeleteFile = (index: number) => {
    const shouldDelete = window.confirm(
      `Are you sure you want to delete the file "${selectedFiles[index].name}"?`
    );
    if (shouldDelete) {
      const newSelectedFiles = [...selectedFiles];
      newSelectedFiles.splice(index, 1);
      setSelectedFiles(newSelectedFiles);

      if (fileInputRef.current) {
        const dataTransfer = new DataTransfer();
        newSelectedFiles.forEach(file => dataTransfer.items.add(file));
        fileInputRef.current.files = dataTransfer.files;
      }
    }
  };

  const handleUpload = () => {
    if (selectedFiles.length > 0) {
      props.setLoading(true)
      setShowComponent(!showComponent);
      console.log("Uploading files:", selectedFiles);

      const uploadFile = async () =>{
        try{
        var i=0;
        for(i; i<selectedFiles.length; i++){
          //extract file information
          const fileName = selectedFiles[i].name.toString();
          const fileType = selectedFiles[i].type.toString();
          const file = selectedFiles[i];

          //get signed url from backend
          const signedUrl = await GetSignedUrl(fileName)
          console.log(signedUrl);

          //Join link to create link to access url
          const fileUrl = (env.REACT_APP_S3_BUCKET_LINK + fileName).toString();
          console.log(fileUrl)

          //Add file into s3 bucket
          await PutFile(signedUrl, file);

          if(fileType === 'application/pdf'){
            //Insert file details into database
            const response = await InsertFile('PDF', fileName, fileUrl);
            console.log(response.message)
          }
          if(fileType === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'){
            //Insert file details into database
            const response = await InsertFile('Excel', fileName, fileUrl);
            console.log(response.message)
          }
        }props.onSuccess();

        props.setLoading(false);
        console.log('upload file');
      } catch (error) {
        console.error('Error uploading files:', error);
        props.setLoading(false);
      }
    };
    uploadFile();
  } else {
    alert("No files selected to upload.");
  }
};

  const handleClear = () => {
    if (selectedFiles.length > 0) {
      if (window.confirm("Are you sure you want to clear the remaining selected files?")) {
        setSelectedFiles([]);
        resetFileInput();
      }
    } else {
      alert("No files selected to clear.");
    }
  };

  const resetFileInput = () => {
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleFileInputClick = () => {
    if (selectedFiles.length > 0 && !window.confirm("Choosing new files will clear the remaining selected files. Continue?")) {
      return false;
    }
  };

  const toggleComponent = () => {
    setShowComponent(!showComponent);
    if (!showComponent) {
      setSelectedFiles([]);
      resetFileInput();
    }
  };

  return (
    <div className="rounded flex flex-col w-full">
      {!showComponent && (
        <button
          className="border border-BlueBG bg-BlueHeader text-white text-xl font-extrabold py-2 px-4 mb-1 w-full rounded"
          onClick={toggleComponent}
        >
          Upload File
        </button>
      )}

      {showComponent && (
        <div>
          <div className="rounded w-full border border-BlueHeader p-2">
            
            <div className="flex justify-between mb-2">
            <label className="text-BlueHeader font-bold text-2xl ">
              Select Files To Upload
            </label>
            <div className='text-Red '>
              <button
                className="text-Red text-xl font-black cursor-pointer "
                onClick={toggleComponent}
              >
                &#x2716;
              </button>
            </div>
            
          </div>

            <div className="rounded w-full flex flex-col font-semibold ">
              <input
                id="file-input"
                key={fileInputKey}
                ref={fileInputRef}
                type="file"
                multiple
                accept=".xlsx,.pdf"
                className={ ``}
                onChange={handleFileChange}
                onClick={handleFileInputClick}
                disabled={selectedFiles.length > 0}
                hidden
              />
              <label htmlFor="file-input" className={`${
                    selectedFiles.length > 0 ? ' bg-BlueBG' : 'bg-BlueHeader'
                  } w-full text-white text-xl font-bold p-1 text-center rounded border`} >Choose File</label>
              <span className="text-BlueHeader text-md py-1 underline decoration-dashed">
                {selectedFiles.length} file{selectedFiles.length !== 1 ? 's' : ''} selected
              </span>
              
              {selectedFiles.length > 0 && (
                <div className="mt-2">
                  <ul className="list-disc ">
                    {selectedFiles.map((file, index) => (
                      <li key={index} className="flex justify-between items-center">
                        <span className="flex items-center">
                          <span className="text-Red mr-2 font-bold cursor-pointer " onClick={() => handleDeleteFile(index)}>
                            &#x2716;
                          </span>
                          {file.name}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="pt-4 flex justify-end ">
                  
                <button
                  className={`${
                    selectedFiles.length > 0 ? 'bg-BlueHeader' : 'bg-BlueBG'
                  } w-1/2 text-white font-bold py-2 px-4 rounded`}
                  onClick={handleClear}
                >
                  Clear
                </button>
                <button
                  className={`${
                    selectedFiles.length > 0 ? 'bg-BlueHeader' : 'bg-BlueBG'
                  } w-1/2 text-white font-bold py-2 px-4 rounded ml-2 `}
                  onClick={handleUpload}
                >
                  Upload
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FileUpload;