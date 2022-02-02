import { Route, Switch } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import Productos from "./components/Productos";
import Contador from "./components/Contador";
import Error404 from "./components/Error404";
import Footer from "./components/Footer";
import "./Css/bootstrap.min.css";

function App() {
	return (
		<div>
			<header>
				<Navbar 
					links={[
						{ text: "Inicio", href: "/" },
					    { text: "Productos", href: "/products"},
				        { text: "Contador", href: "/contador"},

						
					]} 		
				/>
			</header>

			<hr />

			<Switch>
				<Route exact path="/" component={Home} />
		        <Route path="/products" component={Productos} />
		        <Route path="/contador" component={Contador} />
				<Route component={Error404} />
			</Switch>

			<hr />
			<Footer>

			</Footer>

			
		</div>
	);
}

export default App;