import React, { useState, useEffect } from 'react';
import Menu from '../Component/Menu';
import DynamicList from '../Component/DynamicList';
//import UploadButton from '../Component/UploadButton';
import PageSize from '../Component/PageSize';
import { GetAllFiles } from '../Services/filesAPI';
import SearchBar from '../Component/SearchBar'; // Import the SearchBar component
import FileTypeFilter from '../Component/FileTypeFilter';
import FileUpload from '../Component/FileUpload';
import LoadingModal from '../Component/LoadingModal';

const Admin = () => {
  const [data, setData] = useState<any[]>([]);
  const [filteredData, setFilteredData] = useState<any[]>([]); // State to hold filtered data
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(false);

  const getFiles = async () => {
    try {
      const result = await GetAllFiles();
      setData(result);
    } catch (error) {
      console.error('Error fetching files:', error);
    }
  };

  // async function getFiles(){
  //   GetAllFiles().then(result => setData(result));
  // }

  useEffect(() => {
    getFiles();
  }, []);

  //...<SearchBar>....
  useEffect(() => {
    // Filter data based on the search query
    const filtered = Array.from(data).filter(item =>
      item.fileName.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredData(filtered);
  }, [data, searchQuery]);
  
  const [pageSize, setPageSize] = useState(5); // Use state for pageSize
  const [admin, setAdmin] = useState(false);
  const [name, setName] = useState('');
  const [userInformation, setUserInformation] = useState('');
  

  useEffect(() => {
    const sessionInfo = localStorage.getItem('user')
    const UserInfo = sessionInfo ? JSON.parse(sessionInfo) : '';
    if (UserInfo !== null) {
      setUserInformation(UserInfo);
    }
  }, []);
  
  useEffect(() => {
    if (userInformation !== '') {
      const information = userInformation;
      let adminStatus = Object.values(information);
      setName(adminStatus[0]);
      // setAdmin(Boolean(adminStatus[5]));
      setAdmin(false)
    }
  }, [userInformation]);

  const handleDeleteItem = (itemId: string) => {
    // Create a copy of the data array
    const newData = [...data];
    // Find the index of the item with the provided ID
    const index = newData.findIndex((item) => item.fileID === itemId);
    if (index !== -1) {
      // Remove the item from the newData array
      newData.splice(index, 1);
      // Update the sortedData state with the updated array
      setData(newData)
    }
  };

  const handlePageSizeChange = (newSize: number) => {
    if (newSize === data.length) {
      // Show all items
      setPageSize(data.length);
    } else {
      // Update the pageSize state when the user selects a new value
      setPageSize(newSize);
    }
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  //....<Filter>.....
  const [appliedSortBy, setAppliedSortBy] = useState<'asc' | 'desc' | 'none'>('none');
  const [appliedFileType, setAppliedFileType] = useState<'PDF' | 'EXCEL' | 'all'>('all');
  const [isFilterApplied, setIsFilterApplied] = useState(false);

  const handleFilterChange = (newSortBy: 'asc' | 'desc' | 'none', newFileType: 'PDF' | 'EXCEL' | 'all') => {
    setAppliedSortBy(newSortBy);
    setAppliedFileType(newFileType);
    setIsFilterApplied(true);
  };

  let sortedAndFilteredData = [...filteredData];

  if (isFilterApplied) {
    if (appliedSortBy === 'asc' || appliedSortBy === 'desc') {
      sortedAndFilteredData = sortedAndFilteredData.sort((a, b) =>
        appliedSortBy === 'asc' ? a.fileName.localeCompare(b.fileName) : b.fileName.localeCompare(a.fileName)
      );
    }

    sortedAndFilteredData = Array.from(sortedAndFilteredData).filter(
      item => appliedFileType === 'all' || item.fileType === appliedFileType
    );
  }

  const handleUploadSuccess = () => {
    // Update data after successful file upload
    getFiles();

    // Set a timeout to ensure that the loading modal has ended
    setTimeout(() => {
      // Show a success alert to the user
      alert('File uploaded successfully!');
    }, 500); // Adjust the delay as needed
  };

  return (
    <div>
      <Menu text="View Files" name={name}/>

      <div className="mr-4 ml-4">
      <SearchBar onSearch={handleSearch} />
        <div className="flex flex-no-wrap justify-between items-center pb-2">
          <span className="text-Black mr-3 text-nowrap items-center">
            {sortedAndFilteredData.length} files total
          </span>
          <div className="flex items-center" style={{ borderBottom: '1px solid rgba(0, 0, 0, 0.1)', paddingBottom: '5px' }}>
            <PageSize pageSize={pageSize} totalItems={data.length} onPageSizeChange={handlePageSizeChange} />
          </div>
        </div>
        {admin && (
          <div className="mb-2" style={{ borderBottom: '1px solid rgba(0, 0, 0, 0.1)', paddingBottom: '5px' }}>
            <FileUpload setLoading={setLoading}  onSuccess={handleUploadSuccess}></FileUpload>
          </div>
        )}
        <div className="mb-2">
        <FileTypeFilter onFilterChange={handleFilterChange} />
      </div>
        <DynamicList onDelete={handleDeleteItem} pageSize={pageSize} isAdmin={admin} listData={sortedAndFilteredData} />
      </div>
      {loading && (
            <LoadingModal isOpen={loading} toggle={() => setLoading(false)} />
          )}
    </div>
  );
};

export default Admin;