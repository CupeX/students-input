import { Link, Route, Switch, useRouteMatch } from 'react-router-dom';
import NewStudent from '../../pages/NewStudent';
import StudentDetails from './StudentDetails';
import './students.css';

const StudentsList = props => {
  const match = useRouteMatch();

  return (
    <section>
      <table>
        <thead>
          <tr>
            <th>first name</th>
            <th>last name</th>
            <th>birth</th>
          </tr>
        </thead>
        <tbody>
          {props.students.map(st => (
            <tr key={st.id} id={st.id}>
              <td>
                <span>{st.fName} </span>
              </td>
              <td>
                <span>{st.lName} </span>
              </td>
              <td>{st.year}</td>
              <td className="btn-td">
                <button
                  className="view-btn"
                  onClick={() => props.onChangeInput(st.id)}
                >
                  change
                </button>
              </td>
              <td className="btn-td">
                <button className="view-btn">
                  <Link to={`${match.url}/${st.id}`}>info</Link>
                </button>
              </td>
              <td className="btn-td">
                <button
                  className="delete-btn"
                  onClick={() => props.onRemoveStudent(st.id)}
                >
                  delete student
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default StudentsList;
