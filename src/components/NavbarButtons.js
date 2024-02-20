import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function NavbarButtons() {
  const activeClass = 'btn btn-outline-success';
  const inactiveClass = 'btn btn-sm btn-outline-secondary';
  const [navButton, setNavButton] = useState('employee');
  const navigate = useNavigate();


  const handleNavButtonClick = (type) => {
    switch (type) {
      case 'employee':
        navigate('/employees');
        setNavButton('employee')
        break;
      case 'department':
        navigate('/departments');
        setNavButton('department');
        break;
      case 'newEmployeeForm':
        navigate('/employees/new');
        setNavButton('new-employee-form');
        break;
      default:
        break;
    }
  };

  return (
    <nav className="navbar navbar-light bg-dark">
      <div className="container">
        <form className="w-100 d-flex justify-content-between">
          <div>
            <button
              className={navButton == 'employee' ? activeClass : inactiveClass}
              type="button"
              onClick={() => handleNavButtonClick('employee')}
            >
              Employees
            </button>

            <button
              className={navButton == 'department' ? activeClass : inactiveClass}
              type="button"
              onClick={() => handleNavButtonClick('department')}
            >
              Departments
            </button>
          </div>
          <div>
            <button
              className={navButton == 'new-employee-form' ? activeClass : inactiveClass}
              type="button"
              onClick={() => handleNavButtonClick('newEmployeeForm')}
            >
              Create Employee
            </button>
          </div>
        </form>
      </div>
    </nav>
  )
}

export default NavbarButtons;