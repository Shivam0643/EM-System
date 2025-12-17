import { Link } from "react-router-dom";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin5Line } from "react-icons/ri";

const EmployeeCard = ({ emp, setEmployees }) => {
  const handleDelete = () => {
    if (confirm("Delete this employee?")) {
      setEmployees(prev => prev.filter(e => e.id !== emp.id));
    }
  };

  return (
    <div className="bg-emerald-200 shadow-md shadow-emerald-600 p-4 rounded shadow flex justify-between">
      <div>
        <h3 className="text-xl font-semibold mb-1 mt-0">Name: {emp.name}</h3>
        <p className="text-gray-800">Role: {emp.role}</p>
        <p className="text-gray-800">Email: {emp.email}</p>
        <p className="text-gray-800">Phone: {emp.phone}</p>
      </div>

      <div className="space-x-2 flex justify-center items-center">
        <Link
          to={`/employees/${emp.id}`}
          className="bg-gray-800 hover:bg-gray-950 duration-200 text-white px-3 py-1 rounded flex justify-center items-center gap-1"
        >
          Edit <FiEdit />
        </Link>
        <button
          onClick={handleDelete}
          className="bg-red-500 hover:bg-red-700 duration-200 text-white px-3 py-1 rounded flex justify-center items-center gap-1"
        >
          Delete <RiDeleteBin5Line />
        </button>
      </div>
    </div>
  );
};

export default EmployeeCard;
