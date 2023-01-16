import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Footer from "../Footer/Footer";
import Loading from "../Loading/Loading";
import Navbar from "../NavBar/Navbar";
import "./Products.css";

export default function Product() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState([]);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
        // console.log("filter :>> ", filter);
      }
      return () => {
        componentMounted = false;
      };
    };
    getProducts();
  }, []);

  const filterProduct = (cat) => {
    const updateFilter = data.filter((x) => x.category === cat);
    setFilter(updateFilter);
  };

  const Showproducts = () => {
    // console.log(filter);
    return (
      <>
        <div class="row">
          <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <div className="buttons d-flex justify-content-center mb-5 pb-5">
              <div
                className="btn btn-outline-dark mx-2 curp"
                onClick={() => setFilter(data)}
              >
                All
              </div>
              <div
                className="btn btn-outline-dark mx-2 curp"
                onClick={() => filterProduct("men's clothing")}
              >
                Men's Clothing
              </div>
              <div
                className="btn btn-outline-dark mx-2 curp"
                onClick={() => filterProduct("women's clothing")}
              >
                Women's Clothing
              </div>
              <div
                className="btn btn-outline-dark mx-2 curp"
                onClick={() => filterProduct("jewelery")}
              >
                Jewelery Clothing
              </div>
              <div
                className="btn btn-outline-dark mx-2 curp"
                onClick={() => filterProduct("electronics")}
              >
                Electronic Clothing
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          {filter.map((product) => {
            return (
              <>
                <div className="col-md-3 mb-4">
                  <div className="card h-100 text-center p-4" key={product.id}>
                    <img
                      src={product.image}
                      className="card-img-top"
                      alt={product.title}
                      height="250px"
                    />
                    <div className="card-body">
                      <h5 className="card-title mb-0">
                        {product.title.substring(0, 10)}...
                      </h5>
                      <p className="card-text">${product.price}</p>
                      <NavLink
                        to={`/products/${product.id}`}
                        className="btn btn-outline-dark"
                      >
                        Buy Now
                      </NavLink>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </>
    );
  };

  return (
    <div>
      <div className="container my-5 ">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="display-4 font-weight-bold text-center">
              Lates Product
            </h1>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          {loading ? <Loading /> : <Showproducts />}
          {/* <Loading/> */}
        </div>
      </div>

      <Footer />
    </div>
  );
}
