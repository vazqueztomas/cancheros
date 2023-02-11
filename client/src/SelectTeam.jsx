import React, {useState} from 'react'
import styled from 'styled-components'
import { getUser, handleNewClub } from '../services/services'
import Team from './Team'
import { teams } from './teams'
import { useNavigate } from 'react-router-dom';
import { myContext } from '../context/AuthProvider'

const SelectTeam = () => {
  const {auth} = myContext();
  const [teamSelected, setTeamSelected] = useState('');
  const navigate  = useNavigate();
  const email = auth.userLog.userInfo.email;
  console.log(email);
  const handleSelected = async (team) => {
    const data = {
      email,
      clubName: team,
    }
    try {
      const response = await handleNewClub(data);
      const newUserData = await getUser(email);
      navigate('/mainscreen');
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
  background-color: #01010190;
  text-align: center;
  height: 100vh;
  justify-content: center;
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
  padding: 0 10%;
`

export default SelectTeam