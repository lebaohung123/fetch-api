export interface Product {
	quantity: number;
	id: number;
	title: string;
	price: number;
	description: number;
	images: Array<string>;
	creationAt: string;
	updatedAt: string;
	category: Category;
}

export interface Category {
	id: number;
	name: string;
	image: string;
	creationAt: string;
	updateAt: string;
}

export interface RootState {
	cart: CartState;
}

export interface CartState {
	listCart: Product[];
	quantity: number;
}
