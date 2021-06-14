import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Card from '../UI/Card';
import db from '../firebase';

const ProfessorDetails = () => {
  const [professor, setProfessor] = useState({});
  const [userSubjects, setUserSubjects] = useState([]);
  const [isLoadedProfessors, setIsLoadedProfessors] = useState(false);
  const [isLoadedSubjects, setIsLoadedSubjects] = useState(false);
  const [isLoaded, setIsLoaded] = useState(true);
  const [subjectTitle, setSubjectTitle] = useState('not assigned yet');

  const params = useParams();
  const professorId = params.id;

  useEffect(() => {
    if (isLoadedSubjects && isLoadedProfessors) {
      setIsLoaded(true);
      if (professor.subject !== '') {
        const subject = userSubjects.find(
          x => x.id === professor.subject
        ).subject;
        setSubjectTitle(subject);
      }
    }
  }, [isLoadedSubjects, isLoadedProfessors, isLoaded]);

  useEffect(() => {
    db.collection('professors')
      .doc(professorId)
      .get()
      .then(doc => {
        let data = doc.data();
        setProfessor(data);
        setIsLoadedProfessors(true);
      });
  }, [professorId]);

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

  if (!isLoaded) {
    return (
      <Card>
        <h2>Loading professor..</h2>
      </Card>
    );
  }

  return (
    <Card>
      <h2>{professor.fName} info:</h2>

      <table id="details-table">
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
            <td>{subjectTitle}</td>
            <td>{professorId}</td>
          </tr>
        </tbody>
      </table>
    </Card>
  );
};

export default ProfessorDetails;
