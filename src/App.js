import './App.css';
import { useState, useEffect } from 'react';
import Keyboard from './components/keyboard/Keyboard';
import LetterGuessedContainer from './components/letter-guessed-container/LetterGuessedContainer';

function App() {
  const [wordToGuess, setWordToGuess] = useState([...'TIGER']);
  const [lettersToDisplay, setLettersToDisplay] = useState([]);
  
  return (
    <div className="App">
      <p className='counter'>7</p>
      <p className='guess-word'>animals</p>
      <LetterGuessedContainer wordToGuess={wordToGuess} lettersToDisplay={lettersToDisplay} />
      <Keyboard wordToGuess={wordToGuess} lettersToDisplay={lettersToDisplay} setLettersToDisplay={setLettersToDisplay} />
    </div>
  );
}

export default App;
