import { Route, Switch } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import DetalleMovies from './Pages/DetalleMovies';
import Error404 from "./components/Error404";
import Footer from "./components/Footer";
import "./Css/bootstrap.min.css";
import ResultadoBusqueda from "./Pages/ResultadoBusqueda";


function App() {
	return (
		<div>
			<header>
				<Navbar 
					links={[
						{ text: "Movies Gratis", href: "/" },
						{ text: "", href: "/DetailMovie" },
						
					   

						
					]} 		
				/>
			</header>

			<hr />

			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/detail/:id" component={DetalleMovies} />
				<Route path="/search-results" component={ResultadoBusqueda}/>
		         <Route component={Error404} />
			</Switch>

			<hr />
			<Footer/>

		

			
		</div>
	);
}

export default App;