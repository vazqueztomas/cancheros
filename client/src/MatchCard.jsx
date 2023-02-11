import React from 'react'
import styled from 'styled-components'

const MatchCard = ({clubOne, clubTwo, date}) => {
  const dateParsed = date.toString().slice(0,10);
  return (
    <Container>
<Column>
      <h6>{dateParsed}</h6>
      </Column>
      <Column>
      <div style={{display: 'flex', width: '100%', justifyContent: 'space-around', flexDirection: 'row'}}>
      <h6>{clubOne}</h6>
       <h6>{clubTwo}</h6>
      </div>
      </Column>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid white;
  border-radius: 8px;
  padding: 16px;
  justify-content: space-around;
  gap: 16px;
  & h6, p{
    margin: 0
};
`

const Column = styled.div`
  display: flex;
  flex-direction: column;

  :nth-child(2){
    text-align: center;
  }
`

export default MatchCard