import React from 'react'
import styled from 'styled-components';

const Team = ({name, src, setTeamSelected}) => {
  const handleTeam = (name) => {
    setTeamSelected(name)
  }
  return (
    <Container onClick = {() => handleTeam(name)}>
      <h6>{name}</h6>
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
  width: 100px;
  height: 100px;
  margin: 8px;
  border-radius: 8px;
  text-align: center;
  & > h6{
    margin: 0 8px;
  }
`
const TeamBadge = styled.img`
  display: flex;
  max-width: 36px;
`

export default Team