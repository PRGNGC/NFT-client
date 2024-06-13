import styles from "./Settings.module.scss";
import { UserInfoSettings } from "@/widgets/UserInfoSettings";

export function Settings() {
	return (
		<div className={styles.settingsPage}>
			<UserInfoSettings />
		</div>
	);
}
