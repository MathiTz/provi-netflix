import { createContext, useCallback, useContext, useState } from "react";
import firebase from "firebase";
import { toastMessages } from "../utils";

interface AuthProviderProps {
	children: React.ReactNode;
}

interface User {
	id: string;
	email: string;
}

interface AuthState {
	user: User;
}

interface CredentialsProps {
	email: string;
	password: string;
}

interface AuthContextData {
	user: User;
	logIn(credentials: CredentialsProps): Promise<void>;
	signUp(credentials: CredentialsProps): Promise<void>;
	signOut(): void;
}

const AuthContext = createContext({} as AuthContextData);

function AuthProvider({ children }: AuthProviderProps) {
	const db = firebase.firestore();
	const [data, setData] = useState<AuthState>(() => {
		const user = localStorage.getItem("@proviTest:user");

		if (user) {
			return { user: JSON.parse(user) };
		}

		return {} as AuthState;
	});

	const logIn = useCallback(
		async ({ email, password }: CredentialsProps) => {
			const usersCollection = db.collection("users");
			const hashedPassword = btoa(password);
			const user = await usersCollection.where("email", "==", email).get();

			if (user.empty) {
				throw new Error("Email not register");
			}

			const userId = user.docs[0].id;
			const { passwordHashed } = user.docs[0].data();
			if (passwordHashed === hashedPassword) {
				localStorage.setItem("@proviTest:user", JSON.stringify(user));
				setData({ user: { email, id: userId } });
			} else {
				throw new Error("Email/Password incorrect");
			}
		},
		[db]
	);

	const signUp = useCallback(
		async ({ email, password }: CredentialsProps) => {
			const usersCollection = db.collection("users");
			const hashedPassword = btoa(password);
			const userExists = await usersCollection
				.where("email", "==", email)
				.get();

			if (!userExists.empty) {
				throw new Error("User with same email already exists");
			}

			const res = await usersCollection.add({
				email,
				passwordHashed: hashedPassword,
			});

			const user = {
				email,
				id: res.id,
			};

			localStorage.setItem("@proviTest:user", JSON.stringify(user));

			setData({ user });
		},
		[db]
	);

	const signOut = useCallback(() => {
		localStorage.removeItem("@proviTest:user");
		toastMessages.success("See you next time!");

		setData({} as AuthState);
	}, []);

	return (
		<AuthContext.Provider value={{ user: data.user, logIn, signUp, signOut }}>
			{children}
		</AuthContext.Provider>
	);
}

function useAuth() {
	const context = useContext(AuthContext);

	return context;
}

export { AuthProvider, useAuth };
