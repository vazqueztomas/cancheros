import React, { useState, useEffect } from "react";
import { getUser } from "../services/services";
import MatchCard from "./MatchCard";

const Matches = ({ email, teams }) => {
  const [matches, setMatches] = useState([]);
  const [userMainClub, setUserMainClub] = useState();
  const [userChangeMatches, setUserChangeMatches] = useState([]);

  const getMatch = async data => {
    try {
      const response = await getUser(data);
      setMatches(response.matches);
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
    <div class="max-h-[70%] flex flex-col justify-center p-6 gap-2 overflow-scroll">
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
