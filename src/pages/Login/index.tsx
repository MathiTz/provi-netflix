import { useRef, useState } from "react";
import { Navbar } from "../../components/Navbar";
import { SubmitHandler, useForm } from "react-hook-form";

import { FadeBottom, FormInput, FormContainer, LoginContainer } from "./styles";
import { useAuth } from "../../hook";
import { toastMessages } from "../../utils";
import { Loader } from "../../components/Loading";

interface IFormInput {
	email: string;
	password: string;
	confirmPassword: string;
}

function Login() {
	const [isLoginVisible, setIsLoginVisible] = useState(true);
	const [loading, setLoading] = useState(false);
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
		watch,
	} = useForm<IFormInput>();
	const password = useRef({});
	password.current = watch("password", "");

	const { logIn, signUp } = useAuth();

	const onSubmit: SubmitHandler<IFormInput> = async (data) => {
		setLoading(true);

		if (isLoginVisible) {
			try {
				await logIn(data);
				toastMessages.success("Login successfully!");
			} catch (error) {
				toastMessages.error(error.message);
			} finally {
				setLoading(false);
			}
		} else {
			try {
				await signUp(data);
				toastMessages.success("Account created! Enjoy our movies :)");
			} catch (error) {
				toastMessages.error(error.message);
			} finally {
				setLoading(false);
			}
		}
	};

	const handleToggleLoginVisible = () => {
		reset();
		setIsLoginVisible(!isLoginVisible);
		return;
	};

	return (
		<LoginContainer>
			<Navbar />
			<FadeBottom />

			<FormContainer>
				{isLoginVisible ? (
					<FormInput onSubmit={handleSubmit(onSubmit)}>
						<h1>Login</h1>

						<input
							type="email"
							placeholder="E-mail"
							{...register("email", { required: true })}
						/>
						{errors.email?.type === "required" && (
							<p className="errors__form">Email é requerido</p>
						)}

						<input
							type="password"
							placeholder="Senha"
							{...register("password", { required: true })}
						/>
						{errors.password?.type === "required" && (
							<p className="errors__form">Senha é requerido</p>
						)}

						<button datatest-id="button-login" type="submit">
							{loading ? <Loader /> : "Entrar"}
						</button>

						<p
							className="text__form--toggle"
							onClick={handleToggleLoginVisible}
						>
							Não possui cadastro? <span>Cadastre agora!</span>
						</p>
					</FormInput>
				) : (
					<FormInput onSubmit={handleSubmit(onSubmit)}>
						<h1>Cadastrar</h1>

						<input
							type="email"
							placeholder="Email"
							{...register("email", { required: true })}
						/>
						{errors.email?.type === "required" && (
							<p className="errors__form">Email é requerido</p>
						)}

						<input
							type="password"
							placeholder="Senha"
							{...register("password", { required: true, minLength: 8 })}
						/>
						{errors.password && (
							<p className="errors__form">{errors.password.message}</p>
						)}

						<input
							type="password"
							placeholder="Confirmar Senha"
							{...register("confirmPassword", {
								required: true,
								validate: (value) =>
									value === password.current || "Senhas não conferem",
							})}
						/>
						{errors.confirmPassword && (
							<p className="errors__form">{errors.confirmPassword.message}</p>
						)}

						<button type="submit">{loading ? <Loader /> : "Cadastrar"}</button>

						<p
							className="text__form--toggle"
							onClick={handleToggleLoginVisible}
						>
							Ja possuo cadastro, <span>quero entrar.</span>
						</p>
					</FormInput>
				)}
			</FormContainer>
		</LoginContainer>
	);
}

export { Login };
