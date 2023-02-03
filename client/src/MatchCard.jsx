import React from 'react'
import styled from 'styled-components'

const MatchCard = ({clubOne, clubTwo, date}) => {
  return (
    <Container>
      <h3>{clubOne}</h3>
      <p>vs</p>
      <h3>{clubTwo}</h3>
      <p>El dia: {date}</p>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px solid white;
`

export default MatchCard