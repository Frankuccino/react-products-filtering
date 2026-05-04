import "./Navigation.css";
import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";

const Nav = () => {
  return (
    <nav>
      <div className="nav-container">
        <input type="text" placeholder="Search..." className="search-input" />
      </div>

      <div className="profile-container">
        <a href="#" className="nav-icons">
          <FiHeart />
        </a>
        <a href="#" className="nav-icons">
          <AiOutlineShoppingCart />
        </a>
        <a href="#" className="nav-icons">
          <AiOutlineUserAdd />
        </a>
      </div>
    </nav>
  );
};

export default Nav;
