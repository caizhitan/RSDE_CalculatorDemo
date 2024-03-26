import React, { useState } from 'react';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { DeleteFile, deleteS3 } from '../Services/filesAPI';

type DeleteButtonProps = {
  itemId: string;
  itemName: string;
  onDelete: (itemId: string) => void;
};

const DeleteButton: React.FC<DeleteButtonProps> = ({ itemId, itemName, onDelete }) => {
  const [showPrompt, setShowPrompt] = useState(false);

  const handleDelete = async () => {
    await DeleteFile(itemId);
    await deleteS3(itemName);
    setShowPrompt(false);
    onDelete(itemId); // Call the onDelete function to trigger the update
  };

  return (
    <div>
      {!showPrompt ? (
        <button onClick={() => setShowPrompt(true)} className="flex justify-center font-black py-2 rounded">
          <DeleteOutlineIcon fontSize="large" />
        </button>
      ) : (
        <div className="px-4 fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white w-full text-center text-xl py-10 px-8 rounded shadow font-black">
            <p>Are you sure you want to delete this file, " <span className="text-Red ">{itemName}</span> " ?</p>
            <div className="flex justify-center my-4 pt-5">
              <button
                onClick={handleDelete}
                className="w-full mr-3 border-2 border-Red bg-white text-Red px-4 py-2 text-lg rounded"
              >
                YES
              </button>
              <button
                onClick={() => setShowPrompt(false)}
                className="w-full border-2 border-BlueHeader bg-white text-BlueHeader px-4 py-2 text-lg rounded"
              >
                NO
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DeleteButton;

