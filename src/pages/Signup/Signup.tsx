import styles from "./Signup.module.scss";
import { SignupForm } from "@/widgets/SignupPage/SignupForm";

export function Signup() {
	return (
		<div className={styles.signupPage}>
			<SignupForm />
		</div>
	);
}
