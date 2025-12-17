import EmployeeCard from "./EmployeeCard";

const EmployeeList = ({ employees, setEmployees }) => {
  if (employees.length === 0) {
    return <p className="text-center mt-4">No employees found</p>;
  }

  return (
    <div className="space-y-6 mt-4">
      {employees.map(emp => (
        <EmployeeCard
          key={emp.id}
          emp={emp}
          setEmployees={setEmployees}
        />
      ))}
    </div>
  );
};

export default EmployeeList;
