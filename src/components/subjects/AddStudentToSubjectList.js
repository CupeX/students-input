import { useContext } from 'react';
import DataContext from '../../store/data-context.js';
import { Table } from 'reactstrap';
import db from '../firebase';

const AddStudentToSubjectList = props => {
  const { userStudents } = useContext(DataContext);
  const filteredList = userStudents.filter(
    x => !Object.keys(x.subjects).includes(props.subjectId)
  );

  const addStudentToSubjectHandler = studentId => {
    let postRef = db.collection('students');
    postRef
      .doc(studentId)
      .set({ subjects: { [props.subjectId]: '' } }, { merge: true });
  };

  return (
    <section>
      <Table>
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
                  onClick={() => addStudentToSubjectHandler(st.id)}
                >
                  add
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </section>
  );
};

export default AddStudentToSubjectList;
