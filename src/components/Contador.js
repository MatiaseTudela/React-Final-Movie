import { Component } from 'react';

class Contador extends Component {
	constructor() {
		super();
		this.state = {
			valorInicial: 0,
			developer: "Javi"
		}
	}

	componentDidMount() {
		console.log("Se montó el componente");
		fetch("https://api.themoviedb.org/3/movie/550?api_key=4c7f11a9b28ba3482b9439689d0ee634")
			.then(response => response.json())
			.then(data => {
				console.log(data);
			})
		
	}
	
	componentDidUpdate() {
		console.log("Se actualizó el componente");
	}

	// componentWillUnmount() {
	// 	alert("Realmente te querés ir");
	// 	console.log("Se desmontó el componente Contador");
	// }

	incrementar() {
		this.setState({
			valorInicial: this.state.valorInicial + 1
		});
	}

	decrementar() {
		if (this.state.valorInicial > 0) {
			this.setState({
				valorInicial: this.state.valorInicial - 1
			});
		}
	}

	cambiarDeveloper(event) {
		if (event.target.value !== "") {
			this.setState({
				developer: event.target.value
			})
		}
	}

	cambiarClase() {
		const elP = document.querySelector("#special-p");
		elP.classList.toggle("special");
	}

	render () {
		return (
			<>
				<h2>Componente Contador</h2>
				<p id="special-p" className="special">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus quibusdam esse inventore officiis odio corrupti temporibus praesentium ipsa nisi quia error earum possimus rerum, eaque adipisci? Odio iusto natus quo. </p>

				<button onClick={ this.cambiarClase }>Cambiar clase</button>

				<hr />
				<h3> { this.state.valorInicial } </h3>
				<button onClick={ () => this.incrementar() }>Incrementar</button>
				<button onClick={ () => this.decrementar() }>Decrementar</button>
				<hr />
				<input type="text" onInput={ (event) => this.cambiarDeveloper(event) } />
				<p><em>El desarrollador se llama { this.state.developer }</em></p>
			</>
		)
	}
}

export default Contador;