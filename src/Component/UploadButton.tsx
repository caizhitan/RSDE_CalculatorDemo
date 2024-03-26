import { useState, ChangeEvent, FormEvent } from 'react';
// import { File } from 'react-pdf/dist/cjs/shared/types';

const UploadButton = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [filetype, setFileType] = useState('');
  //const [detailType, setDetailType] = useState('');
  const [filepath, setFilePath] = useState('');
  // const [files, setFiles]=useState<File[]>([])
  const [titleError, setTitleError] = useState('');
  const [filePathError, setFilePathError] = useState('');

  const openDropdown = () => {
    setDropdownOpen(true);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
    setTitleError('');
  };

  const handleFileTypeChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setFileType(e.target.value);
  };

  // const handleDetailTypeChange = (e: ChangeEvent<HTMLSelectElement>) => {
  //   //setDetailType(e.target.value);
  // };

  const handleFilePathChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFilePath(e.target.value);
    setFilePathError('');
  };

  const handleClear = () => {
    // Reset all the form fields and error messages
    setTitle('');
    setFileType('');
    //setDetailType('');
    setFilePath('');
    setTitleError('');
    setFilePathError('');
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate title
    if (!title || !/^[a-zA-Z0-9][a-zA-Z0-9\s]*$/.test(title)) {
      setTitleError('Title must start with only alphabets or numbers.');
      return;
    }

    // Validate file path
    if (!filepath || !/\.[A-Za-z]{3,4}$/.test(filepath)) {
      setFilePathError('File path must have a valid extension.');
      return;
    }


    //InsertFile(filepath, filetype, title)
    // Reset the form fields and error messages
    setTitle('');
    setFileType('');
    //setDetailType('');
    setFilePath('');
    setTitleError('');
    setFilePathError('');

    // Close the dropdown
    setDropdownOpen(false);
  };

  return (
    <div className="">
      {!isDropdownOpen && (
        <button
          className="border border-BlueHeader bg-BlueBG text-BlueHeader font-bold py-2 px-4 mb-1 w-full rounded"
          onClick={openDropdown}
        >
          Upload File
        </button>
      )}

      {isDropdownOpen && (
        <div className="w-full bg-white border border-gray-300 mb-4 shadow rounded">
          <div className="flex justify-between p-2 border-b">
            <h2 className="text-xl font-bold">Upload File</h2>
            <button onClick={closeDropdown}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M11.414 10l4.293-4.293a1 1 0 0 0-1.414-1.414L10 8.586 5.707 4.293A1 1 0 0 0 4.293 5.707L8.586 10l-4.293 4.293a1 1 0 1 0 1.414 1.414L10 11.414l4.293 4.293a1 1 0 1 0 1.414-1.414L11.414 10z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
          <div className="p-4">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="title" className="block font-bold mb-1">
                  Title
                </label>
                <input
                  type="text"
                  id="title"
                  value={title}
                  onChange={handleTitleChange}
                  className="border border-gray-300 rounded px-2 py-1 w-full"
                  required
                />
                {titleError && (
                  <p className="text-red-500 text-sm">{titleError}</p>
                )}
              </div>
              <div className="mb-4 flex flex-grow">
                <div className="mr-2 flex flex-col flex-grow">
                  <label htmlFor="filetype" className="block font-bold mb-1">
                    File Type
                  </label>
                  <select
                    id="filetype"
                    value={filetype}
                    onChange={handleFileTypeChange}
                    className="border border-gray-300 rounded px-2 py-1 w-full"
                    required // Added required attribute
                  >
                    <option value="" disabled hidden>Select File Type</option>
                    <option value="PDF">PDF</option>
                    <option value="EXCEL">Excel</option>
                  </select>
                </div>
              </div>
              <div className="mb-4">
                <label htmlFor="filepath" className="block font-bold mb-1">
                  File Path
                </label>
                <input
                  type="text"
                  id="filepath"
                  value={filepath}
                  onChange={handleFilePathChange}
                  // onChange={(e)=>console.log(e.target.files)}
                  // className="border border-gray-300 rounded px-2 py-1 w-full"
                  // required
                  // type="file"
                  // multiple
                />
                {filePathError && (
                  <p className="text-red-500 text-sm">{filePathError}</p>
                )}
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  className="border border-BlueHeader bg-BlueBG text-BlueHeader font-bold py-2 px-4 w-24 rounded"
                  onClick={handleClear}
                >
                  Clear
                </button>
                <button
                  type="submit"
                  className="border border-BlueHeader bg-BlueBG text-BlueHeader font-bold py-2 px-4 w-24 rounded ml-2"
                >
                  Upload
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default UploadButton;
