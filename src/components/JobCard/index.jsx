import Card from '../Card';
import {Link} from 'react-router-dom';
import Types from 'prop-types';

const JobCard = ({id, title, logo, sector, city}) => {
  return (
    <Link to={`/jobs/${id}`}>
      <Card className={'flex items-center p-2 gap-10 cursor-pointer'}>
        <img
          src={logo}
          alt="logo-company"
          className="object-cover w-[60px] h-[60px] rounded-full border-2 border-primary-blue"
        />
        <div className="flex flex-col gap-2">
          <h2 className="text-black text-lg">{title}</h2>
          <div className="flex flex-col">
            <span className="text-black font-medium text-sm">{city}</span>
            <span className="text-black text-sm">{sector}</span>
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
};

export default JobCard;
