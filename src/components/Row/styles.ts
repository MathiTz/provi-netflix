import styled from "styled-components";

interface ArrowProps {
	largeImg: boolean;
}

export const RowMoviesContainer = styled.main`
	color: #fff;
	margin-left: 20px;

	.row__arrow--left {
		cursor: pointer;
		position: absolute;
		display: block;
		width: 20px;
		height: 5px;
		background-color: #ccc;
		transform: rotate(45deg);
		transition: all 0.2s;

		&::after {
			content: "";
			cursor: pointer;
			position: absolute;
			display: block;
			width: 20px;
			height: 5px;
			background-color: #ccc;
			transition: all 0.2s;
			transform: rotate(90deg) translate(-8px, 8px);
		}
	}

	.row__arrow--right {
		cursor: pointer;
		position: absolute;
		display: block;
		width: 20px;
		height: 5px;
		background-color: #ccc;
		transform: rotate(225deg);
		transition: all 0.2s;

		&::after {
			content: "";
			cursor: pointer;
			position: absolute;
			display: block;
			width: 20px;
			height: 5px;
			background-color: #ccc;
			transition: all 0.2s;
			transform: rotate(90deg) translate(-8px, 8px);
		}
	}

	.row__arrow--left:hover,
	.row__arrow--right:hover {
		filter: brightness(0.8);
	}
`;

export const RowScrollable = styled.div`
	display: flex;
	overflow-y: hidden;
	overflow-x: scroll;
	padding: 20px;
	transition: 0.45s all;
	scroll-behavior: smooth;

	&::-webkit-scrollbar {
		display: none;
	}

	.row__poster {
		object-fit: contain;
		width: 100%;
		max-height: 100px;
		margin-right: 15px;
		padding: 0 10px;
		transition: transform 450ms;
	}

	.row__poster:hover {
		transform: scale(1.08);
	}

	.row__posterLarge {
		max-height: 250px;
	}

	.row__poster:hover {
		transform: scale(1.09);
	}
`;

export const ArrowLeft = styled.span<ArrowProps>`
	z-index: 10;
	margin-top: ${(props) => (props.largeImg ? "8.7rem" : "3rem")};
	left: 20px;
`;

export const ArrowRight = styled.span<ArrowProps>`
	margin-top: ${(props) => (props.largeImg ? "8rem" : "2.5rem")};
	right: 20px;
`;
