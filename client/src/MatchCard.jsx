import React from 'react'
import styled from 'styled-components'

const MatchCard = ({clubOne, clubTwo, date}) => {
  const dateParsed = date.toString().slice(0,10);
  return (
    <Container>
      <Column>
      <h6>{clubOne}</h6>
      <p>vs</p>
      <h6>{clubTwo}</h6>
      </Column>
      <Column>
      <h6>El dia:</h6>
      <p>{dateParsed}</p>
      </Column>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px solid white;
  border-radius: 8px;
  padding: 16px;
  justify-content: space-around;
  align-items: center;
  gap: 16px;
  & h6, p{
    margin: 0
};
`

const Column = styled.div`
  display: flex;
  flex-direction: column;
`

export default MatchCard