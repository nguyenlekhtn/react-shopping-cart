import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";
import { FaShoppingCart } from "react-icons/fa";

const NavBar = (props) => {
  return (
    <nav className={styles.nav}>
      <NavLink exact to="/" className={styles.navLink}>
        <h1 className={styles.logo}>HonkekShop</h1>
      </NavLink>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <NavLink
            to="/shop"
            className={styles.navLink}
            activeStyle={{ color: "#018961" }}
          >
            Shop
          </NavLink>
        </li>
        <li className={styles.navItem}>
          <NavLink
            to="/cart"
            className={styles.navLink}
            activeStyle={{ color: "#018961" }}
          >
            <FaShoppingCart />
            <span className="amount">({props.amount})</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
