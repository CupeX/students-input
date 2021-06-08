import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Card from '../UI/Card';
import db from '../firebase';

const StudentDetails = props => {
  const [student, setStudent] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const params = useParams();
  const studentId = params.id;

  useEffect(() => {
    let postRef = db.collection('students').doc(studentId);

    postRef.get().then(doc => {
      let data = doc.data();
      setStudent(data);
      setIsLoading(false);
    });
  }, [studentId]);

  if (isLoading) {
    return (
      <Card>
        <h2>Loading student...</h2>
      </Card>
    );
  }

  return (
    <Card>
      <h2>
        {student.fName} {student.lName} info:
      </h2>

      <table id="details-table">
        <thead>
          <tr>
            <th>first name</th>
            <th>last name</th>
            {/* <th>subject/s</th>
            <th>professor/s</th> */}
            <th>birth</th>
            <th>password</th>
            <th>unique id</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <span>{student.fName} </span>
            </td>
            <td>
              <span>{student.lName} </span>
            </td>
            {/* <td>
              {subjects.map(x => (
                <li key={x.id}>{x.subject}</li>
              ))}
            </td>
            <td>
              {subjects.map(x => (
                <li key={x.id}>{x.professor}</li>
              ))}
            </td> */}
            <td>{student.year}</td>
            <td>{student.password}</td>
            <td>{studentId}</td>
          </tr>
        </tbody>
      </table>
    </Card>
  );
};

export default StudentDetails;
