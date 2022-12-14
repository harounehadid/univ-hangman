import styles from './keyboardKey.module.css';
import { useState, useEffect } from 'react';
import { Images } from "../resource-manager/ResourceManager";
import { useSelector, useDispatch } from 'react-redux';
import { decrementCounter } from '../counter/counterSlice';

const KeyboardKey = props => {
    let { letter, 
          word, 
          lettersToDisplay, 
          setLettersToDisplay } = props;

    const manageGame = useSelector(state => state.manageGame);
    const dispatch = useDispatch();

    let allowValueEdit = !manageGame.lost;

    useEffect(() => {
        allowValueEdit = !manageGame.lost;

        if (manageGame.reset) {
            resetIndicators();
        }
    }, [manageGame.reset, manageGame.lost]);

    let [correctIndicator, setCorrectIndicator] = useState(false);
    let [wrongIndicator, setWrongIndicator] = useState(false);

    const handleClick = () => {
        if (word.includes(letter)) {
            if (!correctIndicator && allowValueEdit) {
                if (lettersToDisplay.includes(letter) === false) setLettersToDisplay([...lettersToDisplay, letter]);
                setCorrectIndicator(true);
            }
        }
        else {
            if (!wrongIndicator) {
                if (allowValueEdit) dispatch(decrementCounter());
                setWrongIndicator(true);
            }
        }
    }

    const resetIndicators = () => {
        setCorrectIndicator(false);
        setWrongIndicator(false);
    }

    return (
        <a onClick={handleClick} className={`${styles.main}`}>
            <p>{letter}</p>
            {correctIndicator && <img className={`${styles.correct}`} src={Images.correctChoice} alt='' />}
            {wrongIndicator && <img className={`${styles.wrong}`} src={Images.wrongChoice} alt='' />}
        </a>
    );
}

export default KeyboardKey;
