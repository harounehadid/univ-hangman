import LetterButton from "../letter-button/LetterButton";

const Keyboard = props => {
    let { wordToGuess } = props;

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
                letters.map((letter, key) => <LetterButton key={key} letter={letter} word={wordToGuess} />)
            }
        </div>
    );
}

export default Keyboard;
