import Types from 'prop-types';
import {useEffect, useState} from 'react';
import {useDebounce} from 'use-debounce';
import InputText from '../InputText';

const SearchBar = ({onSearch}) => {
  const [search, setSearch] = useState('');
  const [searchValue] = useDebounce(search, 2000);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    onSearch(searchValue);
  }, [searchValue, onSearch]);

  return (
    <div className="flex gap-2 items-center my-2">
      <InputText
        label={'Cari'}
        onChange={handleChange}
        className="px-3 py-2 border w-full border-black rounded"
        type="text"
        value={search}
        placeholder="cari lowongan"
        id="search"
      />
    </div>
  );
};

SearchBar.propTypes = {
  onSearch: Types.func,
};

export default SearchBar;
