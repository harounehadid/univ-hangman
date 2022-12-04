import './App.css';
import LetterGuessed from './components/letter-guessed/LetterGuessed';
import LetterButton from './components/letter-button/LetterButton';

function App() {
  let letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 
                 'H', 'I', 'J', 'K', 'L', 'M', 'N', 
                 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 
                 'V', 'W', 'X', 'Y', 'Z'];

  let wordToGuess = [...'TIGER'];
  
  return (
    <div className="App">
      <p className='counter'>7</p>
      <p className='guess-word'>animals</p>
      <div className='correct-word'>
        {
          wordToGuess.map((letter, key) => <LetterGuessed key={key} letterHolded={letter} />)
        }
      </div>
      <div className='letter-container'>
        {
          letters.map((letter, key) => <LetterButton key={key} letter={letter} word={wordToGuess} />)
        }
      </div>
    </div>
  );
}

export default App;
