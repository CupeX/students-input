import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Card from '../UI/Card';

const StudentDetails = () => {
  const [studentInfo, setStudentInfo] = useState('');
  const params = useParams();
  const id = params.id;

  useEffect(() => {
    fetch(
      `https://students-input-default-rtdb.europe-west1.firebasedatabase.app/student/${id}.json`
    )
      .then(response => {
        return response.json();
      })
      .then(data => {
        const student = { ...data };
        setStudentInfo(student);
      });
  }, [id]);

  return (
    <Card>
      <h2>
        {studentInfo.fName} {studentInfo.lName} info:
      </h2>

      <table id="details-table">
        <thead>
          <tr>
            <th>first name</th>
            <th>last name</th>
            <th>birth</th>
            <th>password</th>
            <th>unique id</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <span>{studentInfo.fName} </span>
            </td>
            <td>
              <span>{studentInfo.lName} </span>
            </td>
            <td>{studentInfo.year}</td>
            <td>{studentInfo.password}</td>
            <td>{id}</td>
          </tr>
        </tbody>
      </table>
    </Card>
  );
};

export default StudentDetails;
