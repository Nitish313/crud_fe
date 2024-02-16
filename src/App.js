import './App.css';
import { Routes, Route } from 'react-router-dom';
import NavbarButtons from './components/NavbarButtons';
import {useEffect} from 'react';
import Employees from './components/Employees';
import Departments from './components/Departments';
import { useDispatch } from "react-redux";
import { viewEmployees } from "./features/employee/employeeSlice";
import { viewDepartments } from "./features/department/departmentSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchEmployees = () => {
      fetch('http://localhost:3001/employees', { method: 'GET' })
        .then(res => res.json())
        .then(data => {
          dispatch(viewEmployees(data));
        })
        .catch(err => {
          console.log(err)});
    }

    fetchEmployees();
  });

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

  return (
    <Routes>
      <Route path="/" element={<NavbarButtons />}/>
      <Route path="/employees" element={<Employees />}/>
      <Route path="/departments" element={<Departments />} />
    </Routes>
  );
}

export default App;
