import React, { useState, useEffect } from 'react';
import Modal from '../Component/Modal';
import Pagination from './Pagination';
import DeleteButton from '../Component/DeleteButton';
import { GetPaginatedFiles, openFile } from '../Services/filesAPI';

const PDFIcon = require("../Images/PDFIcon.png");
const XLSXIcon = require("../Images/XLSXIcon.png");
const NoDataImage = require("../Images/NoData.png");



type DynamicListProps = {
  onDelete: (itemId: string) => void;
  pageSize: number;
  isAdmin: boolean;
  listData: any[]; // Add listData prop
};

const DynamicList: React.FC<DynamicListProps> = ({ onDelete, pageSize, isAdmin, listData }) => {
  const [selectedLink, setSelectedLink] = useState<string | undefined>(undefined);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(pageSize);

  useEffect(() => {
    setCurrentPage(1);
  }, [listData, pageSize]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  

  const handleClick = async (link: string) => {
    const URL = await openFile(link)
    setSelectedLink(URL);
  };

  const closeModal = () => {
    setSelectedLink(undefined);
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [listData]);

  useEffect(() => {
    setCurrentPage(1);
    // Update itemsPerPage when pageSize changes
    setItemsPerPage(pageSize);
  }, [pageSize]);

  if (!listData || listData.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center ">
        <img src={NoDataImage} alt="No list" className="mb-2 h-3/6 w-3/6" />
        <p className="text-BlueHeader font-black text-lg">NO FILE AVAILABLE</p>
      </div>
    );
  }
  
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = Array.from(listData).slice(startIndex, endIndex);
  
  console.log(currentData)

  const handleDeleteItem = (itemId: string) => {
    const newData = [...listData]; // Use the listData prop
    const index = newData.findIndex((item) => item.fileID === itemId);
    if (index !== -1) {
      newData.splice(index, 1);
      onDelete(itemId); // Call the onDelete function to update the listData
    }
  };

  

  const handlePageSizeChange = (newSize: number) => {
    // Update the itemsPerPage and pageSize states when the user selects a new value
    setItemsPerPage(newSize);
  };

  const listHeight = isAdmin ? '45vh' : '53vh';

  return (
      <div className="pt-2">
        <div className="list-container" style={{ height: listHeight, overflowY: 'auto' }}>
          <ul className="list-disc">
            {currentData.map((item) => (
              <li key={item.fileID} className="shadow-md border rounded-md p-4 mb-4 flex items-center justify-between">
                {item.fileType === 'PDF' ? (
                  <img src={PDFIcon} alt="PDF Icon" className="h-12 w-12 mr-4" />
                ) : (
                  <img src={XLSXIcon} alt="XLSX Icon" className="h-12 w-12 mr-4" />
                )}
                <div className="flex-grow w-52">
                  <a key={parseInt(item.fileID)} onClick={() => handleClick(item.fileName)}>
                    <strong>{item.fileName}</strong>
                    <div>
                      {item.fileType}
                    </div>
                  </a>
                </div>
                {isAdmin && (<DeleteButton itemId={item.fileID} itemName={item.fileName} onDelete={handleDeleteItem} />)}
              </li>
            ))}
            {selectedLink && (<Modal isOpen={true} toggle={closeModal} filepath={selectedLink} />)}
          </ul>
        </div>
        <div className="w-full my-2">
          <Pagination
            totalItems={listData.length}
            itemsPerPage={itemsPerPage}
            onPageChange={handlePageChange}
            currentPage={currentPage}
          />
        </div>
      </div>
  );
};

export default DynamicList;