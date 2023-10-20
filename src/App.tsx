import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Cart from "./Cart/Cart";
import Home from "./Home/Home";
import Navbar from "./NavBar/Navbar";
import Product from "./Product/Product";
import Products from "./Products/Products";

function App() {
	return (
		<div className="App">
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/products" element={<Products />} />
				<Route path="/products/:id" element={<Product />} />
				<Route path="/cart" element={<Cart />} />
			</Routes>
		</div>
	);
}

export default App;
