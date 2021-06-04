import { Link, useRouteMatch } from 'react-router-dom';

const SubjectsList = props => {
  const match = useRouteMatch();

  return (
    <section>
      <table>
        <thead>
          <tr>
            <th>more info</th>
            <th>subject name</th>
            <th>change sbject title</th>
            <th>add student</th>
          </tr>
        </thead>
        <tbody>
          {props.subjects.map(st => (
            <tr key={st.id} id={st.id}>
              <td className="btn-td">
                <Link to={`${match.url}/${st.id}`}>
                  <button className="info-btn">&#8505;</button>
                </Link>
              </td>
              <td>
                <span>{st.title} </span>
              </td>
              <td className="btn-td change-td">
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
              </td>
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

export default SubjectsList;
