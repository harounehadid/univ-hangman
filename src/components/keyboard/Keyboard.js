import KeyboardKey from "../keyboard-key/KeyboardKey";

const Keyboard = props => {
    let { wordToGuess, 
          lettersToDisplay, 
          setLettersToDisplay, 
          resetGame } = props;

    let styles = {
        display: "flex",
        flexWrap: "wrap",
        gap: "2%",
        maxWidth: "1500px",
        justifyItems: "center",
        justifyContent: "center"
    };

    let letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 
                   'H', 'I', 'J', 'K', 'L', 'M', 'N', 
                   'O', 'P', 'Q', 'R', 'S', 'T', 'U', 
                   'V', 'W', 'X', 'Y', 'Z'];
    
    return (
        <div style={styles}>
            {
                letters.map((letter, key) => <KeyboardKey key={key} 
                                                          letter={letter} 
                                                          word={wordToGuess}
                                                          lettersToDisplay={lettersToDisplay}
                                                          setLettersToDisplay={setLettersToDisplay}
                                                          resetGame={resetGame}
                                                          />)
            }
        </div>
    );
}

export default Keyboard;
