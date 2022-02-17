
import "../Css/Nav.css";
import { useState } from "react";
import { Link , useHistory} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';



function Navbar (props) {
	const enlaces = props.links;

	let [ alert , setAlert ]= useState(false)

	let history=useHistory();

	let closeHandler=()=>{
		setAlert(false)
	}


	let submitHandler=(e)=>{
		e.preventDefault();
		let word=e.currentTarget.search.value
		
		if(word.length>=3){
		history.push(`/search-results?search=${word}`)
		setAlert(false)
		e.currentTarget.reset()
		}else{
			setAlert(true)
		}
		
}
	return (
		<>
		
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
		         <Link className="navbar-brand"to="/"></Link>
				{enlaces.map(function (unEnlace) {
				return <li className="nav-item"><Link className="navbar-brand"  to={unEnlace.href}> { unEnlace.text } </Link></li>
					})
				}
	              <form className="d-flex" onSubmit={submitHandler}>
					<input className="form-control me-2" type="search"  name="search" placeholder="Buscar Pelicula" aria-label="Search"/>
				    <button className="btn btn-outline-info" type="submit">Buscar</button>
					</form>
					</nav>
		    {alert?
		    <div className="alert alert-primary d-flex justify-content-center align-items-center" id="alert">
			<span className="me-3">Ingresa una palabra valida</span>
			<FontAwesomeIcon icon={faTimesCircle} size="md" onClick={closeHandler}/>
		</div>
		:""} 

	
</>
)
}
export default Navbar;