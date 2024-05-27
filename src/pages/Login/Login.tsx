// "use client";
import styles from "./Login.module.scss";
import { LoginForm } from "@/widgets/LoginPage/LoginForm";
// import { useCookies } from "react-cookie";

export function Login() {
	// const [cookies, setCookies] = useCookies();

	return (
		<div className={styles.loginPage}>
			<LoginForm />
			{/* <button
        onClick={() => {
          console.log(document.cookie);
        }}
      >
        Watch cookies
      </button> */}
		</div>
	);
}
