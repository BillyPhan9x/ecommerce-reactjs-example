import React from "react";

// file Products.jsx
import Products from "./Products";

const HomePage = () => {
  return (
    <div className="container">
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="true"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="/images/img1.png"
              className="d-block w-100"
              alt="Iphone"
              height={500}
            />
          </div>
          <div className="carousel-item">
            <img
              src="/images/img2.png"
              className="d-block w-100"
              alt="Ipad"
              height={500}
            />
          </div>
          <div className="carousel-item">
            <img
              src="/images/img3.png"
              className="d-block w-100"
              alt="Watch"
              height={500}
            />
          </div>
          <div className="carousel-item">
            <img
              src="/images/img4.png"
              className="d-block w-100"
              alt="Airpod"
              height={500}
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <Products />
    </div>
  );
};

export default HomePage;
