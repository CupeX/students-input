import React, { useState } from 'react';
import {
  Button,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
} from 'reactstrap';

const BaseInput = props => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const showPasswordHandler = () => {
    setPasswordVisible(!passwordVisible);
  };
  return (
    <InputGroup className="py-1">
      <InputGroupAddon className="w-25" addonType="prepend">
        <InputGroupText>{props.label}</InputGroupText>
      </InputGroupAddon>
      <Input
        placeholder={props.placeholder}
        type={passwordVisible ? 'text' : props.type}
        id={props.fName}
        value={props.value}
        onChange={props.onChange}
      />
      {props.test && <Button onClick={showPasswordHandler}>&#x1F441;</Button>}
    </InputGroup>
  );
};

export default BaseInput;
