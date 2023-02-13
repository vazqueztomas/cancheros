import React from 'react'
import styled from 'styled-components';
import { scrollToBottom } from './components/scrollToBottom';


const Team = ({name, src, setTeamSelected}) => {
  const handleTeam = (name) => {
    setSelected(true);
    setTeamSelected(name);
    scrollToBottom();
  }
  return (
    <Container onClick = {() => handleTeam(name)} >
      <p>{name}</p>
      <TeamBadge src = {src}/>
    </Container>
  )
}
const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border: 1px solid white;
  width: auto;
  min-width: 80%;
  height: 35px;
  margin: 2px;
  border-radius: 8px;
  text-align: center;
  gap: 6px;
  padding: 2px 6px;
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
  max-width: 24px;
`

export default Team