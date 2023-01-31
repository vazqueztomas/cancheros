import React, { useState } from 'react'
import styled from 'styled-components';

const Team = ({name, src}) => {
  const [teamSelected, setTeamSelected] = useState('');
  const handleTeam = (name) => {
    setTeamSelected(name)
  }
  return (
    <Container onClick = {() => handleTeam(name)}>
      <h5>{name}</h5>
      <TeamBadge src = {src}/>
    </Container>
  )
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid lightgray;
  width: 150px;
  height: 150px;
  margin: 8px;
  border-radius: 8px;

  & > h5{
    margin: 0 8px;
  }
`
const TeamBadge = styled.img`
  display: flex;
  max-width: 60px;
`

export default Team