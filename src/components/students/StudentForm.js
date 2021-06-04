import React, { useState } from 'react';

import Card from '../UI/Card';

const StudentForm = React.memo(props => {
  const [enteredFName, setEnteredFName] = useState('');
  const [enteredLName, setEnteredLName] = useState('');
  const [enteredYear, setEnteredYear] = useState('');
  const [enteredPass, setEnteredPass] = useState('');

  const [formValid, setFormValid] = useState(false);

  console.log('student form', props);

  const submitHandler = e => {
    e.preventDefault();

    // basic input validation
    if (
      enteredFName === '' ||
      enteredLName === '' ||
      enteredYear === '' ||
      enteredPass === ''
    ) {
      setFormValid(false);
      alert('pls fill all fields');
      return;
    }
    setFormValid(true);

    const student = {
      fName: enteredFName,
      lName: enteredLName,
      year: enteredYear,
      password: enteredPass,
    };

    props.onAddStudent(student);

    // clearing input fields
    setEnteredFName('');
    setEnteredLName('');
    setEnteredYear('');
    setEnteredPass('');
  };

  const fNameChangeHandler = e => {
    setEnteredFName(e.target.value);
  };
  const lNameChangeHandler = e => {
    setEnteredLName(e.target.value);
  };
  const yearChangeHandler = e => {
    setEnteredYear(e.target.value);
  };
  const passChangeHandler = e => {
    setEnteredPass(e.target.value);
  };

  return (
    <section>
      <Card>
        <h2>Students input form</h2>
        <form onSubmit={submitHandler}>
          <div className="form-control">
            <label htmlFor="fName">First Name:</label>
            <input
              type="text"
              id="fName"
              value={enteredFName}
              onChange={fNameChangeHandler}
            />
          </div>
          <div className="form-control">
            <label htmlFor="lName">Last Name:</label>
            <input
              type="text"
              id="lName"
              value={enteredLName}
              onChange={lNameChangeHandler}
            />
          </div>
          <div className="form-control">
            <label htmlFor="year">date of birth:</label>
            <input
              type="date"
              min="1980-01-01"
              id="year"
              value={enteredYear}
              onChange={yearChangeHandler}
            />
          </div>
          <div className="form-control">
            <label htmlFor="pass">Password:</label>
            <input
              type="number"
              id="pass"
              value={enteredPass}
              onChange={passChangeHandler}
            />
          </div>
          <div>
            <button type="submit" className="add-btn">
              Add student
            </button>
          </div>
        </form>
      </Card>
    </section>
  );
});

export default StudentForm;
