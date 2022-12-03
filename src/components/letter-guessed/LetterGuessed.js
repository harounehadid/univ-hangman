import './letterGuessed.css';
import { Images } from "../resource-manager/ResourceManager";

const LetterGuessed = props => {
    let { letterHolded } = props;

    return (
        <div className='ltrG'>
            <p>{letterHolded}</p>
            <img src={Images.roundedDash} alt='' />
        </div>
    );
}

export default LetterGuessed;
