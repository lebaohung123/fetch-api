import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./CartSlice/CartSlice";

export default function Cart() {
  const product = useSelector((state) => state.cart.listCart);
  const dispatch = useDispatch();
  // console.log(product.length);

  const TotalPay = () => {
    if (product.length >= 1) {
      let totalMoney = 0;
      product.map((x) => (totalMoney += x.quantity * x.price));
      return (
        <>
          <div className="row d-flex align-items-center justify-content-center my-5 ">
            <div className="col-md-4"></div>
            <div className="col-md-4">
              <p className="lead font-weight-bold">Total: {totalMoney}$</p>
            </div>
          </div>
        </>
      );
    } else {
      return (
        <h1 className="text-center min-vw-100 min-vh-100 d-flex align-items-center justify-content-center">
          NO ITEMS...
        </h1>
      );
    }
  };

  return (
    <div>
      {product.map((prod) => {
        return (
          <>
            <div className="row d-flex align-items-center justify-content-center my-5 border">
              <div className="col-md-4">
                <img
                  src={prod.image}
                  alt={prod.image}
                  height="200px"
                  width="180px"
                />
              </div>
              <div className="col-md-4">
                <h3>{prod.title}</h3>
                <p className="lead font-weight-bold">
                  Quantity: {prod.quantity} * $ {prod.price} = ${" "}
                  {prod.quantity * prod.price}
                </p>
                <div className="nav">
                  <button
                    className="btn btn-outline-dark me-4"
                    onClick={() => dispatch(decrement(prod))}
                  >
                    <i class="fa fa-minus" aria-hidden="true"></i>
                  </button>
                  <div
                    class="border text-wrap d-flex align-items-center justify-content-center mx-2 fs-2"
                    style={{ width: "6rem" }}
                  >
                    {prod.quantity}
                  </div>
                  <button
                    className="btn btn-outline-dark me-4"
                    onClick={() => dispatch(increment(prod))}
                  >
                    <i class="fa fa-plus" aria-hidden="true"></i>
                  </button>
                </div>
              </div>
            </div>
          </>
        );
      })}
      <TotalPay />
    </div>
  );
}
