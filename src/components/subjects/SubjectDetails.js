import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Card from '../UI/Card';
import db from '../firebase';

const SubjectDetails = () => {
  const [subject, setSubject] = useState({});
  const [userStudents, setUserStudents] = useState([]);
  const [userProfessors, setUserProfessors] = useState([]);
  const [isLoadedStudents, setIsLoadedStudents] = useState(false);
  const [isLoadedSubjects, setIsLoadedSubjects] = useState(false);
  const [isLoadedProfessors, setIsLoadedProfessors] = useState(false);

  const [isLoaded, setIsLoaded] = useState(false);

  const params = useParams();
  const subjectId = params.id;

  useEffect(() => {
    if (isLoadedStudents && isLoadedSubjects) {
      setIsLoaded(true);
    }
  }, [isLoadedStudents, isLoadedSubjects, isLoadedProfessors, isLoaded]);

  useEffect(() => {
    db.collection('subjects')
      .doc(subjectId)
      .get()
      .then(doc => {
        let data = doc.data();
        setSubject(data);
      })
      .finally(() => {
        setIsLoadedSubjects(true);
      });
  }, [subjectId]);

  useEffect(() => {
    let studentRef = db.collection('students');
    studentRef
      .get()
      .then(students => {
        const studArray = [];
        students.forEach(student => {
          let data = student.data();
          let { id } = student;

          let payload = {
            id,
            ...data,
          };
          studArray.push(payload);
        });
        setUserStudents(studArray);
      })
      .finally(() => {
        setIsLoadedStudents(true);
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

  const prof = userProfessors.find(y => y.id === subject.professor);

  if (!isLoaded) {
    return (
      <Card>
        <h2>Loading subject..</h2>
      </Card>
    );
  }

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
              <span>{prof.fName}</span>
              <span>{prof.lName}</span>
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
          {userStudents.map(x => (
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

export default SubjectDetails;
