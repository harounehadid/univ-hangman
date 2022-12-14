import './App.css';
import { useState } from 'react';
import Keyboard from './components/keyboard/Keyboard';
import LetterGuessedContainer from './components/letter-guessed-container/LetterGuessedContainer';
import Counter from './components/counter/Counter';
import { useSelector, useDispatch } from 'react-redux';
import { setResetGame } from './store/resetGameSlice';
import Theme from './components/theme/Theme';

function App() {
  const [wordToGuess, setWordToGuess] = useState([...'TIGER']);
  const [lettersToDisplay, setLettersToDisplay] = useState([]);
  const [lost, setLost] = useState(false);

  const sliceState = useSelector(state => state.resetGame);
  const dispatch = useDispatch();

  const reset = () => {
    setLettersToDisplay([]);
    dispatch(setResetGame());
  }
  
  return (
    <div className="App">
      <Counter setLost={setLost} />
      <Theme />
      <LetterGuessedContainer wordToGuess={wordToGuess} 
                              lettersToDisplay={lettersToDisplay}
                              />
      <Keyboard wordToGuess={wordToGuess} 
                lettersToDisplay={lettersToDisplay} 
                setLettersToDisplay={setLettersToDisplay}
                />
      {true && <button onClick={reset}>Reset</button>}
    </div>
  );
}

export default App;
