import React, { useState, useEffect } from "react";
import { getUser } from "../services/services";
import MatchCard from "./MatchCard";

const Matches = ({
  email,
  teams,
  setDrawMatches,
  setLostMatches,
  setWonMatches,
}) => {
  const [matches, setMatches] = useState([]);
  const [userMainClub, setUserMainClub] = useState();
  const [userChangeMatches, setUserChangeMatches] = useState([]);

  const getMatch = async data => {
    try {
      const response = await getUser(data);
      setMatches(response.matches);
      let wonCount = 0;
      let lostCount = 0;
      let drawCount = 0;

      response.matches.forEach(match => {
        const result = match.result;
        if (result[0] > result[1]) {
          wonCount++;
        } else if (result[0] < result[1]) {
          lostCount++;
        } else {
          drawCount++;
        }
      });

      setWonMatches(wonCount);
      setLostMatches(lostCount);
      setDrawMatches(drawCount);
      setUserMainClub(response.club);
    } catch (error) {}
  };

  useEffect(() => {
    getMatch(email);
  }, []);

  // if the user delete match, this useEffect will run
  useEffect(() => {
    getMatch(email);
  }, [userChangeMatches]);

  return (
    <div class="flex flex-col justify-center gap-2 overflow-auto">
      {matches.length > 0 ? (
        matches.map((el, ind) => (
          <MatchCard
            setUserChangeMatches={setUserChangeMatches}
            key={ind}
            clubOne={userMainClub}
            clubTwo={el.playVersus}
            date={el.matchDay}
            teams={teams}
            id={el._id}
            result={el.result}
          />
        ))
      ) : (
        <h3>No cargaste ningun partido</h3>
      )}
    </div>
  );
};

export default Matches;
