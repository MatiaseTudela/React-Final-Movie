import { Link, Route } from "react-router-dom";

import DetalleProducto from "./DetalleProducto";

function Productos() {
	const productsArray = [{
		id: 1,
		name: "Soup Campbells Split Pea And Ham",
		image: "http://dummyimage.com/205x100.png/ff4444/ffffff"
	}, {
		id: 2,
		name: "Zucchini - Green",
		image: "http://dummyimage.com/106x100.png/ff4444/ffffff"
	}, {
		id: 3,
		name: "Vegetable - Base",
		image: "http://dummyimage.com/120x100.png/ff4444/ffffff"
	}, {
		id: 4,
		name: "Pasta - Penne, Rigate, Dry",
		image: "http://dummyimage.com/148x100.png/ff4444/ffffff"
	}, {
		id: 5,
		name: "Wine - Pinot Noir Latour",
		image: "http://dummyimage.com/248x100.png/ff4444/ffffff"
	}, {
		id: 6,
		name: "Truffle Shells - White Chocolate",
		image: "http://dummyimage.com/174x100.png/5fa2dd/ffffff"
	}, {
		id: 7,
		name: "Sorrel - Fresh",
		image: "http://dummyimage.com/226x100.png/dddddd/000000"
	}, {
		id: 8,
		name: "Wine - Black Tower Qr",
		image: "http://dummyimage.com/209x100.png/ff4444/ffffff"
	}, {
		id: 9,
		name: "Energy Drink",
		image: "http://dummyimage.com/199x100.png/5fa2dd/ffffff"
	}, {
		id: 10,
		name: "Rum - White, Gg White",
		image: "http://dummyimage.com/190x100.png/ff4444/ffffff"
	}, {
		id: 11,
		name: "Quail - Jumbo Boneless",
		image: "http://dummyimage.com/246x100.png/dddddd/000000"
	}, {
		id: 12,
		name: "Arizona - Plum Green Tea",
		image: "http://dummyimage.com/159x100.png/ff4444/ffffff"
	}, {
		id: 13,
		name: "Ice Cream Bar - Rolo Cone",
		image: "http://dummyimage.com/182x100.png/ff4444/ffffff"
	}, {
		id: 14,
		name: "Pork - Back Ribs",
		image: "http://dummyimage.com/125x100.png/dddddd/000000"
	}, {
		id: 15,
		name: "Soup - Base Broth Beef",
		image: "http://dummyimage.com/230x100.png/cc0000/ffffff"
	}];

	return (
		<>
			<h2>Sección Productos</h2>
			<ol>
				{
					productsArray.map(oneProduct => <li> <Link to={"/products/" + oneProduct.id} > {oneProduct.name} </Link> </li>)
				}
			</ol>

			<Route path="/products/:id" render={(props) => <DetalleProducto productsDB={productsArray} {...props} /> } />
		</>
	)
}

export default Productos;