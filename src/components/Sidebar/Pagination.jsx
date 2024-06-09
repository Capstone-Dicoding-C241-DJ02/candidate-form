import {useEffect, useState} from 'react';
import Types from 'prop-types';

const Pagination = ({onPageChange, totalData}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(totalData / 10);

  useEffect(() => {
    setCurrentPage(1);
  }, [totalData]);

  const handleBack = () => {
    setCurrentPage((prev) => {
      if (prev === 1) return 1;
      const newPage = prev - 1;
      onPageChange(newPage);
      return newPage;
    });
  };

  const handleNext = () => {
    setCurrentPage((prev) => {
      if (prev >= totalPages) return totalPages;
      const newPage = prev + 1;
      onPageChange(newPage);
      return newPage;
    });
  };

  return (
    <div className="flex gap-10 md:gap-4 md:justify-start items-center justify-center">
      <div className="flex items-center gap-10 md:gap-2">
        <button
          className="bg-white rounded shadow-primary px-4 py-2 text-black"
          onClick={handleBack}
        >
          {'<'} Back
        </button>
        <button
          className="bg-primary-blue rounded shadow-primary px-4 py-2 text-white"
          onClick={handleNext}
        >
          Next {'>'}
        </button>
      </div>
      <span className="text-black">
        Page {currentPage} of {totalPages}
      </span>
    </div>
  );
};

Pagination.propTypes = {
  onPageChange: Types.func,
  totalData: Types.number.isRequired,
};

export default Pagination;
