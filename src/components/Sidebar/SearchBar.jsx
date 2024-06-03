import SearchIcon from '../../icons/SearchIcon';

const SearchBar = () => {
  return (
    <div className="flex gap-2 items-center my-2">
      <di className="w-full">
        <input
          className="px-3 py-2 border w-full border-black rounded"
          type="text"
          placeholder="cari lowongan"
          id="search"
        />
      </di>
      <button className="bg-primary-blue p-3 rounded">
        <SearchIcon className={'stroke-white w-[20px]'} />
      </button>
    </div>
  );
};

export default SearchBar;
