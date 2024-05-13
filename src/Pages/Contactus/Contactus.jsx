import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";

import Header from "../../Components/CommonComponents/Header/Header";

import Footer from "../../Components/CommonComponents/Footer/Footer";
import Banner from "../../Components/Banner/Banner";
import Marquee from "../../Components/Marquee/Marquee";
import ShapeImage from "../../assets/images/shape_2.png.png";
import TomatoImasge from "../../assets/images/tomato.png";
import CapsicumImage from "../../assets/images/capsicum.png";

import { useDispatch, useSelector } from "react-redux";
import { courseListStart } from "../../store/actions/AppActions";
import "./contactus.scss";
import VisitsBanner from "../../Components/VisitsBanner/VisitsBanner";

const Home = () => {
  // const dispatch = useDispatch()

  // useEffect(() => {
  //   dispatch(courseListStart("token"))
  // });

  return (
    <div className="">
      <Header />
      <section className="middle-sections">
        <Banner title={"CONTACT US"} description={"PIZZA SHOP in MICHIGAN"} btnText={false} />
        <Marquee />
      </section>
      <section className="Contact-us">
        <img src={ShapeImage} alt="contactus" className="site-img" />
        <div className="container">
          <div className="row">
            <div className="Contact-us-Frame">
              <div class="mapouter"><div class="gmap_canvas"><iframe width="1300" height="560" id="gmap_canvas"
                src="https://maps.google.com/maps?q=636+5th+Ave%2C+New+York&t=&z=13&ie=UTF8&iwloc=&output=embed"
                frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                <a href="https://www.analarmclock.com/">online alarm clock</a><a href="https://online.stopwatch-timer.net/"></a>
                <a href="https://www.mapembed.net">generate Google Maps</a></div></div>
            </div>
          </div>
        </div>
      </section>
      <section className="call-now">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="white-board">
                <img src={TomatoImasge} alt="contactus" />
                <h2>CALL NOW</h2>
                <h3>+(810) 531-5685</h3>
                <img src={CapsicumImage} alt="contactus" className="bottom-img" />
              </div>
            </div>
            <div className="col-md-4">
              <div className="white-board">
                <img src={TomatoImasge} alt="contactus" />
                <h2>CALL NOW</h2>
                <h3>+(810) 531-5685</h3>
                <img src={CapsicumImage} alt="contactus" className="bottom-img" />
              </div>
            </div>
            <div className="col-md-4">
              <div className="white-board">
                <img src={TomatoImasge} alt="contactus" />
                <h2>CALL NOW</h2>
                <h3>+(810) 531-5685</h3>
                <img src={CapsicumImage} alt="contactus" className="bottom-img" />
              </div>
            </div>
          </div>

        </div>
      </section>
      <section className="form-section">
        <div className="container">
          <div className="row">
            <div className="Contact-us-Form">
              <form id="form">
                <div className="row">
                  <div className="col-md-6">
                    <div class="form-control">
                      <input type="text" id="name"
                        placeholder="Enter your name" />
                    </div>

                    <div class="form-control">
                      <input type="email" id="email"
                        placeholder="Enter your email" />
                    </div>

                    <div class="form-control">
                      <input type="email" id="email"
                        placeholder="Enter your email" />
                    </div>

                  </div>
                  <div className="col-md-6">
                    <div class="form-control">
                      <input type="text" id="name"
                        placeholder="Enter your name" />
                    </div>

                    <div class="form-control">
                      <input type="email" id="email"
                        placeholder="Enter your email" />
                    </div>

                    <div class="form-control">
                      <input type="email" id="email"
                        placeholder="Enter your email" />
                    </div>

                  </div>
                  <div className="col-md-12">
                    <div class="form-control">
                      <textarea name="comment" id="comment"
                        placeholder="Enter your comment here">
                      </textarea>
                    </div>
                    <button className="btn-sumit" type="submit" value="submit">
                      Submit Now
                    </button>

                  </div>
                </div>
              </form>
            </div>
          </div></div>
      </section>
      <section className="visit">
        <VisitsBanner />
      </section>
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
