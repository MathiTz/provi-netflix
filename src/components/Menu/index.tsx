import { useAuth } from "../../context";
import { MenuContainer } from "./styles";

interface MenuProps {
	mouseEnter: () => void;
	mouseLeave: () => void;
}

function Menu({ mouseEnter, mouseLeave }: MenuProps) {
	const { signOut } = useAuth();

	return (
		<MenuContainer onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
			<span onClick={signOut}>Sair</span>
		</MenuContainer>
	);
}

export { Menu };
