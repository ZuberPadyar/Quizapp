import React from "react";
import "../App.css";
import { useContext } from "react";
import { GameStateContext } from "../Context/Contexts";
import { Questions } from "../Context/Questions";

const EndScreen = () => {
  const { score, setScore, setGameState} = useContext(
    GameStateContext
  );

  const restartQuiz = () => {
    setScore(0);
    setGameState("menu");
  };
  return (
    <div className="EndScreen">
      <h1>Quiz Finished</h1>
      <h1>Your score is
        {score} out of {Questions.length}
      </h1>
      <button onClick={restartQuiz}>Restart Quiz</button>
    </div>
  );
};

export default EndScreen;
