import "../App.css";
import { Questions } from "../Context/Questions";
import { useState } from "react";
import { useContext } from "react";
import { GameStateContext } from "../Context/Contexts";
import { AnimatePresence, motion } from "framer-motion";

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [optionChosen, setOptionChosen] = useState("");
  const [Active, setActive] = useState(null);
  const [change,setchange]= useState(false)

  const { score, setScore, gameState, setGameState } = useContext(
    GameStateContext
  );

  const chooseOption = (option) => {
    console.log(option);
    setOptionChosen(option);
  };

  const nextQuestion = () => {
    if (Questions[currentQuestion].asnwer == optionChosen) {
      setScore(score + 1);
    }
    setchange(true)

    setActive(null);
    setCurrentQuestion(currentQuestion + 1);
  };

  const finishQuiz = () => {
    if (Questions[currentQuestion].asnwer == optionChosen) {
      setScore(score + 1);
    }
    setGameState("finished");
  };

  return (
    <AnimatePresence initial="false">
   {gameState==="playing" &&  <motion.div
      className="Quiz list-group"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      exit={{opacity:0,x:100}}
    >
      <h1 
    
      >{Questions[currentQuestion].prompt}</h1>
      <div className="questions">
        <button
        
          className={Active === "optionA" ? "active" : ""}
          onClick={() => {
            chooseOption("optionA");
            setActive("optionA");
          }}
        >
          {Questions[currentQuestion].optionA}
        </button>
        <button
          className={Active === "optionB" ? "active" : ""}
          onClick={() => {
            chooseOption("optionB");
            setActive("optionB");
          }}
        >
          {Questions[currentQuestion].optionB}
        </button>
        <button
          className={Active === "optionC" ? "active" : ""}
          onClick={() => {
            chooseOption("optionC");
            setActive("optionC");
          }}
        >
          {Questions[currentQuestion].optionC}
        </button>
        <button
          className={Active === "optionD" ? "active" : ""}
          onClick={() => {
            chooseOption("optionD");
            setActive("optionD");
          }}
        >
          {Questions[currentQuestion].optionD}
        </button>
      </div>

      {currentQuestion == Questions.length - 1 ? (
        <button onClick={finishQuiz} id="nextQuestion">
          Finish Quiz
        </button>
      ) : (
        <button onClick={nextQuestion} id="nextQuestion">
          Next Question
        </button>
      )}
      <h1>{score}</h1>
    </motion.div>
}
    </AnimatePresence>
  );
}

export default Quiz;
