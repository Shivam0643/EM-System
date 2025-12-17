import { useState } from "react";
import { Link } from "react-router-dom";
import EmployeeList from "../components/EmployeeList";
import SearchBar from "../components/SearchBar";
import SortBar from "../components/SortBar";

const EmployeeListPage = ({ employees, setEmployees }) => {
  const [search, setSearch] = useState("");

  const filtered = employees.filter(emp =>
    emp.name.toLowerCase().includes(search.toLowerCase()) ||
    emp.email.toLowerCase().includes(search.toLowerCase()) ||
    emp.role.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-950 p-6">
      <div className="max-w-4xl mx-auto mt-20">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-4xl font-semibold text-gray-200 hover:scale-105 hover:text-gray-200 duration-200 transition-all">Employees</h1>
          <Link
            to="/employees/new"
            className="bg-blue-600 hover:bg-blue-700 duration-200 text-white px-4 py-2 rounded"
          >
            + Add Employee
          </Link>
        </div>

        <SearchBar search={search} setSearch={setSearch} />
        <SortBar employees={employees} setEmployees={setEmployees} />

        <EmployeeList employees={filtered} setEmployees={setEmployees} />
      </div>
    </div>
  );
};

export default EmployeeListPage;
