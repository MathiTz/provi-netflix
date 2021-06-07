import styled from "styled-components";

export const MenuContainer = styled.div`
	position: absolute;
	right: 50px;
	top: 65px;
	border-radius: 5px;

	width: 80px;
	height: 50px;
	background: #001100;

	color: #fff;
	text-align: center;

	display: flex;
	align-items: center;
	justify-content: center;

	& span {
		cursor: pointer;
		transition: 0.2s filter;

		&:hover {
			filter: brightness(0.8);
		}
	}
`;
