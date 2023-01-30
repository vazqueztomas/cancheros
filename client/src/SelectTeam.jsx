import React, {useState} from 'react'
import Team from './Team'
import { teams } from './teams'

const SelectTeam = () => {

  return (
    <>
    <h2>Elegí tu equipo</h2>
    <div>{teams.map((el) => <Team name = {el.strTeam} src = {el.strTeamBadge}/>)
  }
</div>
  </>
  )
}

export default SelectTeam