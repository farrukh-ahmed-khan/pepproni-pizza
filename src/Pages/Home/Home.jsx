import React, { useRef, useState,useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";

import Header from "../../Components/CommonComponents/Header/Header";

import Footer from "../../Components/CommonComponents/Footer/Footer";
import Banner from "../../Components/Banner/Banner";
import Marquee from "../../Components/Marquee/Marquee";
import pizza1 from "../../assets/images/pizza-1.png";
import pizza2 from "../../assets/images/pizza-2.png";
import pizza3 from "../../assets/images/pizza-3.png";
import pizzaimg1 from "../../assets/images/pizza-img1.png";
import pizzaimg2 from "../../assets/images/pizza-img2.png";
import pizzaimg3 from "../../assets/images/pizza-img3.png";
import icon1 from "../../assets/images/icon-choose1.png";
import icon2 from "../../assets/images/icon-choose2.png";
import icon3 from "../../assets/images/icon-choose3.png";
import icon4 from "../../assets/images/icon-choose4.png";
import pizzabump from "../../assets/images/pizza-bump.png";
import { useDispatch,useSelector } from "react-redux";
import { courseListStart } from "../../store/actions/AppActions";
import "./home.scss";
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
        <Banner title={"We believe that good food improves mood" } description={"PIZZA SHOP in MICHIGAN"} btnText={true}/>
        <Marquee />
      </section>
      <section className="best-pizza">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="best-pizza-img ">
                <img src={pizza1} alt="pizza" />
              </div>
              <div className="best-pizza-img">
                <img src={pizza2} alt="pizza" />
              </div>
            </div>
            <div className="col-lg-4">
              <div className="best-pizza-content">
                <h2>Best Pizza in Town</h2>
                <h4>Best Pizza ideas & tradition from the whole world</h4>
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident, sunt in culpa qui officia
                  deserunt mollit anim id est laborum
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  auctor, libero at luctus fermentum, nulla turpis malesuada
                  justo, sit amet posuere nisi nunc sit amet felis. Nullam
                  pharetra, felis eget ultrices bibendum, nunc metus ultrices
                  quam, nec tincidunt mi ex eget nunc. Proin sit amet tincidunt
                  eros. Nullam in nunc nec nunc tincidunt ultricies. Nullam
                  pharetra, felis eget ultrices bibendum, nunc metus ultrices
                  quam, nec tincidunt mi ex eget nunc. Proin sit amet tincidunt
                  eros. Nullam in nunc nec nunc tincidunt ultricies.
                </p>
                <a href="#" className="contact-me-btn">
                  Order Now
                </a>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="best-pizza-img">
                <img src={pizza3} alt="pizza" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="blue-sec">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="blue-sec-head">
                <h2>Why Choose our foods</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  <br />
                  sed do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3">
              <div className="choose-card">
                <div className="icon-wrap">
                  <img src={icon1} alt="" />
                </div>
                <h4>Quality Food</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  auctor, libero at luctus fermentum, nulla turpis malesuada
                  justo, sit amet posuere nisi nunc sit amet felis.
                </p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="choose-card">
                <div className="icon-wrap">
                  <img src={icon2} alt="" />
                </div>
                <h4>Quality Food</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  auctor, libero at luctus fermentum, nulla turpis malesuada
                  justo, sit amet posuere nisi nunc sit amet felis.
                </p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="choose-card">
                <div className="icon-wrap">
                  <img src={icon3} alt="" />
                </div>
                <h4>Quality Food</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  auctor, libero at luctus fermentum, nulla turpis malesuada
                  justo, sit amet posuere nisi nunc sit amet felis.
                </p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="choose-card">
                <div className="icon-wrap">
                  <img src={icon4} alt="" />
                </div>
                <h4>Quality Food</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  auctor, libero at luctus fermentum, nulla turpis malesuada
                  justo, sit amet posuere nisi nunc sit amet felis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="top-selling">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="top-selling-head">
                <h2>Top Selling Products</h2>
              </div>
            </div>
          </div>
          <div className="row pt-4 pr-slider">
            <Swiper
              rewind={true}
              navigation={true}
              modules={[Navigation]}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 50,
                },
              }}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="">
                  <div className="top-selling-card">
                    <div className="top-selling-img">
                      <img src={pizzaimg1} alt="" />
                    </div>
                    <div className="top-selling-content">
                      <h4>Chicken Pizza</h4>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec auctor, libero at luctus fermentum, nulla turpis
                        malesuada justo, sit amet posuere nisi nunc sit amet
                        felis.
                      </p>
                      <p>Total Cost: $87.99</p>
                      <div className="star-wrapper">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="">
                  <div className="top-selling-card">
                    <div className="top-selling-img">
                      <img src={pizzaimg1} alt="" />
                    </div>
                    <div className="top-selling-content">
                      <h4>Chicken Pizza</h4>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec auctor, libero at luctus fermentum, nulla turpis
                        malesuada justo, sit amet posuere nisi nunc sit amet
                        felis.
                      </p>
                      <p>Total Cost: $87.99</p>
                      <div className="star-wrapper">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="">
                  <div className="top-selling-card">
                    <div className="top-selling-img">
                      <img src={pizzaimg1} alt="" />
                    </div>
                    <div className="top-selling-content">
                      <h4>Chicken Pizza</h4>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec auctor, libero at luctus fermentum, nulla turpis
                        malesuada justo, sit amet posuere nisi nunc sit amet
                        felis.
                      </p>
                      <p>Total Cost: $87.99</p>
                      <div className="star-wrapper">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="">
                  <div className="top-selling-card">
                    <div className="top-selling-img">
                      <img src={pizzaimg1} alt="" />
                    </div>
                    <div className="top-selling-content">
                      <h4>Chicken Pizza</h4>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec auctor, libero at luctus fermentum, nulla turpis
                        malesuada justo, sit amet posuere nisi nunc sit amet
                        felis.
                      </p>
                      <p>Total Cost: $87.99</p>
                      <div className="star-wrapper">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="">
                  <div className="top-selling-card">
                    <div className="top-selling-img">
                      <img src={pizzaimg1} alt="" />
                    </div>
                    <div className="top-selling-content">
                      <h4>Chicken Pizza</h4>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec auctor, libero at luctus fermentum, nulla turpis
                        malesuada justo, sit amet posuere nisi nunc sit amet
                        felis.
                      </p>
                      <p>Total Cost: $87.99</p>
                      <div className="star-wrapper">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="">
                  <div className="top-selling-card">
                    <div className="top-selling-img">
                      <img src={pizzaimg1} alt="" />
                    </div>
                    <div className="top-selling-content">
                      <h4>Chicken Pizza</h4>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec auctor, libero at luctus fermentum, nulla turpis
                        malesuada justo, sit amet posuere nisi nunc sit amet
                        felis.
                      </p>
                      <p>Total Cost: $87.99</p>
                      <div className="star-wrapper">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
      <section className="ordernow-sec">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="ordernow-head">
                <h3>Order Now</h3>
                <h2>Order Now</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-3"></div>
              <div className="col-lg-6">
                <div className="pic-wrapper pulses">
                  <img src={pizzabump} alt="" />
                </div>
              </div>
              <div className="col-lg-3"></div>
            </div>
          </div>
        </div>
        <div className="marques-wrappers">
          <div className="marque1">
            <Marquee />
          </div>
          <div className="marque2">
            <Marquee />
          </div>
        </div>
      </section>
      <section className="visit">
        <VisitsBanner/>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
