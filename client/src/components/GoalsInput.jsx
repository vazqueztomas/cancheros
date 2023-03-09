import React from "react";
import styled from "styled-components";
import { Field } from "formik";

const Input = styled(Field)`
  width: 32px;
  height: 32px;
  border-radius: 4px;
  border: 1px solid whitesmoke;
`;

const GoalsInput = ({ name }) => {
  return <Input type="number" name={name} />;
};

export default GoalsInput;
