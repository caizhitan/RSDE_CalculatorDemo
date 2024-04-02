import React, { useState, useEffect } from 'react';
import Menu from '../Component/Menu';
import DynamicList from '../Component/DynamicList';
import PageSize from '../Component/PageSize';
import { GetAllFiles } from '../Services/filesAPI';
import SearchBar from '../Component/SearchBar';
import FileTypeFilter from '../Component/FileTypeFilter';
import FileUpload from '../Component/FileUpload';
import LoadingModal from '../Component/LoadingModal';

interface FileInfo {
  fileName: string;
  fileID: string;
  fileType: 'PDF' | 'EXCEL';
}

interface UserInformation {
  name: string;
  isAdmin: boolean;
}

const Home: React.FC = () => {
  const [data, setData] = useState<FileInfo[]>([]);
  const [filteredData, setFilteredData] = useState<FileInfo[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [pageSize, setPageSize] = useState<number>(5);
  const [admin, setAdmin] = useState<boolean>(false);
  const [name, setName] = useState<string>('');
  const [userInformation, setUserInformation] = useState<UserInformation | null>(null);
  const [appliedSortBy, setAppliedSortBy] = useState<'asc' | 'desc' | 'none'>('none');
  const [appliedFileType, setAppliedFileType] = useState<'PDF' | 'EXCEL' | 'all'>('all');

  useEffect(() => {
    const fetchFiles = async () => {
      setLoading(true);
      try {
        const result = await GetAllFiles();
        setData(Array.isArray(result) ? result : []);
      } catch (error) {
        console.error('Error fetching files:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchFiles();

    const sessionInfo = localStorage.getItem('user');
    if (sessionInfo) {
      const userInfo: UserInformation = JSON.parse(sessionInfo);
      setUserInformation(userInfo);
      setName(userInfo.name);
      setAdmin(userInfo.isAdmin);
    }
  }, []);

  useEffect(() => {
    const filtered = data.filter(item =>
      item.fileName.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredData(filtered);
  }, [data, searchQuery]);

  const handleDeleteItem = (itemId: string) => {
    const newData = data.filter(item => item.fileID !== itemId);
    setData(newData);
  };

  const handlePageSizeChange = (newSize: number) => {
    setPageSize(newSize);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleFilterChange = (newSortBy: 'asc' | 'desc' | 'none', newFileType: 'PDF' | 'EXCEL' | 'all') => {
    setAppliedSortBy(newSortBy);
    setAppliedFileType(newFileType);
  };

  const handleUploadSuccess = () => {
    alert('File uploaded successfully!');
  };

  let sortedAndFilteredData = [...filteredData];
  if (appliedSortBy !== 'none') {
    sortedAndFilteredData.sort((a, b) =>
      appliedSortBy === 'asc' ? a.fileName.localeCompare(b.fileName) : b.fileName.localeCompare(a.fileName)
    );
  }
  if (appliedFileType !== 'all') {
    sortedAndFilteredData = sortedAndFilteredData.filter(
      item => item.fileType === appliedFileType
    );
  }

  return (
    <div>
      <Menu text="View Files" name={name} />
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
          <FileUpload setLoading={setLoading} onSuccess={handleUploadSuccess} />
        )}
        <FileTypeFilter onFilterChange={handleFilterChange} />
        <DynamicList onDelete={handleDeleteItem} pageSize={pageSize} isAdmin={admin} listData={sortedAndFilteredData} />
      </div>
      {loading && <LoadingModal isOpen={loading} toggle={() => setLoading(false)} />}
    </div>
  );
};

export default Home;
