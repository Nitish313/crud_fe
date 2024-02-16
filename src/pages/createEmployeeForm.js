import React, { useState } from 'react';

const CreateEmployeeForm = () => {
  const [formData, setFormData] = useState({
    ename: '',
    job: '',
    mgr_id: null,
    hireddate: '',
    sal: 0,
    comm: 0,
    department_id: null
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    fetch('http://localhost:3001/employees', {
      method: 'POST',
      body: JSON.stringify(formData)
    }).then((res) => {
      if (res.ok)
        alert('Employee created sucessfully')
    }).catch(err => console.error(err))
  };

  return (
    <div>
      <h2>Create Employee</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="ename"
            value={formData.ename}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Job:</label>
          <input
            type="text"
            name="job"
            value={formData.job}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Manager ID:</label>
          <input
            type="number"
            name="mgr_id"
            value={formData.mgr_id}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Manager ID:</label>
          <input
            type="date"
            name="hireddate"
            value={formData.hireddate}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Salary:</label>
          <input
            type="number"
            name="sal"
            value={formData.sal}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Commission:</label>
          <input
            type="number"
            name="comm"
            value={formData.comm}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Department ID:</label>
          <input
            type="number"
            name="department_id"
            value={formData.department_id}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreateEmployeeForm;