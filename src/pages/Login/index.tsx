import { useState } from "react";
import { Navbar } from "../../components/Navbar";
import { SubmitHandler, useForm } from "react-hook-form";

import { FadeBottom, FormInput, FormContainer, LoginContainer } from "./styles";
import { useAuth } from "../../context";
import { toastMessages } from "../../utils";

interface IFormInput {
	email: string;
	password: string;
	confirmPassword: string;
}

function Login() {
	const [isLoginVisible, setIsLoginVisible] = useState(true);
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<IFormInput>();
	const { logIn, signUp } = useAuth();

	const onSubmit: SubmitHandler<IFormInput> = async (data) => {
		if (isLoginVisible) {
			try {
				await logIn(data);
			} catch (error) {
				toastMessages.error(error.message);
			}
		} else {
			try {
				await signUp(data);
			} catch (error) {
				toastMessages.error(error.message);
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
						<h1>Entrar</h1>

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
							{...register("password", { required: true })}
						/>
						{errors.password?.type === "required" && (
							<p className="errors__form">Senha é requerido</p>
						)}

						<button type="submit">Entrar</button>

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
							{...register("password", { required: true })}
						/>
						{errors.password?.type === "required" && (
							<p className="errors__form">Senha é requerida</p>
						)}

						<input
							type="password"
							placeholder="Confirmar Senha"
							{...register("confirmPassword", { required: true })}
						/>
						{errors.confirmPassword && (
							<p className="errors__form">{errors.confirmPassword.message}</p>
						)}

						<button type="submit">Cadastrar</button>

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
