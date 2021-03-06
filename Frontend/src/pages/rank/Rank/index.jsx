import React from "react";
import PropTypes from "prop-types";

import * as Ranks from "./style";

function Rank({ myRanking, imgURL, id, point, rank }) {
  return (
    <Ranks.Container myRanking={myRanking}>
      {myRanking && <Ranks.MyRankTitle>나의 순위</Ranks.MyRankTitle>}
      <Ranks.Wrapper myRank={myRanking}>
        <Ranks.Ranking>{rank}</Ranks.Ranking>
        <Ranks.ProfileImg imgURL={imgURL}>
          {rank === 1 && <Ranks.Gold />}
          {rank === 2 && <Ranks.Silver />}
          {rank === 3 && <Ranks.Bronze />}
        </Ranks.ProfileImg>
        <Ranks.Detail>
          <Ranks.Id>{id}</Ranks.Id>
          <Ranks.Point>{point} P</Ranks.Point>
        </Ranks.Detail>
      </Ranks.Wrapper>
    </Ranks.Container>
  );
}

Rank.propTypes = {
  myRanking: PropTypes.bool,
  imgURL: PropTypes.string,
  id: PropTypes.string,
  point: PropTypes.number,
  rank: PropTypes.number,
};

Rank.defaultProps = {
  myRanking: false,
  imgURL: "",
  id: "",
  point: 0,
  rank: 0,
};

export default Rank;
