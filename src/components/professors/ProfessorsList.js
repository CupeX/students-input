import { Link, useRouteMatch } from 'react-router-dom';
import { useEffect, useState } from 'react';
import db from '../firebase';

const ProfessorsList = props => {
  const match = useRouteMatch();

  const [userProfessors, setUserProfessors] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  let postRef = db.collection('professors');

  useEffect(() => {
    postRef.get().then(professors =>
      professors.forEach(professor => {
        let data = professor.data();
        let { id } = professor;

        let payload = {
          id,
          ...data,
        };

        // check if there is allready students in list
        if (!userProfessors.find(x => (x.id = id))) {
          setUserProfessors(professors => [...professors, payload]);
          setIsLoading(false);
        }
      })
    );
  }, []);

  const removeProfessorHandler = professorId => {
    postRef
      .doc(professorId)
      .delete()
      .then(() => {
        console.log('professor successfully deleted!');
      });
  };

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <section>
      {userProfessors.map(st => (
        <div className="item-wrapper" key={st.id} id={st.id}>
          <div className="info-wrapper">
            <span>professor: </span>
            <span>{st.fName} </span>
            <span>{st.lName} </span>
          </div>
          <div className="btn-wrapper">
            <Link to={`${match.url}/details/${st.id}`}>
              <button className="info-btn">&#8505;</button>
            </Link>
            <Link to={`${match.url}/edit/${st.id}`}>
              <button className="change-btn">edit</button>
            </Link>
            <button
              className="delete-btn"
              onClick={() => removeProfessorHandler(st.id)}
            >
              delete
            </button>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ProfessorsList;
