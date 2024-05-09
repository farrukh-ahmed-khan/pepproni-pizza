import React from "react";
import "./visitsbanner.scss";
import offerimg from "../../assets/images/offer.png";

const VisitsBanner = () => {
  return (
    <div className="visitbanner-wrap">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="flat-offer-area">
              <div className="flat-offer">
                <h2>Happy Announcement</h2>
                <h3>
                  Get 10% Flat Off
                  <br />
                  On Your First Order
                </h3>
              </div>
              <div className="flat-offer-image">
                <img src={offerimg} alt="offer" className="float"/>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="visit-us-wrapper">
              <div className="visit-us">
                <div className="visit-head">
                  <h2>Visit Us</h2>
                  <p>Booking Request</p>
                  <h3>(810) 531-5685</h3>
                </div>
                <div className="location-wrap">
                  <div className="location">
                    <h4>Location</h4>
                    <p>
                      600 N Washington Ave Suite C203,
                      <br />
                      Minneapolis, MN 55401
                    </p>
                  </div>
                  <div className="location">
                    <h4>Open Hours</h4>
                    <p>Mon - Fri: 9:00 - 19:00</p>
                    <p>Sat - Sun: 6:00 am - 11:00 pm</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisitsBanner;
