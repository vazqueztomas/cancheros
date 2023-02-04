import React from 'react'
import styled from 'styled-components'

const MatchCard = ({clubOne, clubTwo, date}) => {
  const dateParsed = date.toString().slice(0,10)
  console.log(dateParsed)
  return (
    <Container>
      <div style = {{display: 'flex', flexDirection: 'column'}}>
      <h6>{clubOne}</h6>
      <p>vs</p>
      <h6>{clubTwo}</h6>
      </div>
      <div>
      <p>El dia:</p>
      <p>{dateParsed}</p>
      </div>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px solid white;
  padding: 16px;
  justify-content: space-around;
  align-items: center;
  gap: 16px;
  & h6, p{
    margin: 0
  }
`

export default MatchCard