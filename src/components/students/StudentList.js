import { Link, useRouteMatch } from 'react-router-dom';
import './students.css';

const StudentsList = props => {
  const match = useRouteMatch();

  return (
    <section>
      <table>
        <thead>
          <tr>
            <th>info</th>
            <th>first name</th>
            <th>last name</th>
            <th>birth</th>
          </tr>
        </thead>
        <tbody>
          {props.students.map(st => (
            <tr key={st.id} id={st.id}>
              <td className="btn-td">
                <Link to={`${match.url}/${st.id}`}>
                  <button className="info-btn">&#8505;</button>
                </Link>
              </td>
              <td>
                <span>{st.fName} </span>
              </td>
              <td>
                <span>{st.lName} </span>
              </td>
              <td>{st.year}</td>
              <td className="btn-td change-td">
                <button
                  className="change-btn"
                  onClick={() => props.onChangeInput(st.id)}
                >
                  change
                </button>
              </td>
              <td className="btn-td delete-td">
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
