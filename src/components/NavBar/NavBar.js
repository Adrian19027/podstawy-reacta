import Container from "../Container/Container";
import styles from "./NavBar.module.scss"
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className={styles.nav}>
            <Container >
                <div className={styles.wrapper}>
                <a href="/" className={styles.icon}><i className="fa fa-tasks"></i></a>
                <ul>
                    <li><NavLink className={({isActive}) => isActive ? styles.linkActive : undefined} to="/">Home</NavLink></li>
                    <li><NavLink className={({isActive}) => isActive ? styles.linkActive : undefined} to="/favorite">Favorite</NavLink></li>
                    <li><NavLink className={({isActive}) => isActive ? styles.linkActive : undefined} to="/about">About</NavLink></li>
                </ul>
                </div>
            </Container>
       </nav>
    )
};

export default NavBar;