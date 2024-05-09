import React, { useState, useEffect } from "react";
import "./header.scss";
import { Link } from "react-router-dom";
import logo from "../../../assets/images/logo.png";
import scooty from "../../../assets/images/scooty.png";
import cart from "../../../assets/images/cart.png";

const Header = () => {
  const navbardata = [
    {
      id: 1,
      title: "Home",
      link: "/",
    },
    {
      id: 2,
      title: "About",
      link: "/about",
    },
    {
      id: 3,
      title: "Menu",
      link: "/menu",
    },
    {
      id: 4,
      title: "feed",
      link: "/feed",
    },
    {
      id: 5,
      title: "contact us",
      link: "/contact",
    },
  ];

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    document.body.classList.toggle("ovr-hiddn");
    document.body.classList.toggle("overflw");
  };
  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  useEffect(() => {
    return () => {
      document.body.classList.remove("ovr-hiddn");
      document.body.classList.remove("overflw");
    };
  }, []);

  return (
    <div className="headers-wrapper">
      <div className="upper-header-wrapper">
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-lg-9 col-sm-6 col-md-6 ">
              <div className="email-wrap">
                <p>
                  <i className="fa fa-phone"></i>
                  <span> (810) 531-5685</span>
                </p>
                <p>
                  <i className="fa fa-clock-o"></i>
                  <span> Mon - Sat: 7:00 - 17:00</span>
                </p>
                <p>
                  <i className="fa fa-envelope"></i>
                  <span> pepperonijoe@me.com</span>
                </p>
                
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-md-6">
              <div className="social-acc">
                <div className="social-icons">
                  <ul>
                    <li>
                      <Link to="#">
                        <i className="fa fa-facebook"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="fa fa-twitter"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="fa fa-instagram"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="fa fa-pinterest"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="header-wrapper">
        <div className="container">
          <div
            className={`menu-Bar ${menuOpen ? "open" : ""}`}
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="row d-flex align-items-center">
            <div className="col-lg-2">
              <div className="logo">
                <Link to="/">
                  <img src={logo} alt="logo" />
                </Link>
              </div>
            </div>
            <div className="col-lg-6">
              <div className={`menu ${menuOpen ? "open" : ""}`}>
                <ul>
                  {navbardata.map((data) => (
                    <li key={data.id}>
                      <Link to={data.link}>{data.title}</Link>
                    </li>
                  ))}
                </ul>
                <div className="mobile-view">
                  <div className="accounts-wrap-cart">
                    <div className="accounts-wrap">
                      <div>
                        <i className="fa fa-user user-icon"></i>
                        <Link to="/login">Login</Link>
                      </div>
                      <div>
                        <Link to="/register">Register</Link>
                      </div>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="order-now-cart-btn">
                <Link to="/order-now" className="order-now-btn">
                  <img src={scooty} alt="" />
                  Order Now
                </Link>
                <Link to="/cart" className="cart-btn">
                  <img src={cart} alt="" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
