import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";

import Header from "../../Components/CommonComponents/Header/Header";

import Footer from "../../Components/CommonComponents/Footer/Footer";
import Banner from "../../Components/Banner/Banner";
import Marquee from "../../Components/Marquee/Marquee";
import MenuItem from "../../assets/images/image-menu.png";
import MenuItem1 from "../../assets/images/image-menu2.png";
import Menuitem2 from "../../assets/images/image-menu3.png";
import Menuitem3 from '../../assets/images/food-1.png.png'
import Menuitem4 from '../../assets/images/sushi-1.png.png'
import Menuitem5 from '../../assets/images/pizza-1.png.png'
import Menuitem6 from '../../assets/images/drink-1.png.png'
import CardImage from '../../assets/images/card-round.png'
import Rating from "../../assets/images/rating.png"
import SiteImage from '../../assets/images/site-image1.png'
import SiteImage2 from '../../assets/images/site-image2.png'
import SiteImage3 from '../../assets/images/site-image3.png'
import DeleteIcon from '../../assets/images/deletebtn.png'
import { useDispatch, useSelector } from "react-redux";
import { courseListStart } from "../../store/actions/AppActions";
import "./menu.scss";
import VisitsBanner from "../../Components/VisitsBanner/VisitsBanner";

const MenuScreen = () => {
    // const dispatch = useDispatch()

    // useEffect(() => {
    //   dispatch(courseListStart("token"))
    // });

    return (
        <div className="">
            <Header />
            <section className="middle-sections">
                <Banner title={"ENJOY YOUR FAVOURITE FOOD WITH FAMILY"} description={"PIZZA SHOP in MICHIGAN"} btnText={false} />
                <Marquee />
            </section>
            <section className="menu-parent">
                <div className="container">
                    <div className="row">
                        <h2>MENU</h2>
                        <div className="border-row"></div>
                        <h3>our best food menu</h3>
                        <img src={SiteImage} alt="Menu" />
                    </div>
                    <img src={SiteImage3} alt="Menu" className="site-image" />
                    <div className="menu-list">
                        <div className="menu-div">
                            <img src={Menuitem6} alt="menu" />
                            <h4 className="menu-text">French Bread Pizza</h4>

                        </div>
                        <div className="menu-div">
                            <img src={Menuitem2} alt="menu" />
                            <h4 className="menu-text">Gourmet Pizzas</h4>

                        </div>
                        <div className="menu-div">
                            <img src={Menuitem4} alt="menu" />
                            <h4 className="menu-text">Stuffed Calzones</h4>

                        </div>
                        <div className="menu-div">
                            <img src={Menuitem5} alt="menu" />
                            <h4 className="menu-text">Grinded Sandwiches</h4>

                        </div>
                        <div className="menu-div">
                            <img src={Menuitem6} alt="menu" />
                            <h4 className="menu-text">Cheese Bred Dipping Ring</h4>

                        </div>
                        <div className="menu-div">
                            <img src={Menuitem5} alt="menu" />
                            <h4 className="menu-text">Cheese Bred Ring</h4>

                        </div>
                        <div className="menu-div">
                            <img src={Menuitem6} alt="menu" />
                            <h4 className="menu-text">XL Stuffed Cheese Bred</h4>

                        </div>
                        <div className="menu-div">
                            <img src={Menuitem4} alt="menu" />
                            <h4 className="menu-text">Pizza Bites</h4>

                        </div>
                    </div>

                </div>
            </section>
            <section className="card-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="card-list">
                                <div className="card1">
                                    <img src={CardImage} alt="Menu" />
                                    <div className="card-text">
                                        <h2>Stuffed Calzones</h2>
                                        <h5>Place your title here</h5>
                                        <img src={Rating} alt="Rating" />
                                    </div>
                                    <div className="border-row"></div>
                                    <div className="pricing-div">
                                        <h3>$27.00</h3>
                                        <img src={DeleteIcon} alt="Delete" />
                                    </div>

                                </div>
                                <div className="card1">
                                    <img src={CardImage} alt="Menu" />
                                    <div className="card-text">
                                        <h2>Stuffed Calzones</h2>
                                        <h5>Place your title here</h5>
                                        <img src={Rating} alt="Rating" />
                                    </div>
                                    <div className="border-row"></div>
                                    <div className="pricing-div">
                                        <h3>$27.00</h3>
                                        <img src={DeleteIcon} alt="Delete" />
                                    </div>

                                </div>
                                <div className="card1">
                                    <img src={CardImage} alt="Menu" />
                                    <div className="card-text">
                                        <h2>Stuffed Calzones</h2>
                                        <h5>Place your title here</h5>
                                        <img src={Rating} alt="Rating" />
                                    </div>
                                    <div className="border-row"></div>
                                    <div className="pricing-div">
                                        <h3>$27.00</h3>
                                        <img src={DeleteIcon} alt="Delete" />
                                    </div>

                                </div>
                                <div className="card1">
                                    <img src={CardImage} alt="Menu" />
                                    <div className="card-text">
                                        <h2>Stuffed Calzones</h2>
                                        <h5>Place your title here</h5>
                                        <img src={Rating} alt="Rating" />
                                    </div>
                                    <div className="border-row"></div>
                                    <div className="pricing-div">
                                        <h3>$27.00</h3>
                                        <img src={DeleteIcon} alt="Delete" />
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="card-list">
                                <div className="card1">
                                    <img src={CardImage} alt="Menu" />
                                    <div className="card-text">
                                        <h2>Stuffed Calzones</h2>
                                        <h5>Place your title here</h5>
                                        <img src={Rating} alt="Rating" />
                                    </div>
                                    <div className="border-row"></div>
                                    <div className="pricing-div">
                                        <h3>$27.00</h3>
                                        <img src={DeleteIcon} alt="Delete" />
                                    </div>

                                </div>
                                <div className="card1">
                                    <img src={CardImage} alt="Menu" />
                                    <div className="card-text">
                                        <h2>Stuffed Calzones</h2>
                                        <h5>Place your title here</h5>
                                        <img src={Rating} alt="Rating" />
                                    </div>
                                    <div className="border-row"></div>
                                    <div className="pricing-div">
                                        <h3>$27.00</h3>
                                        <img src={DeleteIcon} alt="Delete" />
                                    </div>

                                </div>
                                <div className="card1">
                                    <img src={CardImage} alt="Menu" />
                                    <div className="card-text">
                                        <h2>Stuffed Calzones</h2>
                                        <h5>Place your title here</h5>
                                        <img src={Rating} alt="Rating" />
                                    </div>
                                    <div className="border-row"></div>
                                    <div className="pricing-div">
                                        <h3>$27.00</h3>
                                        <img src={DeleteIcon} alt="Delete" />
                                    </div>

                                </div>
                                <div className="card1">
                                    <img src={CardImage} alt="Menu" />
                                    <div className="card-text">
                                        <h2>Stuffed Calzones</h2>
                                        <h5>Place your title here</h5>
                                        <img src={Rating} alt="Rating" />
                                    </div>
                                    <div className="border-row"></div>
                                    <div className="pricing-div">
                                        <h3>$27.00</h3>
                                        <img src={DeleteIcon} alt="Delete" />
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <img src={SiteImage2} alt="Menu" className="site-image2" />
            </section>

            <section className="visit">
                <VisitsBanner />
            </section>
            {/* <Footer /> */}
        </div>
    );
};

export default MenuScreen;
