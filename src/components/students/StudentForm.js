import React, { useState } from 'react';
import { useHistory } from 'react-router';
import BaseInput from '../comon/BaseInput';
import { Button } from 'reactstrap';

import Card from '../UI/Card';

const StudentForm = React.memo(props => {
  const [enteredFName, setEnteredFName] = useState('');
  const [enteredLName, setEnteredLName] = useState('');
  const [enteredYear, setEnteredYear] = useState('');
  const [enteredPass, setEnteredPass] = useState('');
  const [formValid, setFormValid] = useState(false);
  const [student, setStudent] = useState({});

  const history = useHistory();

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
      subjects: {},
    };
    setStudent(student);
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
          <BaseInput
            type="text"
            id="fName"
            onChange={fNameChangeHandler}
            placeholder={props.student ? `${props.student.fName}` : ''}
            value={enteredFName}
            label={'First name:'}
          />

          <BaseInput
            type="text"
            id="lName"
            onChange={lNameChangeHandler}
            placeholder={props.student ? `${props.student.lName}` : ''}
            value={enteredLName}
            label={'Last name:'}
          />

          <BaseInput
            type="date"
            min="1111-01-01"
            id="year"
            onChange={yearChangeHandler}
            placeholder={props.student ? `${props.student.year}` : ''}
            value={enteredYear}
            label={'Date of Birth:'}
          />

          <BaseInput
            placeholder={props.student ? `${props.student.password}` : ''}
            type="number"
            id="pass"
            value={enteredPass}
            onChange={passChangeHandler}
            label={'Password:'}
          />

          <div>
            <Button type="submit" className="btn btn-success mt-4">
              {props.student ? 'save changes' : 'add student'}
            </Button>
          </div>
        </form>
      </Card>
    </section>
  );
});

export default StudentForm;
