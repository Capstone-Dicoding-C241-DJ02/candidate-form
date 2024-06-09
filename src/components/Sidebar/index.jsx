import Card from '../Card';
import JobCard from '../JobCard';
import dicodingLogo from '../../assets/dicoding-logo.png';
import SearchBar from './SearchBar';
import api from '../../utils/api';
import {useEffect, useState} from 'react';
import Pagination from './Pagination';
import {useParams} from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="h-[300px] grid place-content-center">
      <span>Lowongan tidak ditemukan...</span>
    </div>
  );
};

const Sidebar = () => {
  const [jobs, setJobs] = useState([]);
  const [totalData, setTotalData] = useState(0);
  const [queryParams, setQueryParams] = useState({search: '', page: 1});
  const {id} = useParams();

  const getJobs = async (params) => {
    const {data} = await api(params).get('/jobs');

    return data.data;
  };

  useEffect(() => {
    getJobs(queryParams).then((data) => {
      setJobs(data.jobs);
      setTotalData(data.totalData);
    });
  }, [queryParams]);

  const handleSearch = async (searchText) => {
    setQueryParams(() => ({page: 1, search: searchText}));
  };

  const goToNextPage = async (page) => {
    setQueryParams((prev) => ({...prev, page}));
  };

  return (
    <Card
      className={'p-3 w-[300px] md:w-[450px] h-[650px] overflow-clip bg-white'}
    >
      <div className="mb-3">
        <img src={dicodingLogo} alt="Dicoding logo" />
        <h2 className="text-lg mt-4">Daftar Lowongan</h2>
      </div>
      <SearchBar onSearch={handleSearch} />
      <div className="overflow-y-auto h-[400px]">
        <div className="space-y-10">
          {jobs.length ? (
            jobs.map((job) => (
              <JobCard
                key={job.id}
                city={job.city}
                id={job.id}
                logo={job.logo}
                sector={job.business_sector}
                title={job.title}
                isActive={job.id === Number(id)}
              />
            ))
          ) : (
            <NotFound />
          )}
          <Pagination totalData={totalData} onPageChange={goToNextPage} />
        </div>
      </div>
    </Card>
  );
};

export default Sidebar;
