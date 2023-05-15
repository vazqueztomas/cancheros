import React from "react";

const Button = ({ label, onClick, type }) => {
  return (
    <button
      class={
        type === "primary"
          ? "bg-violet-700 rounded-md p-2 font-medium"
          : "bg-transparent rounded-md p-2 font-medium border border-violet-700"
      }
      onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
