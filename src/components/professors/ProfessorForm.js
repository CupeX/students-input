import React, { useState } from 'react';
import { useHistory } from 'react-router';
import BaseInput from '../comon/BaseInput';

import Card from '../UI/Card';

const ProfessorForm = React.memo(props => {
  const [profName, setProfName] = useState('');
  const [profLName, setProfLName] = useState('');
  const [formValid, setFormValid] = useState(false);

  const history = useHistory();

  const submitHandler = e => {
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
      subject: '',
    };

    props.onAddProfessor(professorData);

    // clearing input fields
    setProfName('');
    setProfLName('');

    history.replace('/students-input/all-professors');
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
        <BaseInput
          placeholder={props.professor ? `${props.professor.fName}` : ''}
          type="text"
          id="fName"
          value={profName}
          onChange={fNameChangeHandler}
          label={'First name:'}
        />
        <BaseInput
          placeholder={props.professor ? `${props.professor.lName}` : ''}
          type="text"
          id="lName"
          value={profLName}
          onChange={lNameChangeHandler}
          label={'Last name:'}
        />

        <div>
          <button type="submit" className="add-btn">
            Add professor
          </button>
        </div>
      </form>
    </Card>
  );
});

export default ProfessorForm;
