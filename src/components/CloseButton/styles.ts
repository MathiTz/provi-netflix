import styled from "styled-components";

export const Button = styled.button`
	cursor: pointer;
	border: 0;
	float: right;
	padding: 20px;
	margin-right: 10px;
	background: transparent;

	&:hover {
		filter: brightness(95);
	}

	.button__close--first,
	.button__close--second {
		display: block;
		width: 20px;
		height: 5px;
		background-color: #ccc;
	}

	.button__close--first {
		transform: rotate(-45deg) translateY(4px) translateX(-4px);
	}

	.button__close--second {
		transform: rotate(45deg);
	}
`;
