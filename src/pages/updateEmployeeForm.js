import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
const UpdateEmployeeForm = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [formData, setFormData] = useState({
    id: 0,
    ename: '',
    job: '',
    mgr_id: null,
    hireddate: '',
    sal: 0,
    comm: 0,
    department_id: null
  });

  useEffect(() => {
    const fetchEmployee = () => {
      fetch(`http://localhost:3001/employees/${id}`, { method: 'GET' })
        .then(res => res.json())
        .then(data => {
          setFormData(data)
        })
        .catch(err => {
          console.log(err)});
    }

    fetchEmployee();
  }, []);


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    fetch(`http://localhost:3001/employees/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
    }).then((res) => {
      if (res.ok){
        alert('Employee updated sucessfully')
        navigate('/employees')
        window.location.reload()
      }
    }).catch(err => console.error(err))
  };

  return (
    <div class='container'>
      <h2>Update Employee</h2>
      <form onSubmit={handleSubmit}>
        <div className="row my-2">
          <div className="col">
            <input
              className='form-control'
              type="text"
              name="ename"
              value={formData.ename}
              onChange={handleChange}
              placeholder='Employee Name'
              required
            />
          </div>
          <div className="col">
            <input
              className='form-control'
              type="text"
              name="job"
              value={formData.job}
              onChange={handleChange}
              placeholder='Job'
              required
            />
          </div>
        </div>
        <div className="row my-2">
          <div className='col'>
            <input
              className='form-control'
              type="number"
              name="mgr_id"
              value={formData.mgr_id}
              onChange={handleChange}
              placeholder='Manager ID'
            />
          </div>
          <div className='col'>
            <input
              className='form-control'
              type="date"
              name="hireddate"
              value={formData.hireddate}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="row my-2">
          <div className='col'>
            <input
              className='form-control'
              type="number"
              name="sal"
              value={formData.sal}
              onChange={handleChange}
              placeholder='Salary'
              required
            />
          </div>
          <div className='col'>
            <input
              className='form-control'
              type="number"
              name="comm"
              value={formData.comm}
              onChange={handleChange}
              placeholder='Commission'
              required
            />
          </div>
        </div>
        <div className="row my-2">
          <div className='col'>
            <input
              className='form-control'
              type="number"
              name="department_id"
              value={formData.department_id}
              onChange={handleChange}
              placeholder='Department ID'
              required
            />
          </div>
          <div className='col'><button type="submit" className='btn btn-primary'>Submit</button></div>
        </div>
      </form>
    </div>
  );
};

export default UpdateEmployeeForm;