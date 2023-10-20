import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import "./Navbar.scss";
import { RootState } from "../interface";

const Navbar: React.FC = () => {
	const state = useSelector((state: RootState) => state.cart.listCart);
	return (
		<nav className="navbar navbar-expand-lg bg-body-tertiary navbar-light bg-light py-3 shadow-sm ">
			<div className="container">
				<NavLink className="navbar-brand fw-bold fs-4" to="/">
					Christopher
				</NavLink>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon" />
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav mx-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<NavLink className="nav-link" aria-current="page" to="/">
								Home
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink className="nav-link" to="/products">
								Products
							</NavLink>
						</li>
					</ul>
					<div className="buttons">
						<NavLink to="/cart" className="btn btn-outline-dark ">
							<i
								className="fa fa-shopping-cart mr-2"
								aria-hidden="true"></i>
							Cart ({state.length})
						</NavLink>
					</div>
				</div>
			</div>
		</nav>
	);
};
export default Navbar;
