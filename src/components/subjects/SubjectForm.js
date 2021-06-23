import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { Button } from 'reactstrap';
import BaseInput from '../comon/BaseInput';

import Card from '../UI/Card';

const SubjectForm = React.memo(props => {
  const [enteredSubject, setEnteredSubject] = useState('');
  const [formValid, setFormValid] = useState(false);

  const history = useHistory();

  const submitHandler = e => {
    e.preventDefault();

    if (enteredSubject === '') {
      alert('pls enter subject name');
      return;
    }
    setFormValid(true);

    const subjectData = {
      subject: enteredSubject,
      professor: 'not assigned yet',
    };

    props.onAddSubject(subjectData);

    setEnteredSubject('');

    history.replace('/all-subjects');
  };

  const subjectChangeHandler = e => {
    setEnteredSubject(e.target.value);
  };

  return (
    <Card>
      <h2>Subject input form</h2>
      <form onSubmit={submitHandler}>
        <BaseInput
          placeholder={props.subject ? `${props.subject.subject}` : ''}
          type="text"
          id="subject"
          value={enteredSubject}
          onChange={subjectChangeHandler}
          label={'Subject title:'}
        />
        <div>
          <Button type="submit" className="btn btn-success mt-4">
            {props.subject ? 'save changes' : 'add subject'}
          </Button>
        </div>
      </form>
    </Card>
  );
});

export default SubjectForm;
