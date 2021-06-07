import styled from "styled-components";

export const LoginContainer = styled.main`
	height: 100vh;
	width: 100%;
	background-image: url("https://assets.nflxext.com/ffe/siteui/vlv3/8dc3f88b-a96a-4d8a-af9a-a69e6f3b2506/5c809235-fe67-4a98-af86-95a0a5a51e74/BR-pt-20210524-popsignuptwoweeks-perspective_alpha_website_small.jpg");
	background-size: cover;
	background-position: center center;

	display: flex;
	align-items: center;
	justify-content: center;
`;

export const FormContainer = styled.div`
	z-index: 10;
	background-color: rgba(0, 0, 0, 0.75);
	border-radius: 4px;
	margin: 0;
	padding: 20px 0 30px;
	width: 40vw;

	height: 480px;
	display: flex;
	align-items: center;
	justify-content: center;

	& h1 {
		color: #fff;
	}
`;

export const FormInput = styled.form`
	width: 100%;
	padding: 10px 60px;
	display: flex;
	flex-direction: column;
	justify-content: center;

	& input {
		margin: 10px 0;
		border-radius: 4px;
		border: 0;
		color: #fff;
		height: 35px;
		line-height: 50px;
		padding: 16px 20px;
		background: #333;
		font-size: 16px;
	}

	& button {
		border: 0;
		margin-top: 15px;
		border-radius: 5px;
		color: #fff;
		font-weight: bold;
		background: #e50914;
		box-shadow: 0 1px 0 rgb(0 0 0 / 55%);
		text-decoration: none;
		vertical-align: middle;
		cursor: pointer;
		letter-spacing: 0.1px;
		user-select: none;
		text-align: center;
		display: inline-block;
		font-size: 13px;
		padding: 12px 2em;
		min-width: 98px;
		min-height: 50px;
		padding: 0 1em;
		width: auto;
		line-height: 1em;
		transition: filter 0.2s;

		&:hover {
			filter: brightness(0.8);
		}
	}

	.text__form--toggle {
		color: #fff;
		margin-top: 15px;

		& span {
			cursor: pointer;
			transition: 0.2s filter;

			&:hover {
				filter: brightness(0.8);
			}
		}
	}

	.errors__form {
		font-size: 0.8rem;
		color: #e50914;
		margin-top: 5px;
	}
`;

export const FadeBottom = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
	background-image: linear-gradient(
		180deg,
		#111,
		rgba(37, 37, 37, 0.61),
		rgba(37, 37, 37, 0.31)
	);
`;
