import { useDispatch} from 'react-redux';
import styles from './Card.module.scss';
import { toggleFavorite } from '../../redux/cardsRedux.js';

const Card = ({id, title, isFavorite}) => {

    const dispatch = useDispatch();


    const handleToggleFavorite = () => {
        dispatch(toggleFavorite(id));
    }
    return (
        <li className={styles.card}>{title}
            <button className={`fa ${isFavorite ? 'fa-star' : 'fa-star-o'} ${styles.favoriteButton}`}
            onClick={handleToggleFavorite}
            ></button>
        </li>
    );
};

export default Card;