import { useParams } from 'react-router';
import { Table } from 'reactstrap';
import Card from '../UI/Card';

const StudentDetailsTest = props => {
  const params = useParams();
  const studentId = params.id;

  const student = props.userStudents.find(x => x.id === studentId);

  return (
    <Card>
      <h2>
        {student.fName} {student.lName} info:
      </h2>
      <Table className="mt-3 mb-5">
        <thead>
          <tr>
            <th>first name</th>
            <th>last name</th>
            <th>date of birth</th>
            <th>password</th>
            {/* <th>unique id</th> */}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{student.fName}</td>
            <td>{student.lName}</td>
            <td>{student.year}</td>
            <td>{student.password}</td>
            {/* <td>{studentId}</td> */}
          </tr>
        </tbody>
      </Table>
      <h4>Subjects that {student.fName} attend:</h4>
      <Table striped>
        <thead>
          <tr>
            <th>subject</th>
            <th>professor</th>
          </tr>
        </thead>

        <tbody>
          {props.userSubjects.map(x => {
            const prof = props.userProfessors.find(y => y.id === x.professor);

            if (Object.keys(student.subjects).includes(x.id)) {
              return (
                <tr key={x.id}>
                  <td className="w50-td">{x.subject}</td>

                  <td className="w50-td">
                    {prof.fName} {prof.lName}
                  </td>
                </tr>
              );
            }
          })}
        </tbody>
      </Table>
    </Card>
  );
};

export default StudentDetailsTest;
