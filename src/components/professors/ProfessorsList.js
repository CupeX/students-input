import { Link, useRouteMatch } from 'react-router-dom';

const ProfessorsList = props => {
  const match = useRouteMatch();

  return (
    <section>
      <table>
        <thead>
          <tr>
            <th>more info</th>
            <th>title</th>
            <th>first name</th>
            <th>last name</th>
            <th>subject</th>
          </tr>
        </thead>
        <tbody>
          {props.professors.map(st => (
            <tr key={st.id} id={st.id}>
              <td className="btn-td">
                <Link to={`${match.url}/${st.id}`}>
                  <button className="info-btn">&#8505;</button>
                </Link>
              </td>
              <td>
                <span>prof: </span>
              </td>
              <td>
                <span>{st.title.fName} </span>
              </td>
              <td>
                <span>{st.title.lName} </span>
              </td>
              <td>
                <span>{st.title.subject} </span>
              </td>
              {/* <td className="btn-td change-td">
                <button
                  className="change-btn"
                  onClick={() => props.onChangeInput(st.id)}
                >
                  change
                </button>
              </td>
              <td className="btn-td change-td">
                <button
                  className="change-btn"
                  onClick={() => props.onAddStudentToSubject(st.id)}
                >
                  add student
                </button>
              </td>*/}
              <td className="btn-td delete-td">
                <button
                  className="delete-btn"
                  onClick={() => props.onRemoveSubject(st.id)}
                >
                  delete subject
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default ProfessorsList;
