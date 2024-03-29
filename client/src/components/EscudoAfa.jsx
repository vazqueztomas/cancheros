import React from "react";

const EscudoAfa = ({ width }) => {
  return (
    <img
      class={`${width ? `w-${width}` : "w-24"}`}
      src="https://back.afa.org.ar/upload/torneo/Placas%20categor%C3%ADas/afa3estrellas.png"
      alt="Escudo de la seleccion argentina"
    />
  );
};

export default EscudoAfa;
