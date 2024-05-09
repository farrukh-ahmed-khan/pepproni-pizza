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
            <div className="col-lg-3"></div>
            <div className="col-lg-6">
              <div className="footer-content">
                <div className="footer-logo-wrapper">
                  <img src={logoft} alt="logo" />
                </div>
                <div className="footer-text">
                  <p>
                    Scott L. Miller has earned his Master’s degree in social
                    work and boasts extensive experience as a psychiatric and
                    medical LCSW in both public and private settings.
                  </p>
                </div>
                <div className="footerLinks">
                  <ul>
                    <li>
                      <Link to="#">Home</Link>
                    </li>
                    <li>
                      <Link to="#">About</Link>
                    </li>
                    <li>
                      <Link to="#">Services</Link>
                    </li>
                    <li>
                      <Link to="#">Blog</Link>
                    </li>
                    <li>
                      <Link to="#">Contact</Link>
                    </li>
                  </ul>
                </div>
                <div className="footersocial-icons">
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
                        <i className="fa fa-linkedin"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3"></div>
          </div>
        </div>
      </div>
        <div className="footer-bottom-wrapper">
          <div className="container-fluid">
            <div className="row d-flex align-items-center">
              <div className="col-lg-6">
                <div className="footer-bottom-content">
                  <p>© 2021 Scott L. Miller. All Rights Reserved.</p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="footer-bottom-img">
                  <img src={footerbottomimg} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  );
};

export default Footer;
