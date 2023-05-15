import React from "react";
const ButtonDelete = props => {
  return (
    <button
      onClick={props.onClick}
      class=" bg-red-700 text-white p-1 rounded-md text-xs px-3">
      Eliminar partido
    </button>
  );
};

export default ButtonDelete;
