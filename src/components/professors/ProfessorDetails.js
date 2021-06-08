import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Card from '../UI/Card';
import db from '../firebase';

const ProfessorDetails = () => {
  const [professor, setProfessor] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const params = useParams();
  const professorId = params.id;

  useEffect(() => {
    db.collection('professors')
      .doc(professorId)
      .get()
      .then(doc => {
        let data = doc.data();
        setProfessor(data);
        setIsLoading(false);
      });
  }, [professorId]);

  if (isLoading) {
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
            <td>{professorId}</td>
          </tr>
        </tbody>
      </table>
    </Card>
  );
};

export default ProfessorDetails;
