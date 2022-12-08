import './App.css';
import { useState } from 'react';
import LetterGuessed from './components/letter-guessed/LetterGuessed';
import Keyboard from './components/keyboard/Keyboard';

function App() {
  let [ltrToGuessState, setLtrToGuessState] = useState({});
  let wordToGuess = [...'TIGER'];

  // const handleLetterGuessing = () => {
  //   let 
  // }

  // setLtrToGuessState(
  //   let newObj = {};
  //   wordToGuess.map(letter => initObj[letter].guessed = false);
  
  // );


  
  return (
    <div className="App">
      <p className='counter'>7</p>
      <p className='guess-word'>animals</p>
      <div className='correct-word'>
        {
          wordToGuess.map((letter, key) => <LetterGuessed key={key} letterHolded={letter} />)
        }
      </div>
      <Keyboard wordToGuess={wordToGuess} />
    </div>
  );
}

export default App;
