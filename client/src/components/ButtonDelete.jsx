import React from "react";
import styled from "styled-components";
const ButtonDelete = (props) => {
  return <Button onClick={props.onClick}>Eliminar partido</Button>;
};

const Button = styled.button`
  background: #850f0f;
  border: none;
  padding: 4px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
`;

export default ButtonDelete;
