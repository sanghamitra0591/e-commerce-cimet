import { Link } from "react-router-dom";
import "./header.css";
import { useSelector } from "react-redux";

const Header = () => {
  const { userLoggedIn } = useSelector(state => state.auth)
  return (
    <header className="header">
      <div className="logoContainer">
        <Link to="/">
          <h1 className="logo">E-Commerce</h1>
        </Link>
      </div>
      <nav>
        <div className="nav-container">
          <ul>
            <li>
              <Link to={"/products"}>
                Products
              </Link>
            </li>
            <li>
              <Link to={"/blogs"}>
                Blogs
              </Link>
            </li>
            <li>
              <Link to={"/cart"}>
                Cart
              </Link>
            </li>
            <li>
              <Link to={"/contact"}>
                Contact Us
              </Link>
            </li>
            {!userLoggedIn && <li>
              <Link to={"/login"}>
                Login
              </Link>
            </li>
            }
            {!userLoggedIn && <li>
              <Link to={"/signup"}>
                Signup
              </Link>
            </li>}
            {userLoggedIn && <li>
              <Link to={"/profile"}>
                Profile
              </Link>
            </li>}
          </ul>
        </div>
      </nav>
    </header >
  );
};

export default Header;
