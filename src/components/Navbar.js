import { Link } from "react-router-dom";
import { Button } from "./Button";
import {Form} from "./Form";



function Navbar (props) {
	const enlaces = props.links;
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
		
	
			<div className="collapse navbar-collapse" id="navbarSupportedContent"></div>
		
			
			<ul className="navbar-nav me-auto mb-2 mb-lg-0" >
				{
					enlaces.map(function (unEnlace) {
						return <li className="nav-item"><Link className="navbar-brand"  to={unEnlace.href}> { unEnlace.text } </Link></li>
					})
				}
				<li>
				<Button>
				</Button>
             <Form>

			 </Form>

				
				</li>
			</ul>
		</nav>
		
	)
}

export default Navbar;