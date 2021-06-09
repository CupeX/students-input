import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Card from '../UI/Card';
import db from '../firebase';

const SubjectDetails = () => {
  const [subject, setSubject] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const params = useParams();
  const subjectId = params.id;

  useEffect(() => {
    db.collection('subjects')
      .doc(subjectId)
      .get()
      .then(doc => {
        let data = doc.data();
        setSubject(data);
        setIsLoading(false);
      });
  }, [subjectId]);

  if (isLoading) {
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
              {subject.professor === undefined ? (
                'not assigned yet'
              ) : (
                <span>
                  {subject.professor.fName} {subject.professor.lName}
                </span>
              )}
            </td>
            <td>{subjectId}</td>
          </tr>
        </tbody>
      </table>
    </Card>
  );
};

export default SubjectDetails;
