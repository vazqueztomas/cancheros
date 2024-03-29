import React from "react";
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
  const dateParsed = date.toString().slice(0, 10).split("-");
  const day = dateParsed[2];
  const month = dateParsed[1];
  const year = dateParsed[0];
  const fullDate = `${day}-${month}-${year}`;
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

  return (
    <div class={`bg-slate-700 py-3 rounded-sm border border-gray-600`}>
      <div class="flex justify-center mb-2">
        <h6 class="text-xs">{fullDate}</h6>
      </div>
      <div class="flex flex-col gap-3 items-center text-center justify-between mx-3 ">
        <div class="flex flex-row justify-between items-center w-full">
          <div class="flex flex-row items-center gap-1">
            <img class="w-4" src={firstClubName[0].strTeamBadge} />
            <h6 class="text-xs">{clubOne}</h6>
          </div>
          <p class="text-md font-semibold">{result[0]}</p>
        </div>
        <div class="flex flex-row justify-between items-center w-full">
          <div class="flex flex-row items-center gap-1">
            <img class="w-4" src={secondClubName[0].strTeamBadge} />
            <h6 class="text-xs">{clubTwo}</h6>
          </div>
          <p class="text-md font-semibold">{result[1]}</p>
        </div>
      </div>
      <div class="flex justify-center mt-2">
        <ButtonDelete onClick={handleDeleteMatch} />
      </div>
    </div>
  );
};

export default MatchCard;
