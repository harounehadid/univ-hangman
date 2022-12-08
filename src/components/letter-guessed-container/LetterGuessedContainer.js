import { useState, useEffect } from "react";
import LetterGuessed from "../letter-guessed/LetterGuessed";

const LetterGuessedContainer = props => {
    const { wordToGuess, lettersToDisplay } = props;

    let styles = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    };

    const [lettersToGuess, setLettersToGuess] = useState({});

    useEffect(() => {
      let initLetters = {};
      wordToGuess.map(letter => {
        initLetters = {...initLetters, [letter]: { guessed: false }};
      });

      setLettersToGuess(initLetters);
    }, []);

    if (lettersToGuess.guessed != null) console.log(lettersToGuess['T'].guessed);


    return (
        <div style={styles}>
            {
                wordToGuess.map((letter, key) => <LetterGuessed key={key} letterHolded={letter} show={lettersToDisplay.includes(letter)} />)
            }
        </div>
    );
}

export default LetterGuessedContainer;
