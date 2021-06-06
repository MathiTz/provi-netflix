import React from "react";
import { ToastContainer } from "react-toastify";
import { Home } from "./pages/Home";
import { GlobalStyle } from "./styles/global";

/** CSS IMPORTS */
import "react-toastify/dist/ReactToastify.css";

function App() {
	return (
		<div className="app">
			<Home />
			<ToastContainer />
			<GlobalStyle />
		</div>
	);
}

export default App;
