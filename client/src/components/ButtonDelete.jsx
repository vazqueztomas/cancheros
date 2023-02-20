import React from "react";
import styled from "styled-components";
const ButtonDelete = (props) => {
  return <button onClick={props.onClick}>Borrar partido</button>;
};

const Button = styled.button`
  background: red;
  border: none;
  padding: 8px;
  color: white;
`;

export default ButtonDelete;
