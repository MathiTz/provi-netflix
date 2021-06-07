import { renderHook, act } from "@testing-library/react-hooks";
import { useAuth, AuthProvider } from "../../hook";

describe("Auth hook", () => {
	// it("should be able to signin", async () => {
	// 	const apiResponse = {
	// 		user: {
	// 			id: "user-123",
	// 			email: "johndoe@example.com.br",
	// 		},
	// 	};

	// 	const setItemSpy = jest.spyOn(Storage.prototype, "setItem");

	// 	const { result, waitForNextUpdate } = renderHook(() => useAuth(), {
	// 		wrapper: AuthProvider,
	// 	});

	// 	result.current.logIn({
	// 		email: "johndoe@example.com.br",
	// 		password: "123456",
	// 	});

	// 	await waitForNextUpdate();

	// 	expect(setItemSpy).toHaveBeenCalledWith(
	// 		"@proviTest:user",
	// 		JSON.stringify(apiResponse.user)
	// 	);

	// 	expect(result.current.user.email).toEqual("johndoe@example.com.br");
	// });

	it("should restore saved data from storage when auth inits", () => {
		jest.spyOn(Storage.prototype, "getItem").mockImplementation((key) => {
			switch (key) {
				case "@proviTest:user":
					return JSON.stringify({
						id: "user-123",
						email: "johndoe@example.com.br",
					});
				default:
					return null;
			}
		});

		const { result } = renderHook(() => useAuth(), {
			wrapper: AuthProvider,
		});

		expect(result.current.user.email).toEqual("johndoe@example.com.br");
	});

	it("should be able to sign out", async () => {
		jest.spyOn(Storage.prototype, "getItem").mockImplementation((key) => {
			switch (key) {
				case "@proviTest:user":
					return JSON.stringify({
						id: "user-123",
						name: "John Doe",
						email: "johndoe@example.com.br",
					});
				default:
					return null;
			}
		});

		const removeItemSpy = jest.spyOn(Storage.prototype, "removeItem");

		const { result } = renderHook(() => useAuth(), {
			wrapper: AuthProvider,
		});

		act(() => {
			result.current.signOut();
		});

		expect(removeItemSpy).toHaveBeenCalledTimes(1);
		expect(result.current.user).toBeUndefined();
	});
});
