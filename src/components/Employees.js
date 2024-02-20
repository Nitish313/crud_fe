import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { viewEmployees } from '../features/employee/employeeSlice'
import Pagination from './Pagination';
import { useNavigate } from 'react-router-dom';

function Employees() {
  const [currentPage, setCurrentPage] = useState(0);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { employees, sortOrder } = useSelector(state => state.employees);
  const itemsPerPage = 10;

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentPageData = employees.slice(startIndex, endIndex);

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  const handleDelete = (id) => {
    fetch(`http://localhost:3001/employees/${id}`, { method: 'DELETE' })
      .then((res) => {
        if (res.ok) {
          alert('Employee deleted sucessfully')
          window.location.reload()
        }
      }
      ).catch(err => console.error(err))
  };

  const handleSort = () => {
    const newOrder = sortOrder === 'asc' ? 'desc' : 'asc';
    dispatch(viewEmployees({employees: employees, order: newOrder}));
  };

  return (
    <div className="container">
      <div className="row my-3">
        <div className="col-2">
          <b>ENAME</b>
          <button onClick={handleSort}>Sort</button>
        </div>
        <div className="col-2">
          <b>JOB</b>
        </div>
        <div className="col-1">
          <b>MANAGER</b>
        </div>
        <div className="col-2">
          <b>HIRED DATE</b>
        </div>
        <div className="col-1">
          <b>SALARY</b>
        </div>
        <div className="col-1">
          <b>COMM</b>
        </div>
        <div className="col-1">
          <b>DEPT</b>
        </div>
        <div className="col-2">
          <b>ACTION</b>
        </div>
      </div>

      {
        currentPageData.map((employee, index) => {
          const { id, ename, job, mgr_id, hireddate, sal, comm, department_id } = employee;
          return (<div className="row my-3" key={index}>
            <div className="col-2">{ename}</div>
            <div className="col-2">{job}</div>
            <div className="col-1">{mgr_id}</div>
            <div className="col-2">{hireddate}</div>
            <div className="col-1">{sal}</div>
            <div className="col-1">{comm}</div>
            <div className="col-1">{department_id}</div>
            <div className="col-1">
              <button
                onClick={() => navigate(`/employees/${id}/edit`)}
                className='btn btn-primary'
              >
                UPDATE
              </button>
            </div>
            <div className="col-1">
              <button
                className='btn btn-primary'
                onClick={() => handleDelete(id)}
              >
                DELETE
              </button>
            </div>
          </div>)
        })
      }

      <Pagination
        pageCount={Math.ceil(employees.length / itemsPerPage)}
        onPageChange={handlePageChange}
      />
    </div>
  )
}

export default Employees;
