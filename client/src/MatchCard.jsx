import React from "react";
import styled from "styled-components";
import { deleteMatch } from "../services/services";
import ButtonDelete from "./components/ButtonDelete";

const MatchCard = ({
  setUserChangeMatches,
  clubOne,
  clubTwo,
  date,
  teams,
  id,
  result,
}) => {
  const dateParsed = date.toString().slice(0, 10);
  const secondClubName = teams.filter((x) => x.strTeam === clubTwo);
  const firstClubName = teams.filter((x) => x.strTeam === clubOne);

  const handleDeleteMatch = async () => {
    let data = {
      email: localStorage.getItem("email"),
      id,
    };
    const response = await deleteMatch(data);
    setUserChangeMatches(response);
  };

  return (
    <Container>
      <Column>
        <h6>{dateParsed}</h6>
      </Column>
      <Column>
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "space-around",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Column>
            <ImgClub src={firstClubName[0].strTeamBadge}></ImgClub>
            <h6>{clubOne}</h6>
            <Result>{result[0]}</Result>
          </Column>
          <p>:</p>
          <Column>
            <ImgClub src={secondClubName[0].strTeamBadge}></ImgClub>
            <h6>{clubTwo}</h6>
            <Result>{result[1]}</Result>
          </Column>
        </div>
      </Column>
      <ButtonDelete onClick={handleDeleteMatch} />
    </Container>
  );
};

const ImgClub = styled.img`
  width: 28px;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid white;
  border-radius: 8px;
  padding: 6px;
  justify-content: space-around;
  gap: 4px;
  & h6,
  p {
    margin: 0;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 0 4px 0;
  align-items: center;
  :nth-child(1) {
    margin: 0 0 0 8px;
  }
  :nth-child(2) {
    text-align: center;
  }
`;

const Result = styled.p`
  font-size: 22px;
  font-weight: bold;
  margin: 0;
  padding: 0;
`;

export default MatchCard;
