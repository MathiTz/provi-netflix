import { url } from "inspector";
import styled from "styled-components";

interface BannerProps {
	image?: string;
}

export const HeaderBanner = styled.header<BannerProps>`
	background-image: url(${(props) => props.image});
	background-size: "cover";
	background-position: "center center";
	color: #fff;
	object-fit: contain;
	height: 448px;

	.banner__contents {
		margin-left: 30px;
		padding-top: 140px;
		height: 190px;

		.banner__title {
			font-size: 3rem;
			font-weight: 800;
			padding-bottom: 0.3rem;
		}

		.banner__description {
			width: 45rem;
			font-weight: bold;
			line-height: 1.6;
			padding-top: 1rem;
			font-size: 0.8rem;
			max-width: 360px;
			height: 80px;
		}
	}

	.banner__button {
		cursor: pointer;
		color: #fff;
		outline: none;
		border: 0;
		font-weight: 700;
		border-radius: 0.2vw;
		padding: 0.5rem 2rem;
		margin-right: 1rem;
		background-color: rgba(51, 51, 51, 0.5);

		&:hover {
			color: #000;
			background-color: #e6e6e6;
			transition: all 0.2s;
		}
	}

	.banner--fadeBottom {
		height: 7.4rem;
		background-image: linear-gradient(
			180deg,
			transparent,
			rgba(37, 37, 37, 0.61),
			#111
		);
	}
`;
