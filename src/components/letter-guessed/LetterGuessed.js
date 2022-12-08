import styles from './letterGuessed.module.css';
import { Images } from "../resource-manager/ResourceManager";

const LetterGuessed = props => {
    let { letterHolded, show } = props;

    let display = show ? 'show' : 'hide';

    return (
        <div className={`${styles.main}`}>
            <p className={`${styles[display]}`}>{letterHolded}</p>
            <img src={Images.roundedDash} alt='' />
        </div>
    );
}

export default LetterGuessed;
