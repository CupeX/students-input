import React, { useState } from 'react';

import Card from '../UI/Card';

const ProfessorForm = React.memo(props => {
  console.log('prof form props', props);
  const [profName, setProfName] = useState('');
  const [profLName, setProfLName] = useState('');
  const [formValid, setFormValid] = useState(false);

  const submitHandler = e => {
    console.log(e);
    e.preventDefault();

    // basic input validation
    if (profName === '' || profLName === '') {
      setFormValid(false);
      alert('pls fill all fields');
      return;
    }
    setFormValid(true);

    const professorData = {
      fName: profName,
      lName: profLName,
    };

    props.onAddProfessor(professorData);

    // clearing input fields
    setProfName('');
    setProfLName('');
  };

  const fNameChangeHandler = e => {
    setProfName(e.target.value);
  };
  const lNameChangeHandler = e => {
    setProfLName(e.target.value);
  };

  return (
    <Card>
      <h2>Professor input form</h2>
      <form onSubmit={submitHandler}>
        <div className="form-control">
          <label htmlFor="fName">first name</label>
          <input
            type="text"
            id="fName"
            value={profName}
            onChange={fNameChangeHandler}
          />
        </div>
        <div className="form-control">
          <label htmlFor="lName">last name</label>
          <input
            type="text"
            id="lName"
            value={profLName}
            onChange={lNameChangeHandler}
          />
        </div>
        <div>
          <button type="submit" className="add-btn">
            Add student
          </button>
        </div>
      </form>
    </Card>
  );
});

export default ProfessorForm;
