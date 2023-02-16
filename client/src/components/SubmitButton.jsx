import React from "react";

const SubmitButton = (props) => {
  return (
    <button onClick={() => props.onClick} type="submit">
      {props.content}
    </button>
  );
};

export default SubmitButton;
