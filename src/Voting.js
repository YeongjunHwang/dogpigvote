import React, { useState, useEffect } from "react";
import "./Voting.css";

const Voting = () => {
  const [longVotes, setLongVotes] = useState(0);
  const [shortVotes, setShortVotes] = useState(0);

  const handleLongClick = () => {
    setLongVotes(longVotes + 1);
  };

  const handleShortClick = () => {
    setShortVotes(shortVotes + 1);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setLongVotes(0);
      setShortVotes(0);
    }, 600000); // 한 시간이 3600초
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="voting-container">
      <div className="vote-option long">
        <h2 className="vote-header">Long</h2>
        <p className="vote-count">{longVotes}</p>
        <button onClick={handleLongClick} className="vote-button-long">
          Vote
        </button>
      </div>
      <div className="vote-option short">
        <h2 className="vote-header">Short</h2>
        <p className="vote-count">{shortVotes}</p>
        <button onClick={handleShortClick} className="vote-button-short">
          Vote
        </button>
      </div>
    </div>
  );
};

export default Voting;
