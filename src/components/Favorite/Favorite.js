import styles from "./Favorite.module.scss"
import PageTitle from "../PageTitle/PageTitle";
import { getFavoriteCards } from "../../redux/cardsRedux";
import { useSelector } from "react-redux";

const Favorite = () => {

    const favoriteCards = useSelector(getFavoriteCards);

    return (
        <div className={styles.favoritePage}>
            <PageTitle>FAVORITE</PageTitle>
            {favoriteCards.length === 0 ? (
                <p>No cards...</p>
            ) : (
                <ul className={styles.cards}>
                    {favoriteCards.map(card => (<li key={card.id} className={styles.card}>
                     {card.title} 
                  </li>))}      
               </ul>     
            )}
        </div>
    )
};

export default Favorite;