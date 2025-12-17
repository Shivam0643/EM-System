const SearchBar = ({ search, setSearch }) => {
  return (
    <input
      type="text"
      placeholder="Search by name, role or email..."
      value={search}
      onChange={e => setSearch(e.target.value)}
      className="w-full p-2 text-gray-900 border-2 border-gray-300 rounded mb-3 bg-gray-200 outline-none my-3"
    />
  );
};

export default SearchBar;
