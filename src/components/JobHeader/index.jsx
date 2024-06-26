import Card from '../Card';
import logo from '../../assets/react.svg';
import {Link} from 'react-router-dom';

const JobHeader = () => {
  return (
    <Card className={'flex items-center px-5 py-2 gap-10 justify-between'}>
      <div className="flex items-center gap-5">
        <img
          src={logo}
          alt="logo-company"
          className="object-cover w-[80px] h-[80px] rounded-full"
        />
        <div className="flex flex-col gap-2">
          <h2 className="text-black">ML Engineer</h2>
          <div className="flex flex-col">
            <span className="text-black font-medium">Jakarta</span>
            <span className="text-black">Finance</span>
          </div>
        </div>
      </div>
      <div>
        <Link to={'/jobs/id/apply'}>
          <button className="px-5 py-4 rounded bg-primary-blue text-white">
            Apply Lowongan
          </button>
        </Link>
      </div>
    </Card>
  );
};

export default JobHeader;
