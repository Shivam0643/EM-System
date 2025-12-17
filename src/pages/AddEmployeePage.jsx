import EmployeeForm from "../components/EmployeeForm";

const AddEmployeePage = ({ employees, setEmployees }) => {
  return (
    <div className="min-h-screen bg-gray-950 p-6">
      <EmployeeForm
        employees={employees}
        setEmployees={setEmployees}
        isEdit={false}
      />
    </div>
  );
};

export default AddEmployeePage;
