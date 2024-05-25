import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
import Header from "../../Components/CommonComponents/Header/Header";
import CartImage from "../../assets/images/cart-image.png";
import Footer from "../../Components/CommonComponents/Footer/Footer";
import Check from "../../assets/images/Check.png";
import PizzaSize from "../../assets/images/pizzasize.png";
import { useDispatch, useSelector } from "react-redux";
import { courseListStart } from "../../store/actions/AppActions";
import "./feed.scss";
import VisitsBanner from "../../Components/VisitsBanner/VisitsBanner";

const Feed = () => {
  const [isChecked, setIsChecked] = useState(false);
  // const dispatch = useDispatch()

  // useEffect(() => {
  //   dispatch(courseListStart("token"))
  // });

  return (
    <div className="">
      <Header />
      <section className="middle-sections">
        {/* <Banner title={"Get your slice of the pie" } description={"Reserve Your order today"} btnText={true}/>
        <Marquee /> */}
      </section>
      <section className="size-section">
        <div className="container">
          <div className="row">
            <h2>Select your pizza Size</h2>
            <div className="col-md-2 box-size">
              <div className="select-size">
                <button
                  onClick={(e) => setIsChecked(!isChecked)}
                  className="image-box"
                  style={{
                    backgroundColor: isChecked === true ? "#C4E2E9" : "#fff",
                  }}
                >
                  <img
                    src={Check}
                    alt="Size"
                    style={{
                      float: "right",
                      display: isChecked ? "block" : "none",
                      position: "absolute",
                      right: 3,
                      top: 3,
                    }}
                  />
                  <h6>10’</h6>
                  <img src={PizzaSize} alt="pizza" />
                </button>
                <h3>Small</h3>
                <p>Serve 1-2</p>
                <div className="pricing-div">
                  <h3>$27.00</h3>
                </div>
              </div>
            </div>
            <div className="col-md-2 box-size">
              <div className="select-size">
                <button
                  onClick={(e) => setIsChecked(!isChecked)}
                  className="image-box"
                  style={{
                    backgroundColor: isChecked === true ? "#C4E2E9" : "#fff",
                  }}
                >
                  <img
                    src={Check}
                    alt="Size"
                    style={{
                      float: "right",
                      display: isChecked ? "block" : "none",
                      position: "absolute",
                      right: 3,
                      top: 3,
                    }}
                  />
                  <h6>10’</h6>
                  <img src={PizzaSize} alt="pizza" />
                </button>
                <h3>Small</h3>
                <p>Serve 1-2</p>
                <div className="pricing-div">
                  <h3>$27.00</h3>
                </div>
              </div>
            </div>
            <div className="col-md-2 box-size">
              <div className="select-size">
                <button
                  onClick={(e) => setIsChecked(!isChecked)}
                  className="image-box"
                  style={{
                    backgroundColor: isChecked === true ? "#C4E2E9" : "#fff",
                  }}
                >
                  <img
                    src={Check}
                    alt="Size"
                    style={{
                      float: "right",
                      display: isChecked ? "block" : "none",
                      position: "absolute",
                      right: 3,
                      top: 3,
                    }}
                  />
                  <h6>10’</h6>
                  <img src={PizzaSize} alt="pizza" />
                </button>
                <h3>Small</h3>
                <p>Serve 1-2</p>
                <div className="pricing-div">
                  <h3>$27.00</h3>
                </div>
              </div>
            </div>
            <div className="col-md-2 box-size">
              <div className="select-size">
                <button
                  onClick={(e) => setIsChecked(!isChecked)}
                  className="image-box"
                  style={{
                    backgroundColor: isChecked === true ? "#C4E2E9" : "#fff",
                  }}
                >
                  <img
                    src={Check}
                    alt="Size"
                    style={{
                      float: "right",
                      display: isChecked ? "block" : "none",
                      position: "absolute",
                      right: 3,
                      top: 3,
                    }}
                  />
                  <h6>10’</h6>
                  <img src={PizzaSize} alt="pizza" />
                </button>
                <h3>Small</h3>
                <p>Serve 1-2</p>
                <div className="pricing-div">
                  <h3>$27.00</h3>
                </div>
              </div>
            </div>
            <div className="col-md-2 box-size">
              <div className="select-size">
                <button
                  onClick={(e) => setIsChecked(!isChecked)}
                  className="image-box"
                  style={{
                    backgroundColor: isChecked === true ? "#C4E2E9" : "#fff",
                  }}
                >
                  <img
                    src={Check}
                    alt="Size"
                    style={{
                      float: "right",
                      display: isChecked ? "block" : "none",
                      position: "absolute",
                      right: 3,
                      top: 3,
                    }}
                  />
                  <h6>10’</h6>
                  <img src={PizzaSize} alt="pizza" />
                </button>
                <h3>Small</h3>
                <p>Serve 1-2</p>
                <div className="pricing-div">
                  <h3>$27.00</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="size-section"
        style={{ background: "#FBFBFB", border: "1px solid#E0E0E0" }}
      >
        <div className="container">
          <div className="row">
            <h2>Select your cRUST</h2>
            <div className="col-md-2 box-size">
              <div className="select-size">
                <button
                  onClick={(e) => setIsChecked(!isChecked)}
                  className="image-box"
                  style={{
                    backgroundColor: isChecked === true ? "#C4E2E9" : "#fff",
                  }}
                >
                  <img
                    src={Check}
                    alt="Size"
                    style={{
                      float: "right",
                      display: isChecked ? "block" : "none",
                      position: "absolute",
                      right: 3,
                      top: 3,
                    }}
                  />
                  <h6>10’</h6>
                  <img src={PizzaSize} alt="pizza" />
                </button>
                <h3>Small</h3>
                <p>Serve 1-2</p>
                <div className="pricing-div">
                  <h3>$27.00</h3>
                </div>
              </div>
            </div>
            <div className="col-md-2 box-size">
              <div className="select-size">
                <button
                  onClick={(e) => setIsChecked(!isChecked)}
                  className="image-box"
                  style={{
                    backgroundColor: isChecked === true ? "#C4E2E9" : "#fff",
                  }}
                >
                  <img
                    src={Check}
                    alt="Size"
                    style={{
                      float: "right",
                      display: isChecked ? "block" : "none",
                      position: "absolute",
                      right: 3,
                      top: 3,
                    }}
                  />
                  <h6>10’</h6>
                  <img src={PizzaSize} alt="pizza" />
                </button>
                <h3>Small</h3>
                <p>Serve 1-2</p>
                <div className="pricing-div">
                  <h3>$27.00</h3>
                </div>
              </div>
            </div>
            <div className="col-md-2 box-size">
              <div className="select-size">
                <button
                  onClick={(e) => setIsChecked(!isChecked)}
                  className="image-box"
                  style={{
                    backgroundColor: isChecked === true ? "#C4E2E9" : "#fff",
                  }}
                >
                  <img
                    src={Check}
                    alt="Size"
                    style={{
                      float: "right",
                      display: isChecked ? "block" : "none",
                      position: "absolute",
                      right: 3,
                      top: 3,
                    }}
                  />
                  <h6>10’</h6>
                  <img src={PizzaSize} alt="pizza" />
                </button>
                <h3>Small</h3>
                <p>Serve 1-2</p>
                <div className="pricing-div">
                  <h3>$27.00</h3>
                </div>
              </div>
            </div>
            <div className="col-md-2 box-size">
              <div className="select-size">
                <button
                  onClick={(e) => setIsChecked(!isChecked)}
                  className="image-box"
                  style={{
                    backgroundColor: isChecked === true ? "#C4E2E9" : "#fff",
                  }}
                >
                  <img
                    src={Check}
                    alt="Size"
                    style={{
                      float: "right",
                      display: isChecked ? "block" : "none",
                      position: "absolute",
                      right: 3,
                      top: 3,
                    }}
                  />
                  <h6>10’</h6>
                  <img src={PizzaSize} alt="pizza" />
                </button>
                <h3>Small</h3>
                <p>Serve 1-2</p>
                <div className="pricing-div">
                  <h3>$27.00</h3>
                </div>
              </div>
            </div>
            <div className="col-md-2 box-size">
              <div className="select-size">
                <button
                  onClick={(e) => setIsChecked(!isChecked)}
                  className="image-box"
                  style={{
                    backgroundColor: isChecked === true ? "#C4E2E9" : "#fff",
                  }}
                >
                  <img
                    src={Check}
                    alt="Size"
                    style={{
                      float: "right",
                      display: isChecked ? "block" : "none",
                      position: "absolute",
                      right: 3,
                      top: 3,
                    }}
                  />
                  <h6>10’</h6>
                  <img src={PizzaSize} alt="pizza" />
                </button>
                <h3>Small</h3>
                <p>Serve 1-2</p>
                <div className="pricing-div">
                  <h3>$27.00</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="size-section">
        <div className="container">
          <div className="row">
            <h2>Select your Sauce</h2>
            <div className="col-md-2 box-size">
              <div className="select-size">
                <button
                  onClick={(e) => setIsChecked(!isChecked)}
                  className="image-box"
                  style={{
                    backgroundColor: isChecked === true ? "#C4E2E9" : "#fff",
                  }}
                >
                  <img
                    src={Check}
                    alt="Size"
                    style={{
                      float: "right",
                      display: isChecked ? "block" : "none",
                      position: "absolute",
                      right: 3,
                      top: 3,
                    }}
                  />
                  <h6>10’</h6>
                  <img src={PizzaSize} alt="pizza" />
                </button>
                <h3>Small</h3>
                <p>Serve 1-2</p>
                <div className="pricing-div">
                  <h3>$27.00</h3>
                </div>
              </div>
            </div>
            <div className="col-md-2 box-size">
              <div className="select-size">
                <button
                  onClick={(e) => setIsChecked(!isChecked)}
                  className="image-box"
                  style={{
                    backgroundColor: isChecked === true ? "#C4E2E9" : "#fff",
                  }}
                >
                  <img
                    src={Check}
                    alt="Size"
                    style={{
                      float: "right",
                      display: isChecked ? "block" : "none",
                      position: "absolute",
                      right: 3,
                      top: 3,
                    }}
                  />
                  <h6>10’</h6>
                  <img src={PizzaSize} alt="pizza" />
                </button>
                <h3>Small</h3>
                <p>Serve 1-2</p>
                <div className="pricing-div">
                  <h3>$27.00</h3>
                </div>
              </div>
            </div>
            <div className="col-md-2 box-size">
              <div className="select-size">
                <button
                  onClick={(e) => setIsChecked(!isChecked)}
                  className="image-box"
                  style={{
                    backgroundColor: isChecked === true ? "#C4E2E9" : "#fff",
                  }}
                >
                  <img
                    src={Check}
                    alt="Size"
                    style={{
                      float: "right",
                      display: isChecked ? "block" : "none",
                      position: "absolute",
                      right: 3,
                      top: 3,
                    }}
                  />
                  <h6>10’</h6>
                  <img src={PizzaSize} alt="pizza" />
                </button>
                <h3>Small</h3>
                <p>Serve 1-2</p>
                <div className="pricing-div">
                  <h3>$27.00</h3>
                </div>
              </div>
            </div>
            <div className="col-md-2 box-size">
              <div className="select-size">
                <button
                  onClick={(e) => setIsChecked(!isChecked)}
                  className="image-box"
                  style={{
                    backgroundColor: isChecked === true ? "#C4E2E9" : "#fff",
                  }}
                >
                  <img
                    src={Check}
                    alt="Size"
                    style={{
                      float: "right",
                      display: isChecked ? "block" : "none",
                      position: "absolute",
                      right: 3,
                      top: 3,
                    }}
                  />
                  <h6>10’</h6>
                  <img src={PizzaSize} alt="pizza" />
                </button>
                <h3>Small</h3>
                <p>Serve 1-2</p>
                <div className="pricing-div">
                  <h3>$27.00</h3>
                </div>
              </div>
            </div>
            <div className="col-md-2 box-size">
              <div className="select-size">
                <button
                  onClick={(e) => setIsChecked(!isChecked)}
                  className="image-box"
                  style={{
                    backgroundColor: isChecked === true ? "#C4E2E9" : "#fff",
                  }}
                >
                  <img
                    src={Check}
                    alt="Size"
                    style={{
                      float: "right",
                      display: isChecked ? "block" : "none",
                      position: "absolute",
                      right: 3,
                      top: 3,
                    }}
                  />
                  <h6>10’</h6>
                  <img src={PizzaSize} alt="pizza" />
                </button>
                <h3>Small</h3>
                <p>Serve 1-2</p>
                <div className="pricing-div">
                  <h3>$27.00</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-2 box-size">
              <div className="select-size">
                <button
                  onClick={(e) => setIsChecked(!isChecked)}
                  className="image-box"
                  style={{
                    backgroundColor: isChecked === true ? "#C4E2E9" : "#fff",
                  }}
                >
                  <img
                    src={Check}
                    alt="Size"
                    style={{
                      float: "right",
                      display: isChecked ? "block" : "none",
                      position: "absolute",
                      right: 3,
                      top: 3,
                    }}
                  />
                  <h6>10’</h6>
                  <img src={PizzaSize} alt="pizza" />
                </button>
                <h3>Small</h3>
                <p>Serve 1-2</p>
                <div className="pricing-div">
                  <h3>$27.00</h3>
                </div>
              </div>
            </div>
            <div className="col-md-2 box-size">
              <div className="select-size">
                <button
                  onClick={(e) => setIsChecked(!isChecked)}
                  className="image-box"
                  style={{
                    backgroundColor: isChecked === true ? "#C4E2E9" : "#fff",
                  }}
                >
                  <img
                    src={Check}
                    alt="Size"
                    style={{
                      float: "right",
                      display: isChecked ? "block" : "none",
                      position: "absolute",
                      right: 3,
                      top: 3,
                    }}
                  />
                  <h6>10’</h6>
                  <img src={PizzaSize} alt="pizza" />
                </button>
                <h3>Small</h3>
                <p>Serve 1-2</p>
                <div className="pricing-div">
                  <h3>$27.00</h3>
                </div>
              </div>
            </div>
            <div className="col-md-2 box-size">
              <div className="select-size">
                <button
                  onClick={(e) => setIsChecked(!isChecked)}
                  className="image-box"
                  style={{
                    backgroundColor: isChecked === true ? "#C4E2E9" : "#fff",
                  }}
                >
                  <img
                    src={Check}
                    alt="Size"
                    style={{
                      float: "right",
                      display: isChecked ? "block" : "none",
                      position: "absolute",
                      right: 3,
                      top: 3,
                    }}
                  />
                  <h6>10’</h6>
                  <img src={PizzaSize} alt="pizza" />
                </button>
                <h3>Small</h3>
                <p>Serve 1-2</p>
                <div className="pricing-div">
                  <h3>$27.00</h3>
                </div>
              </div>
            </div>
            <div className="col-md-2 box-size">
              <div className="select-size">
                <button
                  onClick={(e) => setIsChecked(!isChecked)}
                  className="image-box"
                  style={{
                    backgroundColor: isChecked === true ? "#C4E2E9" : "#fff",
                  }}
                >
                  <img
                    src={Check}
                    alt="Size"
                    style={{
                      float: "right",
                      display: isChecked ? "block" : "none",
                      position: "absolute",
                      right: 3,
                      top: 3,
                    }}
                  />
                  <h6>10’</h6>
                  <img src={PizzaSize} alt="pizza" />
                </button>
                <h3>Small</h3>
                <p>Serve 1-2</p>
                <div className="pricing-div">
                  <h3>$27.00</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="size-section"
        style={{ background: "#FBFBFB", border: "1px solid#E0E0E0" }}
      >
        <div className="container">
          <div className="row">
            <h2>Select your cheese</h2>
            <div className="col-md-2 box-size">
              <div className="select-size">
                <button
                  onClick={(e) => setIsChecked(!isChecked)}
                  className="image-box"
                  style={{
                    backgroundColor: isChecked === true ? "#C4E2E9" : "#fff",
                  }}
                >
                  <img
                    src={Check}
                    alt="Size"
                    style={{
                      float: "right",
                      display: isChecked ? "block" : "none",
                      position: "absolute",
                      right: 3,
                      top: 3,
                    }}
                  />
                  <h6>10’</h6>
                  <img src={PizzaSize} alt="pizza" />
                </button>
                <h3>Small</h3>
                <p>Serve 1-2</p>
                <div className="pricing-div">
                  <h3>$27.00</h3>
                </div>
              </div>
            </div>
            <div className="col-md-2 box-size">
              <div className="select-size">
                <button
                  onClick={(e) => setIsChecked(!isChecked)}
                  className="image-box"
                  style={{
                    backgroundColor: isChecked === true ? "#C4E2E9" : "#fff",
                  }}
                >
                  <img
                    src={Check}
                    alt="Size"
                    style={{
                      float: "right",
                      display: isChecked ? "block" : "none",
                      position: "absolute",
                      right: 3,
                      top: 3,
                    }}
                  />
                  <h6>10’</h6>
                  <img src={PizzaSize} alt="pizza" />
                </button>
                <h3>Small</h3>
                <p>Serve 1-2</p>
                <div className="pricing-div">
                  <h3>$27.00</h3>
                </div>
              </div>
            </div>
            <div className="col-md-2 box-size">
              <div className="select-size">
                <button
                  onClick={(e) => setIsChecked(!isChecked)}
                  className="image-box"
                  style={{
                    backgroundColor: isChecked === true ? "#C4E2E9" : "#fff",
                  }}
                >
                  <img
                    src={Check}
                    alt="Size"
                    style={{
                      float: "right",
                      display: isChecked ? "block" : "none",
                      position: "absolute",
                      right: 3,
                      top: 3,
                    }}
                  />
                  <h6>10’</h6>
                  <img src={PizzaSize} alt="pizza" />
                </button>
                <h3>Small</h3>
                <p>Serve 1-2</p>
                <div className="pricing-div">
                  <h3>$27.00</h3>
                </div>
              </div>
            </div>
            <div className="col-md-2 box-size">
              <div className="select-size">
                <button
                  onClick={(e) => setIsChecked(!isChecked)}
                  className="image-box"
                  style={{
                    backgroundColor: isChecked === true ? "#C4E2E9" : "#fff",
                  }}
                >
                  <img
                    src={Check}
                    alt="Size"
                    style={{
                      float: "right",
                      display: isChecked ? "block" : "none",
                      position: "absolute",
                      right: 3,
                      top: 3,
                    }}
                  />
                  <h6>10’</h6>
                  <img src={PizzaSize} alt="pizza" />
                </button>
                <h3>Small</h3>
                <p>Serve 1-2</p>
                <div className="pricing-div">
                  <h3>$27.00</h3>
                </div>
              </div>
            </div>
            <div className="col-md-2 box-size">
              <div className="select-size">
                <button
                  onClick={(e) => setIsChecked(!isChecked)}
                  className="image-box"
                  style={{
                    backgroundColor: isChecked === true ? "#C4E2E9" : "#fff",
                  }}
                >
                  <img
                    src={Check}
                    alt="Size"
                    style={{
                      float: "right",
                      display: isChecked ? "block" : "none",
                      position: "absolute",
                      right: 3,
                      top: 3,
                    }}
                  />
                  <h6>10’</h6>
                  <img src={PizzaSize} alt="pizza" />
                </button>
                <h3>Small</h3>
                <p>Serve 1-2</p>
                <div className="pricing-div">
                  <h3>$27.00</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="size-section">
        <div className="container">
          <div className="row">
            <h2>Select your Sauce</h2>
            <div className="col-md-2 box-size">
              <div className="select-size">
                <button
                  onClick={(e) => setIsChecked(!isChecked)}
                  className="image-box"
                  style={{
                    backgroundColor: isChecked === true ? "#C4E2E9" : "#fff",
                  }}
                >
                  <img
                    src={Check}
                    alt="Size"
                    style={{
                      float: "right",
                      display: isChecked ? "block" : "none",
                      position: "absolute",
                      right: 3,
                      top: 3,
                    }}
                  />
                  <h6>10’</h6>
                  <img src={PizzaSize} alt="pizza" />
                </button>
                <h3>Small</h3>
                <p>Serve 1-2</p>
                <div className="pricing-div">
                  <h3>$27.00</h3>
                </div>
              </div>
            </div>
            <div className="col-md-2 box-size">
              <div className="select-size">
                <button
                  onClick={(e) => setIsChecked(!isChecked)}
                  className="image-box"
                  style={{
                    backgroundColor: isChecked === true ? "#C4E2E9" : "#fff",
                  }}
                >
                  <img
                    src={Check}
                    alt="Size"
                    style={{
                      float: "right",
                      display: isChecked ? "block" : "none",
                      position: "absolute",
                      right: 3,
                      top: 3,
                    }}
                  />
                  <h6>10’</h6>
                  <img src={PizzaSize} alt="pizza" />
                </button>
                <h3>Small</h3>
                <p>Serve 1-2</p>
                <div className="pricing-div">
                  <h3>$27.00</h3>
                </div>
              </div>
            </div>
            <div className="col-md-2 box-size">
              <div className="select-size">
                <button
                  onClick={(e) => setIsChecked(!isChecked)}
                  className="image-box"
                  style={{
                    backgroundColor: isChecked === true ? "#C4E2E9" : "#fff",
                  }}
                >
                  <img
                    src={Check}
                    alt="Size"
                    style={{
                      float: "right",
                      display: isChecked ? "block" : "none",
                      position: "absolute",
                      right: 3,
                      top: 3,
                    }}
                  />
                  <h6>10’</h6>
                  <img src={PizzaSize} alt="pizza" />
                </button>
                <h3>Small</h3>
                <p>Serve 1-2</p>
                <div className="pricing-div">
                  <h3>$27.00</h3>
                </div>
              </div>
            </div>
            <div className="col-md-2 box-size">
              <div className="select-size">
                <button
                  onClick={(e) => setIsChecked(!isChecked)}
                  className="image-box"
                  style={{
                    backgroundColor: isChecked === true ? "#C4E2E9" : "#fff",
                  }}
                >
                  <img
                    src={Check}
                    alt="Size"
                    style={{
                      float: "right",
                      display: isChecked ? "block" : "none",
                      position: "absolute",
                      right: 3,
                      top: 3,
                    }}
                  />
                  <h6>10’</h6>
                  <img src={PizzaSize} alt="pizza" />
                </button>
                <h3>Small</h3>
                <p>Serve 1-2</p>
                <div className="pricing-div">
                  <h3>$27.00</h3>
                </div>
              </div>
            </div>
            <div className="col-md-2 box-size">
              <div className="select-size">
                <button
                  onClick={(e) => setIsChecked(!isChecked)}
                  className="image-box"
                  style={{
                    backgroundColor: isChecked === true ? "#C4E2E9" : "#fff",
                  }}
                >
                  <img
                    src={Check}
                    alt="Size"
                    style={{
                      float: "right",
                      display: isChecked ? "block" : "none",
                      position: "absolute",
                      right: 3,
                      top: 3,
                    }}
                  />
                  <h6>10’</h6>
                  <img src={PizzaSize} alt="pizza" />
                </button>
                <h3>Small</h3>
                <p>Serve 1-2</p>
                <div className="pricing-div">
                  <h3>$27.00</h3>
                </div>
              </div>
            </div>
          </div>
        
        </div>
      </section>
      <section className="table-cart">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="table-row">
                <ul className="table-link-ul">
                  <li>PRODUCT</li>
                  <li>NAME</li>
                  <li>UNIT PRICE</li>
                  <li>QUANTITY</li>
                  <li>SUBTOTAL</li>
                </ul>
              </div>
            </div>
            <div className="col-md-12">
              <div className="table-row-2">
                <ul className="table-link-ul-2">
                  <li>
                    <img src={PizzaSize} alt="pizza" />
                  </li>
                  <li>Customizations</li>
                  <li>34.00$</li>
                  <li className="btn-li">
                    <i
                      class="fa fa-minus-square"
                      style={{ color: "#D5DAD7", fontSize: "30px" }}
                    ></i>
                    <input type="text" />
                    <i
                      class="fa fa-plus-square"
                      style={{ color: "#16B55F", fontSize: "30px" }}
                    ></i>
                  </li>
                  <li>34.00$</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="last-section">
        <div className="container">
          <div className="row">
          <div className="col-lg-6">
              <div className="new-letter">
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
                  Apply Coupon
                </button>
              </div>
            </div>
            <div className="col-md-6">
                <div className="payment-tab">
                    <h2>Create Your Own Large</h2>
                    <div>
                
                 
                    </div>
                    <div>
                    <div className="payment-line">
                      <h4>Large</h4>
                      <h5>$16.00</h5>
                    </div>
                    <div className="payment-line-2">
                      <h4>Customizations</h4>
                      <h5>$6.00</h5>
                    </div>
                    </div>
                    <div>
                    <div className="payment-line">
                      <h4>SUBTOTAL</h4>
                      <h5>$16.00</h5>
                    </div>
                    <div className="payment-line-2">
                      <h4>Customizations</h4>
                      <h5>$6.00</h5>
                    </div>
                    </div>
                    <div>
                    <div className="payment-line">
                      <h4>SUBTOTAL</h4>
                      <h5>$16.00</h5>
                    </div>
                    <div className="payment-line-2">
                      <h4>Customizations</h4>
                      <h5>$6.00</h5>
                    </div>
                    </div>
                </div>

            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Feed;
