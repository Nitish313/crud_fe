import { useSelector } from 'react-redux';

function Departments() {
  const departments = useSelector((state) => state.department);

  return (<table>
    <tr>
      <td>Dname</td>
      <td>Location</td>
    </tr>
    {
      departments.map(department => {
        const { dname, loc } = department;
        return(<tr>
          <td>{dname}</td>
          <td>{loc}</td>
        </tr>)
      })
    }
  </table>)
}

export default Departments;
