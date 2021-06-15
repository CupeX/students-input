import { useParams } from 'react-router';
import Card from '../UI/Card';

const SubjectDetailsTest = props => {
  const params = useParams();
  const subjectId = params.id;

  const subject = props.userSubjects.find(x => x.id === subjectId);
  const professor = props.userProfessors.find(x => x.id === subject.professor);
  const attendingStudents = props.userStudents.filter(x =>
    Object.keys(x.subjects).includes(subjectId)
  );

  return (
    <Card>
      <h2>{subject.subject} info:</h2>

      <table id="details-table">
        <thead>
          <tr>
            <th>title</th>
            <th>professor</th>
            <th>unique id</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <span>{subject.subject} </span>
            </td>
            <td>
              <span>
                {professor.fName} {professor.lName}
              </span>
            </td>
            <td>{subjectId}</td>
          </tr>
        </tbody>
      </table>

      <table>
        <thead>
          <tr>
            <th>Student that attend this subject:</th>
          </tr>
        </thead>
        <tbody>
          {attendingStudents.map(x => (
            <tr key={x.id}>
              <td>
                {x.fName} {x.lName}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  );
};

export default SubjectDetailsTest;
