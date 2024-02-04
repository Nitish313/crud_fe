function Employees({employees}) {
  return (<table>
    <tr>
      <td>Ename</td>
      <td>Job</td>
      <td>Manager</td>
      <td>Hired Date</td>
      <td>Salary</td>
      <td>Commission</td>
      <td>Department</td>
    </tr>
    {
      employees.map(employee => {
        const { ename, job, mgr_id, hireddate, sal, comm, department_id } = employee;
        console.log(employee);
        return(<tr>
          <td>{ename}</td>
          <td>{job}</td>
          <td>{mgr_id}</td>
          <td>{hireddate}</td>
          <td>{sal}</td>
          <td>{comm}</td>
          <td>{department_id}</td>
        </tr>)
      })
    }
  </table>)
}

export default Employees;
