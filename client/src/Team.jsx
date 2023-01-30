import React from 'react'
import styled from 'styled-components';

const Team = ({name, src}) => {
  return (
    <Container>
      <h3>{name}</h3>
      <TeamBadge src = {src}/>
    </Container>
  )
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const TeamBadge = styled.img`
  display: flex;
  max-width: 150px;
`

export default Team