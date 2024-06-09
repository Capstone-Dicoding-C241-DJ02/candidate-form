import Card from '../Card';
import {Link} from 'react-router-dom';
import Types from 'prop-types';

const JobHeader = ({id, logo, title, city, sector}) => {
  return (
    <Card
      className={'flex items-center px-5 py-2 gap-10 justify-between bg-white'}
    >
      <div className="flex items-center gap-5">
        <img
          src={logo}
          alt="logo-company"
          className="object-cover w-[80px] h-[80px] rounded-full"
        />
        <div className="flex flex-col gap-2">
          <h2 className="text-black">{title}</h2>
          <div className="flex flex-col">
            <span className="text-black font-medium">{city}</span>
            <span className="text-black">{sector}</span>
          </div>
        </div>
      </div>
      <div>
        <Link to={`/jobs/${id}/apply`}>
          <button className="px-5 py-4 rounded bg-primary-blue text-white">
            Apply Lowongan
          </button>
        </Link>
      </div>
    </Card>
  );
};

JobHeader.propTypes = {
  id: Types.number.isRequired,
  title: Types.string.isRequired,
  logo: Types.string.isRequired,
  city: Types.string.isRequired,
  sector: Types.string.isRequired,
};

export default JobHeader;
