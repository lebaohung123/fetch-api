import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import { NavLink } from "react-router-dom";
import Footer from "../Footer/Footer";
import Loading from "../Loading/Loading";
import "./Products.scss";
import { Product } from "../interface";

const Products: React.FC = () => {
	const [data, setData] = useState<Product[]>([]);
	const [filter, setFilter] = useState<Product[]>([]);
	const [loading, setLoading] = useState<boolean>(false);
	const [currentPage, setCurrentPage] = useState<number>(2);
	const [textSearch, setTextSearch] = useState<string>("All");

	useEffect(() => {
		const getProducts = async () => {
			setLoading(true);
			const response = await fetch("https://api.escuelajs.co/api/v1/products");
			const data: Product[] = await response.json();
			const filterData = data.slice(0, 20);
			setData(data);
			setFilter(filterData);
			setLoading(false);
		};
		getProducts();
	}, []);

	const filterProduct = (text: string) => {
		if (text === "All") {
			setFilter(data.slice(0, 20));
			return;
		}
		const updateFilter = data.filter((x) => x.category.name === text);
		let filter: Product[];
		if (updateFilter.length > 20) {
			filter = updateFilter.slice(0, 20);
		} else {
			filter = updateFilter;
		}
		setFilter(filter);
	};

	const handleShowMore = () => {
		const currentEnd = currentPage * 20;
		if (textSearch === "All") {
			const newProducts = data.slice(0, currentEnd);
			setFilter(newProducts);
			setCurrentPage((curr) => curr + 1);
			return;
		} else {
			const newProducts = data
				.filter((x) => x.category.name === textSearch)
				.slice(0, currentEnd);
			setFilter(newProducts);
			setCurrentPage((curr) => curr + 1);
		}
	};

	const handleTextSearch = (txt: string) => {
		setTextSearch(txt);
		filterProduct(txt);
	};

	const Showproducts: React.FC = () => {
		return (
			<>
				<div className="row">
					<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
						<div className="buttons d-flex justify-content-center mb-5 pb-5">
							{["All", "IPhone", "Azul", "Gorra", "Flores Cristales"].map(
								(text, index) => (
									<div
										key={index}
										className={`btn btn-outline-dark mx-2 curp ${
											text === textSearch ? "active" : ""
										}`}
										onClick={() => handleTextSearch(text)}>
										{text}
									</div>
								)
							)}
						</div>
					</div>
				</div>

				<div className="row">
					{filter.map((product, index) => {
						return (
							<div className="col-md-3 mb-4" key={index}>
								<div
									className="card h-100 text-center p-4"
									key={product.id}>
									<img
										src={product.images[0]}
										className="card-img-top"
										alt={product.title}
										height="250px"
									/>
									<div className="card-body">
										<h5 className="card-title mb-0">
											{product.title}
										</h5>
										<p className="card-text">${product.price}</p>
										<NavLink
											to={`/products/${product.id}`}
											className="btn btn-outline-dark">
											Buy Now
										</NavLink>
									</div>
								</div>
							</div>
						);
					})}
				</div>
				{filter.length % 20 === 0 && filter.length > 0 ? (
					<Button variant="secondary" onClick={handleShowMore}>
						Load More
					</Button>
				) : (
					<h1 className="text-center min-vw-100 min-vh-50 d-flex align-items-center justify-content-center pb-5">
						Over Item
					</h1>
				)}
			</>
		);
	};

	return (
		<div>
			<div className="container my-5 ">
				<div className="row">
					<div className="col-12 mb-5">
						<h1 className="display-4 font-weight-bold text-center">
							Latest Product
						</h1>
						<hr />
					</div>
				</div>
				<div className="row justify-content-center">
					{loading ? <Loading /> : <Showproducts />}
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Products;
