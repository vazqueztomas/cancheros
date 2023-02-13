import React from 'react'
import styled from 'styled-components';

const Team = ({name, src, setTeamSelected}) => {
  const handleTeam = (name) => {
    setTeamSelected(name)
  }
  return (
    <Container onClick = {() => handleTeam(name)}>
      <p>{name}</p>
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
  width: 75px;
  height: 75px;
  margin: 8px;
  border-radius: 8px;
  text-align: center;
  gap: 6px;
  & > p{
    margin: 0 8px;
    text-align: center;
    font-size: 12px;
    line-height: 12px;
    font-weight: 500;
  }
`
const TeamBadge = styled.img`
  display: flex;
  max-width: 28px;
`

export default Team