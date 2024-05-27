"use client";
import styles from "./SignupForm.module.scss";
import { useState } from "react";
import { archivo } from "@/app/fonts";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { login } from "@/app/store/loginSlice/loginSlice";
import { signupApi } from "@/entities/session/api";

export function SignupForm() {
	const [loginInfo, setLogin] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const [name, setName] = useState<string>("");
	const router = useRouter();
	const dispatch = useDispatch();

	async function handleAddSubmit() {
		const response = await signupApi(loginInfo, password, name);

		const { accessToken } = await response.json();
		const responseStatus = response.status;
		if (responseStatus === 200) {
			dispatch(login(accessToken));
			router.push("/profile");
		}
	}

	return (
		<div className={styles.loginFormBlock}>
			<h1 className={`${styles.loginFormTitle} ${archivo.className}`}>
				Registration
			</h1>

			<form
				onSubmit={async (e) => {
					e.preventDefault();
					handleAddSubmit();
				}}
				className={styles.formBlock}
			>
				<input
					onChange={(e) => setLogin(e.target.value)}
					type="text"
					id="userLogin"
					name="userLogin"
					placeholder="@login"
					className={styles.formLoginInput}
				/>

				<input
					onChange={(e) => setPassword(e.target.value)}
					type="text"
					id="userPassword"
					name="userPassword"
					placeholder="@password"
					className={styles.formPasswordInput}
				/>

				<input
					onChange={(e) => setName(e.target.value)}
					type="text"
					id="userName"
					name="userName"
					placeholder="@name"
					className={styles.formNameInput}
				/>

				<button
					className={styles.loginButton}
					type="submit"
				>
					Sign Up
				</button>
			</form>
		</div>
	);
}
