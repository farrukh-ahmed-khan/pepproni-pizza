import React from "react";
import { Link } from "react-router-dom";
import "./banner.scss";

const Banner = () => {
  return (
    <div className="pep-banner">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="pep-banner-content">
              <h4>PIZZA SHOP in MICHIGAN</h4>
              <h2>We believe that good food improves mood</h2>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo voluptatem veritatis et quasi
              </p>
              <div className="banner-btn-wrap">
                <Link href="#" className="pep-table-btn">
                  Book A Table
                </Link>
                <Link href="#" className="pep-view-btn">
                  View Menu
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
