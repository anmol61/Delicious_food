import React from "react";
import "./style.css";
import logo from "./img/footer/titile.png";
import app from "./img/pay/app.jpg";
import pay from "./img/pay/pay.png";
import play from "./img/pay/play.jpg";

const Footer = () => {
  return (
    <div>
      <footer className="section-p1">
        <div className="col">
          {/* <img className="logo" src={logo} alt="img" /> */}
          <h4>Contact</h4>
          <p>
            <strong>Address: </strong> Sasaram Bihar-821115
          </p>
          <p>
            <strong>Phone: </strong> +91 6205007710
          </p>
          <p>
            <strong>Open Hours: </strong> 10:00 - 18:00,Mon - Sat
          </p>
          <div className="follow">
            <h4>Follow us on</h4>
            <div className="icon">
              <i className="fa fa-facebook" />
              <i className="fa fa-twitter" />
              <i className="fa fa-instagram" />
              <i className="fa fa-pinterest-p" />
              <i className="fa fa-youtube" />
            </div>
          </div>
        </div>
        {/* Follow us on Section Ended Here. */}
        <div className="col">
          <h4>About</h4>
          <a href="#">About us</a>
          <a href="#">Delivery Informations</a>
          <a href="#">Privacy policy</a>
          <a href="#">Term &amp; Conditions</a>
          <a href="#">Contact us</a>
        </div>
        {/* About Section Ended Here. */}
        <div className="col">
          <h4>My Account</h4>
          <a href="#">Sign in</a>
          <a href="#">View cart</a>
          <a href="#">My wishlist</a>
          <a href="#">Track my order</a>
          <a href="#">Help</a>
        </div>
        {/* My account section ended here. */}
        <div className="col install">
          <h4>Install App</h4>
          <p>From App store or Google play store</p>
          <div className="row">
            <img src={app} alt="appStore" />
            <img src={play} alt="googleStore" />
          </div>
          <p>Secured Payment Getways</p>
          <img src={pay} alt="payImage" />
        </div>
        <div className="copyright">
          <p>© Developed by - Anmol.</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
