import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Card from '../UI/Card';
import db from '../firebase';

const StudentDetails = () => {
  const [student, setStudent] = useState({});
  const [userSubjects, setUserSubjects] = useState([]);
  const [userProfessors, setUserProfessors] = useState([]);
  const [isLoadedStudents, setIsLoadedStudents] = useState(false);
  const [isLoadedSubjects, setIsLoadedSubjects] = useState(false);
  const [isLoadedProfessors, setIsLoadedProfessors] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const params = useParams();
  const studentId = params.id;

  useEffect(() => {
    if (isLoadedStudents && isLoadedSubjects && isLoadedProfessors) {
      setIsLoaded(true);
    }
  }, [isLoadedStudents, isLoadedSubjects, isLoadedProfessors, isLoaded]);

  useEffect(() => {
    let postRef = db.collection('students').doc(studentId);

    postRef
      .get()
      .then(doc => {
        let data = doc.data();
        setStudent(data);
      })
      .finally(() => {
        setIsLoadedStudents(true);
      });
  }, [studentId]);

  useEffect(() => {
    let subjectRef = db.collection('subjects');
    subjectRef
      .get()
      .then(subjects => {
        const subjArray = [];
        subjects.forEach(subject => {
          let data = subject.data();
          let { id } = subject;

          let payload = {
            id,
            ...data,
          };
          subjArray.push(payload);
        });
        setUserSubjects(subjArray);
      })
      .finally(() => {
        setIsLoadedSubjects(true);
      });
  }, []);

  useEffect(() => {
    let profRef = db.collection('professors');
    profRef
      .get()
      .then(professors => {
        const profArray = [];
        professors.forEach(professor => {
          let data = professor.data();
          let { id } = professor;

          let payload = {
            id,
            ...data,
          };
          profArray.push(payload);
        });
        setUserProfessors(profArray);
      })
      .finally(() => {
        setIsLoadedProfessors(true);
      });
  }, []);

  if (!isLoaded) {
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
          {userSubjects.map(x => {
            const prof = userProfessors.find(y => y.id === x.professor);

            return (
              <tr key={x.id}>
                <td className="w50-td">{x.subject}</td>

                <td className="w50-td">
                  {prof.fName} {prof.lName}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Card>
  );
};

export default StudentDetails;
