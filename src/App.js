import './App.css';
import { Routes, Route } from 'react-router-dom';
import NavbarButtons from './components/NavbarButtons';
import {useEffect, useState} from 'react';
import Employees from './components/Employees';
import Departments from './components/Departments';
import { useDispatch } from "react-redux";
import { viewEmployees } from "./features/employee/employeeSlice";
import { viewDepartments } from "./features/department/departmentSlice";
import CreateEmployeeForm from './pages/createEmployeeForm';
import UpdateEmployeeForm from './pages/updateEmployeeForm';
function App() {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({ q: '' });

  const handleSearch = () => {
    fetch(`http://localhost:3001/employees?q=${formData.q}`, {method: 'GET'})
      .then(res => res.json())
      .then(data => {dispatch(viewEmployees({employees: data, order: 'asc'}));})
      .catch(err => {console.log(err)});
  }

  useEffect(() => {
    handleSearch();
  }, [formData.q]);

  useEffect(() => {
    const fetchDepartments = () => {
      fetch('http://localhost:3001/departments', { method: 'GET' })
        .then(res => res.json())
        .then(data => {
          dispatch(viewDepartments(data))
        })
        .catch(err => console.log(err))
    }
    fetchDepartments();
  }, [])

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <NavbarButtons />
      <div className="container">
        <form onSubmit={handleSearch}>
          <div className="row my-2">
            <div className="col-12">
              <input
                className='form-control'
                type="text"
                name="q"
                value={formData.q}
                onChange={handleChange}
                placeholder='Search employee'
                required
              />
            </div>
          </div>
        </form>
      </div>
      <Routes>
        <Route path="/employees/new" element={<CreateEmployeeForm />}/>
        <Route path="/employees/:id/edit" element={<UpdateEmployeeForm />}/>
        <Route path="/employees" element={<Employees />}/>
        <Route path="/departments" element={<Departments />} />
      </Routes>
    </>
  );
}

export default App;
