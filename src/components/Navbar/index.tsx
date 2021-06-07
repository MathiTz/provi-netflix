import { useEffect, useState } from "react";
import { useAuth } from "../../context";
import { NavContainer } from "./styles";

function Navbar() {
	const [show, handleShow] = useState(false);
	const { user } = useAuth();

	useEffect(() => {
		window.addEventListener("scroll", () => {
			window.scrollY > 100 ? handleShow(true) : handleShow(false);
		});
	}, []);

	return (
		<NavContainer showFade={show}>
			<img
				className={!user ? "nav__logo--home" : "nav__logo"}
				src="https://marcas-logos.net/wp-content/uploads/2019/11/Netflix-Logo-600x338.png"
				alt="Netflix Logo"
			/>
			{user && (
				<img
					className="nav__avatar"
					src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
					alt="Netflix Avatar"
				/>
			)}
		</NavContainer>
	);
}

export { Navbar };
