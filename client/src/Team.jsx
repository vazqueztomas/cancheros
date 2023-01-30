import React from 'react'

const Team = ({name, teamBadge}) => {
  return (
    <div>
      <h3>{name}</h3>
      <img src = {teamBadge}/>
    </div>
  )
}

export default Team