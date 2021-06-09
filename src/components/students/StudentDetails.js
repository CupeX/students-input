import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Card from '../UI/Card';
import db from '../firebase';
import { nanoid } from 'nanoid';

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
      <table className="student-details-dable">
        <thead>
          <tr>
            <th>first name</th>
            <th>last name</th>
            <th>date of birth</th>
            <th>password</th>
            <th>unique id</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{student.fName}</td>
            <td>{student.lName}</td>
            <td>{student.year}</td>
            <td>{student.password}</td>
            <td>{studentId}</td>
          </tr>
        </tbody>
      </table>
      <table className="student-details-dable">
        <thead>
          <tr>
            <th>Subjects that {student.fName} attend:</th>
          </tr>
          <tr>
            <th>subject</th>
            <th>professor</th>
          </tr>
        </thead>
        <tbody>
          {Object.values(student.subjects).map(x => (
            <tr key={nanoid + x.subject + x.professor.fName}>
              <td className="w50-td">{x.subject}</td>
              <td className="w50-td">
                {x.professor.fName} {x.professor.lName}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  );
};

export default StudentDetails;
