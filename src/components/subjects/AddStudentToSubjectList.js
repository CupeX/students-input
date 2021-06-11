const AddStudentToSubjectList = props => {
  const filteredList = props.students.filter(
    x => !Object.keys(x.subjects).includes(props.subjectId)
  );

  return (
    <section>
      <table>
        <thead>
          <tr>
            <th>first name</th>
            <th>last name</th>
            <th style={{ textAlign: 'end' }}>add to subject</th>
          </tr>
        </thead>
        <tbody>
          {filteredList.map(st => (
            <tr key={st.id} id={st.id}>
              <td>
                <span>{st.fName} </span>
              </td>
              <td>
                <span>{st.lName} </span>
              </td>

              <td className="btn-td delete-td">
                <button
                  className="add-btn"
                  onClick={() => props.onAddStudentToSubject(st.id)}
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

export default AddStudentToSubjectList;
