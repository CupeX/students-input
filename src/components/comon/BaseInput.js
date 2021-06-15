import React from 'react';
import { Input, InputGroup, InputGroupAddon, InputGroupText } from 'reactstrap';

const BaseInput = props => {
  return (
    <InputGroup className="py-1">
      <InputGroupAddon addonType="prepend">
        <InputGroupText>{props.label}</InputGroupText>
      </InputGroupAddon>
      <Input
        placeholder={props.placeholder}
        type={props.type}
        id={props.fName}
        value={props.value}
        onChange={props.onChange}
      />
    </InputGroup>
  );
};

export default BaseInput;
