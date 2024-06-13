import styles from "./UserInfoBlockSkeleton.module.scss";

export function UserInfoBlockSkeleton() {
	return (
		<div className={styles.userInfoBlock}>
			<div className={styles.userCover}></div>
			<div className={styles.userDataBlock}>
				<div className={styles.userCredentials}>
					<div className={styles.userImg}></div>
					<div className={styles.userNameId}>
						<span className={styles.userName}></span>
						<span className={styles.userId}></span>
					</div>
				</div>
				<button className={styles.shareButton}></button>
			</div>
		</div>
	);
}
