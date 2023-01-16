import React from "react";
import Product from "../Products/Products";

export default function Home() {
  return (
    <div className="hero">
      <div className="card text-bg-dark text-white border-0">
        <img
          src="/assets/bg.jpg"
          className="card-img bg-size-cover"
          alt="background"
          height="500px"
        />
        <div className="card-img-overlay d-flex flex-column justify-content-center">
          <div className="container">
            <h5 className="card-title display-3 font-weight-bold mb-2">
              NEW SEASON ARRIVALS
            </h5>
            <p className="card-text">CHECKOUT ALL THE TRENDY</p>
            <p className="card-text">
              <small>Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
      </div>
      <Product />
    </div>
  );
}
