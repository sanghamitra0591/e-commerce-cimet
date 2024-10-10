import { Link } from "react-router-dom";
import "./header.css";
import { useSelector } from "react-redux";

const Header = () => {
  const { userLoggedIn } = useSelector(state => state.auth)
  return (
    <header className="header">
      <div className="headerWrapper">
      <div className="logoContainer">
        <Link to="/">
          <h1 className="logo">E-Commerce</h1>
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
              <Link to={"/cart"}>
                Cart
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
        </div>
      </nav>
      </div>
    </header >
  );
};

export default Header;
