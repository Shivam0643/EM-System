import { Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { employeesData } from "./data/employees";
import { getEmployees, saveEmployees } from "./utils/storage";

import EmployeeListPage from "./pages/EmployeeListPage";
import AddEmployeePage from "./pages/AddEmployeePage";
import EditEmployeePage from "./pages/EditEmployeePage";

function App() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const stored = getEmployees();
    if (stored) setEmployees(stored);
    else setEmployees(employeesData);
  }, []);

  useEffect(() => {
    saveEmployees(employees);
  }, [employees]);

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/employees" />} />
      <Route
        path="/employees"
        element={<EmployeeListPage employees={employees} setEmployees={setEmployees} />}
      />
      <Route
        path="/employees/new"
        element={<AddEmployeePage employees={employees} setEmployees={setEmployees} />}
      />
      <Route
        path="/employees/:id"
        element={<EditEmployeePage employees={employees} setEmployees={setEmployees} />}
      />
    </Routes>
  );
}

export default App;
