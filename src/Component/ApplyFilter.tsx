import { useEffect, useState } from 'react';

const ApplyFilter = (data: any[], filters: string) => {
  const [filterData, setFilterData] = useState<any[]>([]);
  let filteredData = data.slice(); // Create a copy of the data array

  useEffect(()=>{
    async function getFiles() {
      // FilteredFile(filters)
      // .then(
      //   result => setFilterData(result)
      // );
    }
    getFiles();
    }, [])

  if (filters !== '') {
    if (filters === 'all') {
      // Include all file types
      filteredData = filteredData.filter(() => true);
    } else {
      filteredData = filterData
    }
  }

  return filteredData;
};

export default ApplyFilter;

