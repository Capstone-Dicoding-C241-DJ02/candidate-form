import Card from '../Card';
import logo from '../../assets/react.svg';
import {Link} from 'react-router-dom';

const JobCard = () => {
  return (
    <Link to={`/jobs/id`}>
      <Card className={'flex items-center p-2 gap-10 cursor-pointer'}>
        <img
          src={logo}
          alt="logo-company"
          className="object-cover w-[60px] h-[60px] rounded-full border-2 border-primary-blue"
        />
        <div className="flex flex-col gap-2">
          <h2 className="text-black text-lg">ML Engineer</h2>
          <div className="flex flex-col">
            <span className="text-black font-medium text-sm">Jakarta</span>
            <span className="text-black text-sm">Finance</span>
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default JobCard;
