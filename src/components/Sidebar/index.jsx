import Card from '../Card';
import JobCard from '../JobCard';
import dicodingLogo from '../../assets/dicoding-logo.png';
import SearchBar from './SearchBar';
import api from '../../utils/api';
import {useState} from 'react';

const NotFound = () => {
  return (
    <div className="h-[300px] grid place-content-center">
      <span>Lowongan tidak ditemukan...</span>
    </div>
  );
};

const Sidebar = () => {
  const [jobs, setJobs] = useState([]);

  const getJobs = async (searchQuery = '') => {
    const {data} = await api({search: searchQuery}).get('/jobs');
    const jobsData = data.data.jobs;

    return jobsData;
  };

  useState(() => {
    getJobs().then((data) => setJobs(data));
  }, []);

  const handleSearch = async (searchText) => {
    const data = await getJobs(searchText);
    setJobs(data);
  };

  return (
    <Card className={'p-3 w-[300px] md:w-[450px] h-[650px] overflow-clip'}>
      <div className="mb-3">
        <img src={dicodingLogo} alt="Dicoding logo" />
        <h2 className="text-lg mt-4">Daftar Lowongan</h2>
      </div>
      <SearchBar onSearch={handleSearch} />
      <div className="overflow-y-auto max-h-[650px]">
        <div className="space-y-3 pb-8">
          {jobs.length ? (
            jobs.map((job) => (
              <JobCard
                key={job.id}
                city={job.city}
                id={job.id}
                logo={job.logo}
                sector={job.business_sector}
                title={job.title}
              />
            ))
          ) : (
            <NotFound />
          )}
        </div>
      </div>
    </Card>
  );
};

export default Sidebar;
