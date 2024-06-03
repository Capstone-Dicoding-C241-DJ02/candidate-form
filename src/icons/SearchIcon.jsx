import Types from 'prop-types';

const SearchIcon = ({className}) => {
  return (
    <svg
      viewBox="0 0 84 84"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M73.5 73.5L52.5 52.5M10.5 35C10.5 38.2174 11.1337 41.4033 12.365 44.3757C13.5962 47.3482 15.4008 50.0491 17.6759 52.3241C19.9509 54.5992 22.6518 56.4038 25.6243 57.6351C28.5967 58.8663 31.7826 59.5 35 59.5C38.2174 59.5 41.4033 58.8663 44.3757 57.6351C47.3482 56.4038 50.0491 54.5992 52.3241 52.3241C54.5992 50.0491 56.4038 47.3482 57.6351 44.3757C58.8663 41.4033 59.5 38.2174 59.5 35C59.5 31.7826 58.8663 28.5967 57.6351 25.6243C56.4038 22.6518 54.5992 19.9509 52.3241 17.6759C50.0491 15.4008 47.3482 13.5962 44.3757 12.365C41.4033 11.1337 38.2174 10.5 35 10.5C31.7826 10.5 28.5967 11.1337 25.6243 12.365C22.6518 13.5962 19.9509 15.4008 17.6759 17.6759C15.4008 19.9509 13.5962 22.6518 12.365 25.6243C11.1337 28.5967 10.5 31.7826 10.5 35Z"
        strokeWidth="7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

SearchIcon.propTypes = {
  className: Types.string,
};

export default SearchIcon;
