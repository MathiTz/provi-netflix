import styled from "styled-components";

interface NavContainerProps {
	showFade: boolean;
}

export const NavContainer = styled.nav<NavContainerProps>`
	position: fixed;
	top: 0;
	width: 100%;
	padding: 20px;
	height: 30px;
	z-index: 1;

	transition-timing-function: ease-in;
	transition: all 0.5s;
	background-color: ${(props) => props.showFade && "#111"};

	img {
		cursor: pointer;
	}

	.nav__logo--home {
		top: 1rem;
		left: 4.5rem;
		position: fixed;
		transform: scale(2.2);
		width: 80px;
		object-fit: contain;
	}

	.nav__logo {
		position: fixed;
		top: 10px;
		left: 20px;
		width: 80px;
		object-fit: contain;
	}

	.nav__avatar {
		position: fixed;
		right: 20px;
		width: 30px;
		object-fit: contain;
	}
`;
