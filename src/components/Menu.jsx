import "../App.css";
import { useContext } from "react";
import { GameStateContext } from "../Context/Contexts";

function Menu() {
  const { gameState, setGameState,setchange } = useContext(
    GameStateContext
  );
  return (
    <div className="Menu">
      
      <button
        onClick={() => {
          setchange(true)
          setGameState("playing");
        }}
      >
        Start Quiz
      </button>
    </div>
  );
}

export default Menu;
