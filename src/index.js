import React from 'react';
import ReactDOM from 'react-dom';

import "./index.css";

import { BrowserRouter } from "react-router-dom/";

// Componente Principal
import App from './App';

ReactDOM.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>
, document.getElementById('root'));
