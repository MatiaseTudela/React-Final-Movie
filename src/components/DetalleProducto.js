function DetalleProducto(props) {
	const productID = Number(props.match.params.id);

	let theProduct = props.productsDB.filter(oneProduct => oneProduct.id === productID);

	theProduct = theProduct[0];

	return (
		<>
			<h3>Detalle del producto: {theProduct.name}</h3>
			<img src={theProduct.image} alt="" />
		</>
	)
}

export default DetalleProducto;