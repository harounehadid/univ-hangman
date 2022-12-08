import styles from './letterGuessed.module.css';
import { Images } from "../resource-manager/ResourceManager";

const LetterGuessed = props => {
    let { letterHolded } = props;

    return (
        <div className={styles['main']}>
            <p>{letterHolded}</p>
            <img src={Images.roundedDash} alt='' />
        </div>
    );
}

export default LetterGuessed;
