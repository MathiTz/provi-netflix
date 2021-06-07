import React from "react";
import { ToastContainer } from "react-toastify";
import { BrowserRouter as Router } from "react-router-dom";
import { GlobalStyle } from "./styles/global";
import { Routes } from "./routes";

/** CSS IMPORTS */
import "react-toastify/dist/ReactToastify.css";
import { AuthProvider } from "./context";

function App() {
	return (
		<Router>
			<AuthProvider>
				<Routes />
				<ToastContainer />
				<GlobalStyle />
			</AuthProvider>
		</Router>
	);
}

export default App;
