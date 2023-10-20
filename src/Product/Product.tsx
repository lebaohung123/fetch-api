import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import Loading from "../Loading/Loading";
import { increment } from "../redux/CartSlice/CartSlice";
import { Product as IProduct } from "../interface";

export default function Productt() {
	const { id } = useParams<{ id: string }>();
	const [product, setProduct] = useState<IProduct>();
	const [loading, setLoading] = useState(false);
	const dispatch = useDispatch();

	useEffect(() => {
		const getProducts = async () => {
			setLoading(true);
			const response = await fetch(
				`https://api.escuelajs.co/api/v1/products/${id}`
			);
			const data: IProduct = await response.json();
			setProduct(data);
			setLoading(false);
		};
		getProducts();

		return () => {};
	}, [id]);

	const handleAddCart = () => {
		if (product) {
			dispatch(increment(product));
		}
	};

	const ShowProduct = () => {
		return (
			<>
				<div className="col-ml-6">
					<img
						src={product?.images[0]}
						alt={product?.title}
						height="400px"
						width="400px"
					/>
				</div>
				<div className="col-md-6">
					<h4 className="text-uppercase text-black-50">
						{product?.category.name}
					</h4>
					<h1 className="display-5">{product?.title}</h1>
					<p className="lead font-weight-bold">
						Date of manufacture {product?.updatedAt.substring(0, 10)}
					</p>
					<h3 className="display-6 font-weight-bold my-4">${product?.price}</h3>
					<p className="lead">{product?.description}</p>
					<button
						className="btn btn-outline-dark px-4 py-2"
						onClick={handleAddCart}>
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
