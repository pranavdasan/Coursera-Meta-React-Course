import React from 'react';

function App() {
  function handleClick() { 
    let randomNum = Math.floor(Math.random() * 3) + 1;
    console.log(randomNum);
    let userInput = prompt('type a number');

    // Check if userInput is null (cancel button) or empty string
    if (userInput === null || userInput === "") {
      alert('You cancelled or did not enter a number.');
      return;
    }

    if (userInput == randomNum) {
      alert(`Nice, you guessed it right! The number was ${randomNum}!`);
    } else {
      alert(`Nope, you guessed wrong!\n\nComputer's number: ${randomNum}\nYour guess: ${userInput}`);
    }
  };

  return (
    <div>
      <h1>Task: Add a button and handle a click event</h1>
      <button onClick={handleClick}>Guess the number between 1 and 3</button>
    </div>
  );
}

export default App;
