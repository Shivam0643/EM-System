import { useNavigate } from "react-router-dom";
import { useState } from "react";

const EmployeeForm = ({setEmployees, isEdit, employee }) => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: employee?.name || "",
    role: employee?.role || "",
    email: employee?.email || "",
    phone: employee?.phone || "",
  });

  const [error, setError] = useState("");

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (!form.name || !form.email) {
      setError("Name and Email are required");
      return;
    }

    if (isEdit) {
      setEmployees(prev =>
        prev.map(emp =>
          emp.id === employee.id ? { ...emp, ...form } : emp
        )
      );
    } else {
      setEmployees(prev => [
        ...prev,
        { id: Date.now(), ...form },
      ]);
    }

    navigate("/employees");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto bg-gray-600 p-6 mt-20 rounded shadow"
    >
      <h2 className="text-3xl font-bold text-gray-200 flex items-center justify-center mb-6">
        {isEdit ? "Edit Employee" : "Add Employee"}
      </h2>

      {error && <p className="text-red-500 mb-2">{error}</p>}

      <input name="name" placeholder="Name" value={form.name} onChange={handleChange}
        className="w-full p-2 border-2 border-gray-300 mb-3 outline-none bg-gray-400 rounded-lg"/>
      <input name="role" placeholder="Role" value={form.role} onChange={handleChange}
        className="w-full p-2 border-2 border-gray-300 mb-3 outline-none bg-gray-400 rounded-lg" />
      <input name="email" placeholder="Email" value={form.email} onChange={handleChange}
        className="w-full p-2 border-2 border-gray-300 mb-3 outline-none bg-gray-400 rounded-lg" />
      <input name="phone" placeholder="Phone" value={form.phone} onChange={handleChange}
        className="w-full p-2 border-2 border-gray-300 mb-3 outline-none bg-gray-400 rounded-lg" />

      <button className="bg-cyan-500 hover:bg-cyan-600 duration-200 font-semibold text-white px-4 py-2 rounded w-full">
        Save
      </button>
    </form>
  );
};

export default EmployeeForm;
