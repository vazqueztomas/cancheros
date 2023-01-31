import React, {useState} from 'react'
import styled from 'styled-components'
import { useApplicationState } from '../config/state'
import Team from './Team'
import { teams } from './teams'

const SelectTeam = () => {
  const {user, setUser} = useApplicationState();
  const [teamSelected, setTeamSelected] = useState('');

  const handleSelected = (team) => {
    setUser(team);
    console.log(user);
  }
  return (
    <Container>
    <h2>Elegí tu equipo</h2>
    <TeamsContainer>
      {teams.map((el, index) => <Team key = {index} name = {el.strTeam} src = {el.strTeamBadge} setTeamSelected = {setTeamSelected}/>)}
    </TeamsContainer>
    {teamSelected !== '' ? <Cartel><p>Elegiste <b>{teamSelected}</b>.</p> <button onClick = {() => handleSelected({...user,team :teamSelected})}>Continuar</button></Cartel> : null}
  </Container>
  )
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 1em;
`
const TeamsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`

const Cartel = styled.div`
  display: flex;
  bottom: 0;
  justify-content: space-between;
`

export default SelectTeam