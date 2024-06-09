import Card from '../Card';
import {Link} from 'react-router-dom';
import Types from 'prop-types';
import clsx from 'clsx';

const JobCard = ({id, title, logo, sector, city, isActive}) => {
  return (
    <Link to={`/jobs/${id}`}>
      <Card
        className={clsx('flex items-center p-2 gap-10 cursor-pointer', {
          'bg-primary-blue': isActive,
          'bg-white': !isActive,
        })}
      >
        <img
          src={logo}
          alt="logo-company"
          className="object-cover w-[60px] h-[60px] rounded-full border-2 border-primary-blue bg-white"
        />
        <div
          className={clsx('flex flex-col gap-2', {
            'text-white': isActive,
            'text-black': !isActive,
          })}
        >
          <h2 className="text-lg">{title}</h2>
          <div className="flex flex-col gap-2">
            <span className="font-medium text-sm">{city}</span>
            <span className="text-sm">{sector}</span>
          </div>
        </div>
      </Card>
    </Link>
  );
};

JobCard.propTypes = {
  id: Types.number.isRequired,
  title: Types.string.isRequired,
  city: Types.string.isRequired,
  sector: Types.string.isRequired,
  logo: Types.string.isRequired,
  isActive: Types.bool,
};

export default JobCard;
