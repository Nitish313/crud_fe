import { useNavigate } from 'react-router-dom';

function NavbarButtons() {
  const navigate = useNavigate();
  return(
    <>
      <button onClick={() => navigate('/employees')}>All employees</button>
      <button onClick={() => navigate('/departments')}>All departments</button>
    </>
  )
}

export default NavbarButtons;