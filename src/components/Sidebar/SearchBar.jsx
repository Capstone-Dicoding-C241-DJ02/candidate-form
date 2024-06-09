import Types from 'prop-types';
import {useState} from 'react';

import SearchIcon from '../../icons/SearchIcon';

const SearchBar = ({onSearch}) => {
  const [search, setSearch] = useState('');

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(search);
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 items-center my-2">
      <input
        onChange={handleChange}
        className="px-3 py-2 border w-full border-black rounded"
        type="text"
        autoComplete="off"
        value={search}
        placeholder="cari lowongan"
        id="search"
      />
      <button className="bg-primary-blue p-2 rounded">
        <SearchIcon className={'stroke-white w-[25px]'} />
      </button>
    </form>
  );
};

SearchBar.propTypes = {
  onSearch: Types.func,
};

export default SearchBar;
