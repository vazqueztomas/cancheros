import React from 'react'
import styled from 'styled-components';

const MainScreen = () => {
  return (
    <Container>
      <button>Añadir partido</button>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`

export default MainScreen