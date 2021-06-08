import React, { useState } from 'react';
import { useHistory } from 'react-router';

import Card from '../UI/Card';

const StudentForm = React.memo(props => {
  const [enteredFName, setEnteredFName] = useState('');
  const [enteredLName, setEnteredLName] = useState('');
  const [enteredYear, setEnteredYear] = useState('');
  const [enteredPass, setEnteredPass] = useState('');

  const history = useHistory();

  const [formValid, setFormValid] = useState(false);

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
      subjects: [],
    };

    props.onAddStudent(student);

    // clearing input fields
    setEnteredFName('');
    setEnteredLName('');
    setEnteredYear('');
    setEnteredPass('');
    history.replace('/students-input/all-students');
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
              placeholder={props.student ? `${props.student.fName}` : ''}
              type="text"
              id="fName"
              value={enteredFName}
              onChange={fNameChangeHandler}
            />
          </div>
          <div className="form-control">
            <label htmlFor="lName">Last Name:</label>
            <input
              placeholder={props.student ? `${props.student.lName}` : ''}
              type="text"
              id="lName"
              value={enteredLName}
              onChange={lNameChangeHandler}
            />
          </div>
          <div className="form-control">
            <label htmlFor="year">date of birth:</label>
            <input
              placeholder={props.student ? `${props.student.year}` : ''}
              type="date"
              min="1111-01-01"
              id="year"
              value={enteredYear}
              onChange={yearChangeHandler}
            />
          </div>
          <div className="form-control">
            <label htmlFor="pass">Password:</label>
            <input
              placeholder={props.student ? `${props.student.password}` : ''}
              type="number"
              id="pass"
              value={enteredPass}
              onChange={passChangeHandler}
            />
          </div>
          <div>
            <button type="submit" className="add-btn">
              {props.student ? 'save changes' : 'add student'}
            </button>
          </div>
        </form>
      </Card>
    </section>
  );
});

export default StudentForm;
