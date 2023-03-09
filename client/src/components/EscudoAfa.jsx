import React from "react";
import styled from "styled-components";

const Imagen = styled.img`
  width: 150px;
`;

const EscudoAfa = () => {
  return (
    <Imagen
      style
      src="https://back.afa.org.ar/upload/torneo/Placas%20categor%C3%ADas/afa3estrellas.png"
      alt="Escudo de la seleccion argentina"
    />
  );
};

export default EscudoAfa;
