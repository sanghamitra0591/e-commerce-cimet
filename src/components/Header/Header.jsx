// import { BsBag } from "react-icons/bs";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <Link to={"/"}>
          <div>
            <p className="logo">Ecommerce</p>
          </div>
        </Link>
        <div className="link">
          <Link to={"/login"}>
            <div className="blog-link">
              <p>Login</p>
            </div>
          </Link>

          <Link to={"/contact"}>
            <div className="blog-link">
              <p>Contact</p>
            </div>
          </Link>
          <Link to={"/cart"}>
            <div className="blog-link">
              <p>Cart</p>
            </div>
          </Link>

          {/* <div onClick={() => setIsOpen(!isOpen)} className="bag">
            <BsBag className="bag-icon" />
            <div className="notification">{itemAmount}</div>
          </div> */}
        </div>
      </div>
    </header>
  );
};

export default Header;
