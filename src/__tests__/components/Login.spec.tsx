import React from "react";
import {
	render,
	fireEvent,
	waitFor,
	screen,
	waitForElementToBeRemoved,
} from "@testing-library/react";
import { Login } from "../../pages/Login";

const mockedHistoryPush = jest.fn();
const mockedSignIn = jest.fn();

jest.mock("react-router-dom", () => {
	return {
		useHistory: () => ({
			push: mockedHistoryPush,
		}),
		Link: ({ children }: { children: React.ReactNode }) => children,
		Location: "/",
	};
});

jest.mock("../../hook", () => {
	return {
		useAuth: () => ({
			signIn: mockedSignIn,
		}),
	};
});

describe("SignIn Page", () => {
	beforeEach(() => {
		mockedHistoryPush.mockClear();
	});

	// it("should be able to sign in", async () => {
	// 	const { getByPlaceholderText, getByText } = render(<Login />);

	// 	const emailField = getByPlaceholderText("E-mail");
	// 	const passwordField = getByPlaceholderText("Senha");
	// 	const buttonElement = getByText("Entrar");

	// 	fireEvent.change(emailField, {
	// 		target: { value: "johndoe@example.com" },
	// 	});

	// 	fireEvent.change(passwordField, {
	// 		target: { value: "123456" },
	// 	});

	// 	fireEvent.click(buttonElement);

	// 	await waitForElementToBeRemoved(() => getByText("Entrar"));
	// });

	it("should not be able to sign in with invalid credentials", async () => {
		const { getByPlaceholderText, getByText } = render(<Login />);

		const emailField = getByPlaceholderText("E-mail");
		const passwordField = getByPlaceholderText("Senha");
		const buttonElement = getByText("Entrar");

		fireEvent.change(emailField, {
			target: { value: "not-valid-email" },
		});

		fireEvent.change(passwordField, {
			target: { value: "123456" },
		});

		fireEvent.click(buttonElement);

		await waitFor(() => {
			expect(mockedHistoryPush).not.toHaveBeenCalled();
		});
	});
});
