import React from "react";
import { Link } from "react-router-dom";
import "./banner.scss";

const Banner = ({title,description,btnText}) => {
  return (
    <div className="pep-banner">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="pep-banner-content">
              <h4>{description}</h4>
              <h2>{title}</h2>
              {btnText === true ?
              <div>
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
            </div> : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
