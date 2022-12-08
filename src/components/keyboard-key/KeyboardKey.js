import styles from './keyboardKey.module.css';
import { useState } from 'react';
import { Images } from "../resource-manager/ResourceManager";
import { useDispatch } from 'react-redux';
import { decrementCounter, reset } from '../counter/counterSlice';

const KeyboardKey = props => {
    let { letter, 
          word, 
          lettersToDisplay, 
          setLettersToDisplay } = props;

    // const counter = useSelector(state => state.counter);
    const dispatch = useDispatch();

    let [correctIndicator, setCorrectIndicator] = useState(false);
    let [wrongIndicator, setWrongIndicator] = useState(false);

    const handleClick = () => {
        if (word.includes(letter)) {
            if (!correctIndicator) {
                if (lettersToDisplay.includes(letter) === false) setLettersToDisplay([...lettersToDisplay, letter]);
                setCorrectIndicator(true);
            }
        }
        else {
            if (!wrongIndicator) {
                dispatch(decrementCounter());
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
