import { useDispatch} from 'react-redux';
import styles from './Card.module.scss';
import { toggleFavorite, removeCard } from '../../redux/cardsRedux.js';

const Card = ({id, title, isFavorite}) => {

    const dispatch = useDispatch();


    const handleToggleFavorite = () => {
        dispatch(toggleFavorite(id));
    }

    const handleRemoveCard = () => {
        dispatch(removeCard(id))
    }
    return (
        <li className={styles.card}>
            <div className={styles.cardContent}>{title}</div>
            <div className={styles.cardActions}>
                <button type="button" className={`fa ${isFavorite ? 'fa-star' : 'fa-star-o'} ${styles.favoriteButton}`}
                onClick={handleToggleFavorite}
                ></button>
                <button type="button" className={`fa fa-trash ${styles.deleteButton}`} onClick={handleRemoveCard}></button>
            </div>
        </li>
    );
};

export default Card;