import Image404 from "../assets/error-404.png";

function Error404 () {
	return (
		<>
			<h1>Error 404 : Not found</h1>
			<img src={Image404} style={{ width: "200px" }} alt="Error 404"/>
		</>
	)
}

export default Error404;