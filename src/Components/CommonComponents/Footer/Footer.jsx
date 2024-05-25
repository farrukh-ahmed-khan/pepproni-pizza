import React from "react";
import "./footer.scss";
// import logoft from "../../../assets/images/logo.png";
// import footerbottomimg from "../../../assets/images/footer-bottom-img.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="footer-wrapper">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="new-letter">
                <h2>Get New & Offers</h2>
                <p>Follow the latest articles and resources</p>
                <div class="form-control-footer">
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                  />
                </div>
                <button
                  className="btn-sumit-footer"
                  type="submit"
                  value="submit"
                >
                  Subscribe now
                </button>
              </div>
            </div>
            <div className="col-md-3">
              <div className="category-footer">
                <h3>Categories</h3>
                <ul>
                  <li><a>Lunch menu</a></li>
                  <li><a>Dessert</a></li>
                  <li><a>Breakfast menu</a></li>
                  <li><a>Drink</a></li>

                </ul>
              </div>

            </div>
            <div className="col-md-3">
              <div className="category-footer">
                <h3>Follow our</h3>
                <ul>
                  <li><a>Facebook</a></li>
                  <li><a>Instagram</a></li>
                  <li><a>Twitter</a></li>
                  <li><a>Youtube</a></li>

                </ul>
              </div>

            </div>
          </div>
          <div className="row">
             <div className="footer-link">
              <ul className="footer-link-ul">
                <li><a href="#">Home</a></li>
                <li><a href="#">Our Menu</a></li>
                <li><a href="#">Order Online</a></li>
                <li><a href="#">Feed</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Blog</a></li>
              </ul>
             </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom-wrapper">
        <div className="container-fluid">
          <div className="row d-flex align-items-center">
            <div className="col-lg-12">
              <div className="footer-bottom-content">
                <p>Copyright 2024 Pepperonijoe. All Right Reserved</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
