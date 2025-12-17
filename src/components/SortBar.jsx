const SortBar = ({ employees, setEmployees }) => {
  const sortByName = () => {
    const sorted = [...employees].sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    setEmployees(sorted);
  };

  return (
    <button
      onClick={sortByName}
      className="mb-3 bg-gray-500 font-semibold hover:bg-gray-600 duration-200 text-white px-3 py-2 rounded-lg"
    >
      Sort by Name
    </button>
  );
};

export default SortBar;
