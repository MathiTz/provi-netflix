import { useAuth } from "../../context";
import { MenuContainer } from "./styles";

function Menu() {
	const { signOut } = useAuth();

	return (
		<MenuContainer>
			<span onClick={signOut}>Sair</span>
		</MenuContainer>
	);
}

export { Menu };
