const AddProffesorToSubjectList = props => {
  return (
    <section>
      <h2>all professors list</h2>
      <table>
        <thead>
          <tr>
            <th>first name</th>
            <th>last name</th>
            <th>teaching</th>
            <th style={{ textAlign: 'end' }}>add to subject</th>
          </tr>
        </thead>
        <tbody>
          {props.professors.map(st => (
            <tr key={st.id} id={st.id}>
              <td>
                <span>{st.fName} </span>
              </td>
              <td>
                <span>{st.lName} </span>
              </td>
              <td>{st.subject === props.subjectId ? 'yes' : 'x'}</td>

              <td className="btn-td delete-td">
                <button
                  className="add-btn"
                  onClick={() => props.onAddProfessorToSubject(st.id)}
                >
                  add
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default AddProffesorToSubjectList;
