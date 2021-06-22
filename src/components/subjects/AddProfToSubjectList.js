import { useContext } from 'react';
import { Table } from 'reactstrap';
import DataContext from '../../store/data-context.js';
import db from '../firebase';

const AddProffesorToSubjectList = props => {
  const { userProfessors } = useContext(DataContext);
  const filteredList = userProfessors.filter(
    x => x.subject !== props.subjectId
  );

  const addProfessorToSubjectHandler = professorId => {
    let profRef = db.collection('professors');
    let subjRef = db.collection('subjects');
    profRef.doc(professorId).update({ subject: props.subjectId });
    subjRef.doc(props.subjectId).update({ professor: professorId });
  };

  return (
    <section>
      <h2>all professors list</h2>
      <Table>
        <thead>
          <tr>
            <th>first name</th>
            <th>last name</th>
            <th>add to subject</th>
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
                  onClick={() => addProfessorToSubjectHandler(st.id)}
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

export default AddProffesorToSubjectList;
