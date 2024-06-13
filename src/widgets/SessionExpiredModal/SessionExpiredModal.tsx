import styles from "./SessionExpiredModal.module.scss";
import { RedCrossSvg } from "@/shared/ui/icons/RedCrossSvg";
import Link from "next/link";
import { CrossSvg } from "@/shared/ui/icons/CrossSvg";
import { Dispatch, SetStateAction } from "react";

interface ISessionExpiredModal {
	onClose: Dispatch<SetStateAction<boolean>>;
}

export function SessionExpiredModal({ onClose }: ISessionExpiredModal) {
	return (
		<div className={styles.modalWrapper}>
			<div className={styles.modalBlock}>
				<span
					onClick={() => onClose(false)}
					className={styles.closeModalBtn}
				>
					<CrossSvg />
				</span>
				<div className={styles.sessionExpiredContainer}>
					<div className={styles.statusSign}>
						<RedCrossSvg />
					</div>
					<h1 className={styles.sessionExpiredTitle}>"Error happened!"</h1>
					<p className={styles.sessionExpiredText}>
						"Your session expired! You need to login again!"
					</p>
					<Link
						href="/login"
						className={styles.sessionExpiredBtn}
					>
						Go to login page
					</Link>
				</div>
			</div>
		</div>
	);
}
