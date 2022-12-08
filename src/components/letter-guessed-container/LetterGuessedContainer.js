import LetterGuessed from "../letter-guessed/LetterGuessed";

const LetterGuessedContainer = props => {
    const { wordToGuess, lettersToDisplay } = props;

    let styles = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    };

    return (
        <div style={styles}>
            {
                wordToGuess.map((letter, key) => <LetterGuessed key={key} letterHolded={letter} show={lettersToDisplay.includes(letter)} />)
            }
        </div>
    );
}

export default LetterGuessedContainer;
