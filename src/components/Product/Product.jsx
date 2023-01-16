import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { increment } from "../Cart/CartSlice/CartSlice";
import Loading from "../Loading/Loading";

export default function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState();
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      setProduct(await response.json());
      setLoading(false);
    };
    getProducts();

    return () => {};
  }, []);

  const handleAddCart = () => {
    dispatch(increment(product));
  };

  const ShowProduct = () => {
    return (
      <>
        <div className="col-ml-6">
          <img
            src={product?.image}
            alt={product?.title}
            height="400px"
            width="400px"
          />
        </div>
        <div className="col-md-6">
          <h4 className="text-uppercase text-black-50">{product?.category}</h4>
          <h1 className="display-5">{product?.title}</h1>
          <p className="lead font-weight-bold">
            Rating {product?.rating.rate}
            <i className="fa fa-star mx-2" aria-hidden="true"></i>
          </p>
          <h3 className="display-6 font-weight-bold my-4">${product?.price}</h3>
          <p className="lead">{product?.description}</p>
          <button
            className="btn btn-outline-dark px-4 py-2"
            onClick={handleAddCart}
          >
            Add to Cart
          </button>
          <NavLink to="/cart" className="btn btn-outline-dark mx-2">
            Go to Cart
          </NavLink>
        </div>
      </>
    );
  };

  return (
    <div className="container py-5">
      <div className="row py-5 justify-content-between">
        {loading ? <Loading /> : <ShowProduct />}
      </div>
    </div>
  );
}
