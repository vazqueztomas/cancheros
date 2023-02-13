import React from 'react'
import styled from 'styled-components'

const MatchCard = ({clubOne, clubTwo, date, teams}) => {
  const dateParsed = date.toString().slice(0,10);
  const secondClubName = teams.filter(x => x.strTeam === clubTwo);
  const firstClubName = teams.filter(x => x.strTeam === clubOne);

  return (
    <Container>
      <Column>
      <h6>{dateParsed}</h6>
      </Column>
      <Column>
      <div style={{display: 'flex', width: '100%', justifyContent: 'space-around', flexDirection: 'row', alignItems: 'center'}}>

        <Column>
      {/* <h6>{clubOne}</h6> */}
      <ImgClub src = {firstClubName[0].strTeamBadge}></ImgClub>
        </Column>
      <p>vs</p>
      <Column>
       {/* <h6>{clubTwo}</h6> */}
      <ImgClub src = {secondClubName[0].strTeamBadge}></ImgClub>
      </Column>
      </div>
      </Column>
    </Container>
  )
}

const ImgClub = styled.img`
  width: 35px;
`
const Container = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid white;
  border-radius: 8px;
  padding: 12px;
  justify-content: space-around;
  gap: 8px;
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