import React from "react";
import Products from "./Products";

const Home = () => {
  return (
    <div className="container hero mt-3">
      <div className="card bg-dark text-muted border-0">
        <img
          src="../images/banner2.jpg"
          className="card-img"
          alt="Background"
          height={400}
        />
        <div className="card-img-overlay c-flex">
          <div className="container display-3 fw-bolder mb-0">
            <h5 className="card-title text-muted">NEW INSPIRATION 2020</h5>
            <p className="card-text leads fs-2 mb-0">20% OFF ON NEW SEASON</p>
            <button className="btn btn-dark">Browse Collections</button>
          </div>
        </div>
      </div>
      <Products />
    </div>
  );
};

export default Home;
