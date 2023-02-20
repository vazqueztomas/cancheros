import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { getUser } from "../services/services";
import MatchCard from "./MatchCard";

const Matches = ({ email, teams }) => {
  const [matches, setMatches] = useState([]);
  const [userMainClub, setUserMainClub] = useState();
  const getMatch = async (data) => {
    try {
      const response = await getUser(data);
      setMatches(response.matches);
      setUserMainClub(response.club);
    } catch (error) {}
  };

  useEffect(() => {
    getMatch(email);
  }, []);

  return (
    <MatchContainer>
      {matches
        ? matches.map((el, ind) => (
            <MatchCard
              key={ind}
              clubOne={userMainClub}
              clubTwo={el.playVersus}
              date={el.matchDay}
              teams={teams}
              id={el._id}
            />
          ))
        : null}
    </MatchContainer>
  );
};

const MatchContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 24px;
  gap: 8px;
`;

export default Matches;
