import { useParams } from "react-router-dom";
import EmployeeForm from "../components/EmployeeForm";

const EditEmployeePage = ({ employees, setEmployees }) => {
  const { id } = useParams();
  const employee = employees.find(emp => emp.id === Number(id));

  return (
    <div className="min-h-screen bg-gray-950 p-6">
      <EmployeeForm
        employees={employees}
        setEmployees={setEmployees}
        isEdit={true}
        employee={employee}
      />
    </div>
  );
};

export default EditEmployeePage;
