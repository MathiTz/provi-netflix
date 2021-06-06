import React from "react";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Home } from "./pages/Home";

function App() {
	return (
		<div className="app">
			<Home />
			<ToastContainer />
		</div>
	);
}

export default App;
