import {useState} from 'react';
import Employees from '../components/Employees'

function NavbarButtons() {
  const [employees, setEmployees] = useState([])
  const fetchEmployees = () => {
    fetch('http://localhost:3001/employees', { method: 'GET' })
      .then(res => res.json())
      .then(data => setEmployees(data))
      .catch(err => console.log(err))
  }

  return(
    <>
      <button onClick={fetchEmployees}>All employees</button>
      {employees.length > 0 ? <Employees employees={employees} /> : null}
    </>
  )
}

export default NavbarButtons;