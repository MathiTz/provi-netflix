import styled from "styled-components";

export const LoaderSpinner = styled.span`
	display: block;
	margin: 0 auto;
	border: 8px solid #f3f3f3;
	border-left-color: #000309;
	border-radius: 50%;
	width: 20px;
	height: 20px;
	animation: spin 2s linear infinite;

	@keyframes spin {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
`;
