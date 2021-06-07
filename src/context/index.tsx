import { createContext, useCallback, useContext, useState } from "react";
import { api } from "../service/api";
import firebase from "firebase";

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
		// const token = localStorage.getItem("@proviTest:token");
		const user = localStorage.getItem("@proviTest:user");

		if (user) {
			// api.defaults.headers.authorization = `Bearer ${token}`;

			return { user: JSON.parse(user) };
		}

		return {} as AuthState;
	});

	const logIn = useCallback(
		async ({ email, password }) => {
			const usersCollection = db.collection("users");
			const hashedPassword = btoa(password);
			const user = await usersCollection.where("email", "==", email).get();
			const userId = user.docs[0].id;

			const { passwordHashed } = user.docs[0].data();
			if (passwordHashed === hashedPassword) {
				setData({ user: { email, id: userId } });
			} else {
				throw new Error("Email/Password incorret");
			}
		},
		[db]
	);

	const signUp = useCallback(
		async ({ email, password }) => {
			const usersCollection = db.collection("users");
			const hashedPassword = btoa(password);
			const userExists = await usersCollection
				.where("email", "==", email)
				.get();

			if (userExists.docs) {
				throw new Error("User with same email already exists");
			}

			const res = await usersCollection.add({
				email,
				passwordHashed: hashedPassword,
			});

			setData({ user: { email, id: res.id } });
		},
		[db]
	);

	const signOut = useCallback(() => {
		localStorage.removeItem("@proviTest:user");

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
