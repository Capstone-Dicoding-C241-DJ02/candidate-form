import Card from '../Card';
import JobCard from '../JobCard';
import dicodingLogo from '../../assets/dicoding-logo.png';
import SearchBar from './SearchBar';

const Sidebar = () => {
  return (
    <Card className={'p-3 w-[300px] md:w-[450px] max-h-[650px] overflow-clip'}>
      <div className="mb-3">
        <img src={dicodingLogo} alt="Dicoding logo" />
        <h2 className="text-lg mt-4">Daftar Lowongan</h2>
      </div>
      <SearchBar />
      <div className="overflow-y-auto max-h-[650px]">
        <div className="space-y-3 pb-8">
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
        </div>
      </div>
    </Card>
  );
};

export default Sidebar;
