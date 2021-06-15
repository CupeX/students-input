import { useParams } from 'react-router';
import { Table } from 'reactstrap';
import Card from '../UI/Card';

const ProfessorDetailsTest = props => {
  const params = useParams();
  const professorId = params.id;

  const professor = props.userProfessors.find(x => x.id === professorId);

  return (
    <Card>
      <h2>{professor.fName} info:</h2>

      <Table>
        <thead>
          <tr>
            <th>first name</th>
            <th>last name</th>
            <th>subject</th>
            <th>unique id</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <span>{professor.fName} </span>
            </td>
            <td>
              <span>{professor.lName} </span>
            </td>
            {professor.subject === '' ? (
              <td>not teaching yet</td>
            ) : (
              <td>
                {
                  props.userSubjects.find(x => x.id === professor.subject)
                    .subject
                }
              </td>
            )}
            <td>{professorId}</td>
          </tr>
        </tbody>
      </Table>
    </Card>
  );
};

export default ProfessorDetailsTest;
