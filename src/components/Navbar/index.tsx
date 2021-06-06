import { useEffect, useState } from "react";
import "./styles.css";

function Navbar() {
	const [show, handleShow] = useState(false);

	useEffect(() => {
		window.addEventListener("scroll", () => {
			window.scrollY > 100 ? handleShow(true) : handleShow(false);
		});
	}, []);

	return (
		<nav className={`nav ${show && "nav__black"}`}>
			<img
				className="nav__logo"
				src="https://marcas-logos.net/wp-content/uploads/2019/11/Netflix-Logo-600x338.png"
				alt="Netflix Logo"
			/>
			<img
				className="nav__avatar"
				src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
				alt="Netflix Avatar"
			/>
		</nav>
	);
}

export { Navbar };
