import React, { useRef, useState,useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";

import Header from "../../Components/CommonComponents/Header/Header";

import Footer from "../../Components/CommonComponents/Footer/Footer";
import Banner from "../../Components/Banner/Banner";
import Marquee from "../../Components/Marquee/Marquee";
import AboutImage from "../../assets/images/aboutimage.png";
import { useDispatch,useSelector } from "react-redux";
import { courseListStart } from "../../store/actions/AppActions";
import "./aboutus.scss";
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
        <Banner title={"ABOUT US"} description={"PIZZA SHOP in MICHIGAN"} btnText={false} />
        <Marquee />
      </section>
      <section className="About-us">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
        <div className="flat-about-area">
            <h2>ABOUT US</h2>
            <h3>Best Pizza ideas & tradition  from the whole world</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
            <p>Irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
            <p>In reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborumDuis aute proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
        </div>
          </div>
          <div className="col-lg-7">
            <div className="about-image">
          <img src={AboutImage} alt="aboutus" />
          </div>
          </div>
        </div>
      </div>
      </section>
      <section className="visit">
        <VisitsBanner/>
      </section>
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
