// import { BsBag } from "react-icons/bs";
import { Link } from "react-router-dom";
import './Header.css'; 

const Header = () => {

  return (
    // <header className="header">
    //   <div className="container">
    //     <Link to={"/Home"}>
    //       <div>
    //         <p className="logo">Ecommerse</p>
    //       </div>
    //     </Link>
    //     <div className="link">
    //       <Link to={"/blog"}>
    //         <div>
    //           <p>Blogs</p>
    //         </div>
    //       </Link>

    //       {/* <div onClick={() => setIsOpen(!isOpen)} className="bag">
    //         <BsBag className="bag-icon" />
    //         <div className="notification">{itemAmount}</div>
    //       </div> */}
    //     </div>
    //     <div className="link">
    //       <Link to={"/contact"}>
    //         <div>
    //           <p>Contact</p>
    //         </div>
    //       </Link>
    //     </div>
    //   </div>
    // </header>


    <header className="header">
      <div className="container">
        <Link to={"/Home"}>
          <div>
            <p className="logo">Ecommerce</p>
          </div>
        </Link>
        <div className="link">
          <Link to={"/blog"}>
            <div className="blog-link">
              <p>Blogs</p>
            </div>
          </Link>

          <Link to={"/blog"}>
            <div className="blog-link">
              <p>Login</p>
            </div>
          </Link>

          <Link to={"/contact"}>
            <div className="blog-link">
              <p>Contact</p>
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

