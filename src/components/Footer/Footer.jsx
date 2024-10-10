import React from "react";
import "./footer.css";
import { FaTwitter } from "react-icons/fa6";
import { ImFacebook2 } from "react-icons/im";
import { MdEmail } from "react-icons/md";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footerWrapper">
      <div className="upperContainer">
        <div className="first-div">
          <div className="child-div">
            <p className="Link-Text">Links</p>
              <p className="first-div-Text">2024 Pictures</p>
          </div>
        </div>

        <div className="second-div">
          <div className="child-div">
            <p className="Link-Text">Stay tuned</p>
              <p className="first-div-Text">
                Connect with us and stay in the loop
              </p>
            <div className="icon-container">
              <FaTwitter className="icon" />
              <ImFacebook2 className="icon" />
            </div>
          </div>
        </div>

        <div className="third-div">
          <div className="child-div">
            <p className="Link-Text">Email Updates</p>
              <p className="first-div-Text">
                Be the first to hear about our offers and announcements
              </p>
            <div className="email-icon-icon-container">
              <MdEmail className="email-icon" />
              <p className="email-icon-text">email</p>
            </div>
          </div>
        </div>

        <div className="fourth-div">
          <div className="child-div">
            <p className="Link-Text">Contact us</p>
              <p className="first-div-Text">
                Questions? we have got answers. Try us.
              </p>
            <div className="email-text-container">
              <p className="email-us">email us</p>
            </div>
          </div>
        </div>
      </div>

      <div className="copyright-container">
        <p className="FooterTexts">
          Copyright &copy;
          <span className="reserved-text">All rights reserved</span>
        </p>
      </div>
      </div>
    </footer>
  );
};

export default Footer;
