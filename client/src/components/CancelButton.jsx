import React from "react";
import styled from "styled-components";

const CancelButton = (props) => {
  return (
    <Button type="button" onClick={() => props.onClick}>
      Cancelar
    </Button>
  );
};

const Button = styled.button`
  border: 1px solid #2f2f2f;
  background-color: transparent;
  color: white;
`;

export default CancelButton;
