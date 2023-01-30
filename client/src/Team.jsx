import React, { useState } from 'react'
import styled from 'styled-components';

const Team = ({name, src}) => {
  const [teamSelected, setTeamSelected] = useState('');
  const handleTeam = () => {
    console.log(name)
    setTeamSelected(name);
    console.log(teamSelected)
  }
  return (
    <Container onClick = {handleTeam}>
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