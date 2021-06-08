import React, { useState } from 'react';
import { useHistory } from 'react-router';

import Card from '../UI/Card';

const SubjectForm = React.memo(props => {
  const [enteredSubject, setEnteredSubject] = useState('');
  const [formValid, setFormValid] = useState(false);

  const history = useHistory();

  const submitHandler = e => {
    e.preventDefault();

    if (enteredSubject === '') {
      setFormValid(false);
      alert('pls enter subject name');
      return;
    }
    setFormValid(true);

    const subjectData = {
      subject: enteredSubject,
    };

    props.onAddSubject(subjectData);

    setEnteredSubject('');

    history.replace('/students-input/all-subjects');
  };

  const subjectChangeHandler = e => {
    setEnteredSubject(e.target.value);
  };

  return (
    <Card>
      <h2>Subject input form</h2>
      <form onSubmit={submitHandler}>
        <div className="form-control">
          <label htmlFor="subject">subject name</label>
          <input
            placeholder={props.subject ? `${props.subject.subject}` : ''}
            type="text"
            id="subject"
            value={enteredSubject}
            onChange={subjectChangeHandler}
          />
        </div>
        <div>
          <button type="submit" className="add-btn">
            {props.subject ? 'save changes' : 'add subject'}
          </button>
        </div>
      </form>
    </Card>
  );
});

export default SubjectForm;
