import { useContext } from 'react';
import { useParams } from 'react-router';

import { Table } from 'reactstrap';
import Card from '../UI/Card';
import DataContext from '../../store/data-context.js';

const SubjectDetailsTest = props => {
  const { userStudents, userSubjects, userProfessors } =
    useContext(DataContext);
  const params = useParams();
  const subjectId = params.id;

  const subject = userSubjects.find(x => x.id === subjectId);
  const professor = userProfessors.find(x => x.id === subject.professor);
  const attendingStudents = userStudents.filter(x =>
    Object.keys(x.subjects).includes(subjectId)
  );

  return (
    <Card>
      <h2>{subject.subject} info:</h2>

      <Table id="details-table">
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
              {subject.professor === 'not assigned yet' ? (
                'not assigned yet'
              ) : (
                <span>
                  {professor.fName} {professor.lName}
                </span>
              )}
            </td>
            <td>{subjectId}</td>
          </tr>
        </tbody>
      </Table>

      <Table striped className="text-start mt-4">
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
      </Table>
    </Card>
  );
};

export default SubjectDetailsTest;
