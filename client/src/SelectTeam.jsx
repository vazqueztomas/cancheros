import React, {useState} from 'react'
import styled from 'styled-components'
import { useApplicationState } from '../config/state'
import { getUser, handleNewClub } from '../services/services'
import Team from './Team'
import { teams } from './teams'

const SelectTeam = () => {
  const {user,setUser} = useApplicationState();
  const [teamSelected, setTeamSelected] = useState('');
  console.log(user.email)
  const handleSelected = async (team) => {
    const data = {
      email : user.email,
      clubName: team,
    }
    try {
      const response = await handleNewClub(data);
      console.log(response);
      const newUserData = await getUser(user.email);
      console.log(newUserData);
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <Container>
    <h2>Elegí tu equipo</h2>
    <TeamsContainer>
      {teams.map((el, index) => <Team key = {index} name = {el.strTeam} src = {el.strTeamBadge} setTeamSelected = {setTeamSelected}/>)}
    </TeamsContainer>
    {teamSelected !== '' ? <Cartel><p>Elegiste <b>{teamSelected}</b>.</p> <button onClick = {() => handleSelected(teamSelected)}>Continuar</button></Cartel> : null}
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