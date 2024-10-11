import { Link } from "react-router-dom";
import "./header.css";
import { useSelector } from "react-redux";
import logo1 from "../../assets/logo/logo1.png"
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
  const { userLoggedIn } = useSelector(state => state.auth)
  return (
    <header className="header">
      <div className="headerWrapper">
        <div className="logoContainer">
          <Link to="/">
            <img className="logo" src={logo1} alt="logo" />
          </Link>
        </div>
        <nav>
          <div className="nav-container">
            <Link to={"/products"}>
              Products
            </Link>
            <Link to={"/blogs"}>
              Blogs
            </Link>
            <Link to={"/contact"}>
              Contact Us
            </Link>
            {!userLoggedIn &&
              <Link to={"/login"}>
                Login
              </Link>
            }
            {!userLoggedIn &&
              <Link to={"/signup"}>
                Signup
              </Link>}
            {userLoggedIn &&
              <Link to={"/profile"}>
                Profile
              </Link>}
            <Link to={"/cart"}>
              <FaShoppingCart />
            </Link>
          </div>
        </nav>
      </div>
    </header >
  );
};

export default Header;
