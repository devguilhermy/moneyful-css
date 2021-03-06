import { createGlobalStyle } from 'styled-components';

export const colors = {
    red: '#e52e4d',
    blue: '#5429cc',
    green: '#33cc95',
};

export const GlobalStyle = createGlobalStyle`
	:root {
		--background: #f0f2f5;
		--red: #e52e4d;
		--blue: #5429cc;
		--green: #33cc95;
		--blue-light: #6933ff;
		--text-title: #363f5f;
		--text-body: #969cb3;
		--shape: #ffffff;
		--input-background: #e7e9ee;
		--input-border: #d7d7d7;
		--input-border-lighter: #a7a7a7;
	}

	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	html {
		@media (max-width: 1080px){
			font-size: 93.75%;
		}
		
		@media (max-width: 1080px){
			font-size: 87.5%;
		}
	}

	body {
		background-color: var(--background);
		-webkit-font-smoothing: antialiased;
		height: 100vh;
	}

	body, input, textarea, button {
		font-family: "Poppins", "Helvetica Neue", sans-serif;
		font-weight: 400;
	}

	h1, h2, h3, h4, h5, h6, strong {
		font-weight: 600;
	}

	button { 
		cursor: pointer;
	}

	input::placeholder {
		color: var(--text-body)}

	[disabled] {
		opacity: 0.6;
		cursor: not-allowed;
	}

	.react-modal-overlay {
		background: rgba(0,0,0,0.5);

		position: fixed;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;

		display: flex;
		align-items: center;
		justify-content: center;
	}

	.react-modal-content {
		position: relative;
		width: 100%;
		max-width: 576px;
		padding: 3rem;
		background: var(--shape);
		border-radius: 0.5rem;
	}

	.react-close-modal {
		position: absolute;
		top: 1.5rem;
		right: 1.5rem;
		border: 0;
		background: transparent;

		transition: filter 0.2s;

		&:hover, &:focus {
			filter: brightness(0.7)
		}
	}
`;
