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
  const secondClubName = teams.filter(x => x.strTeam === clubTwo);
  const firstClubName = teams.filter(x => x.strTeam === clubOne);

  const handleDeleteMatch = async () => {
    let data = {
      email: localStorage.getItem("email"),
      id,
    };
    const response = await deleteMatch(data);
    setUserChangeMatches(response);
  };

  const win = result[0] > result[1];
  return (
    <div class={`bg-slate-700 p-2 rounded-sm border border-gray-600`}>
      <div class="flex justify-center mb-2">
        <h6 class="text-xs">{dateParsed}</h6>
      </div>
      <div class="flex gap-4 items-center text-center justify-between mx-3 ">
        <div class="flex flex-col justify-center items-center">
          <img class="w-7" src={firstClubName[0].strTeamBadge} />
          <h6 class="text-xs">{clubOne}</h6>
          <p class="text-md font-semibold">{result[0]}</p>
        </div>
        <p>:</p>
        <div class="flex flex-col justify-center items-center ">
          <img class="w-7" src={secondClubName[0].strTeamBadge} />
          <h6 class="text-xs">{clubTwo}</h6>
          <p class="text-md font-semibold">{result[1]}</p>
        </div>
      </div>
      <div class="flex justify-center">
        <ButtonDelete onClick={handleDeleteMatch} />
      </div>
    </div>
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
