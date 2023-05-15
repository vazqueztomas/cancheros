import React from "react";

const Button = ({ label, onClick, func, others }) => {
  return (
    <button
      class={
        func === "primary"
          ? "bg-violet-700 rounded-md p-2 font-medium"
          : `bg-transparent rounded-md p-2 font-medium border border-violet-700 ${others}`
      }
      onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
