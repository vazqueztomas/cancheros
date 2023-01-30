import React, {useState} from 'react'
import styled from 'styled-components'
import Team from './Team'
import { teams } from './teams'

const SelectTeam = () => {

  return (
    <Container>
    <h2>Elegí tu equipo</h2>
    <TeamsContainer>
      {teams.map((el) => <Team name = {el.strTeam} src = {el.strTeamBadge}/>)}
    </TeamsContainer>
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
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export default SelectTeam