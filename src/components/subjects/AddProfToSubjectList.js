const AddProffesorToSubjectList = props => {
  if (props.loading) {
    return <h2>Loading students list...</h2>;
  }

  return (
    <section>
      {!props.loading && <h2>all students list</h2>}
      <table>
        <thead>
          <tr>
            <th>first name</th>
            <th>last name</th>
            <th style={{ textAlign: 'end' }}>add to subject</th>
          </tr>
        </thead>
        <tbody>
          {props.professors.map(st => (
            <tr key={st.id} id={st.id}>
              <td>
                <span>{st.title.fName} </span>
              </td>
              <td>
                <span>{st.title.lName} </span>
              </td>

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
