import React, { useState } from "react";

function App() {
  const [userChoice, setUserChoice] = useState();
  const [randomOption, setRandomOption] = useState();
  const choicesArray = ["Rock", "Paper", "Scissors"];

  const computerPick = () => {
    let random = choicesArray[Math.floor(Math.random()*choicesArray.length)];
    setRandomOption(random);
  }

  const userClick = (value) => {
    setUserChoice(value);
    computerPick();    
  }

  const reset = () => {
    setUserChoice(null);
    setRandomOption(null);
  }      
  

  return (
    <div>
      <p>Pick Rock, Paper or Scissors. This will generate a random pick for the computer. Press Reset to start again. Good luck.</p>
      <h1>Choose your weapon...</h1>
      <button onClick={() => userClick("Rock")}>Rock</button>
      <button onClick={() => userClick("Paper")}>Paper</button>
      <button onClick={() => userClick("Scissors")}>Scissors</button>
      <h3>You chose: {userChoice}</h3>
      <h3>Computer chose: {randomOption}</h3>
      <h4> Result: {
        userChoice === randomOption ? "Tie" :
        userChoice === "Rock" && randomOption === "Scissors" ? "Winner" :
        userChoice === "Paper" && randomOption === "Rock" ? "Winner" :
        userChoice === "Scissors" && randomOption === "Paper" ? "Winner" :
        "Loser"
        } </h4>        
      <button onClick={() => reset()}>Reset</button>
    </div>
  )

  }
  

export default App;