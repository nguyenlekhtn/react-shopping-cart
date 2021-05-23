import { NavLink } from "react-router-dom";
import "./styles.css";
import { FaShoppingCart } from "react-icons/fa";

const NavBar = () => {
  return (
    <nav className="nav-wrapper">
      <h1 className="logo">HonkekShop</h1>
      <ul>
        <li>
          <NavLink exact to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/shop">Shop</NavLink>
        </li>
        <li>
          <NavLink to="/cart">
            <FaShoppingCart />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
