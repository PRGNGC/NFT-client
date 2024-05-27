import styles from "./ItemCardSkeleton.module.scss";
import Link from "next/link";

export function ItemCardSkeleton() {
	return (
		<Link href="/marketplace/characters">
			<div className={styles.itemCardSkeleton}>
				<div className={styles.skeletonImg}>
					<div className={styles.addItemLink}>
						<svg
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<rect
								x="11"
								y="6"
								width="2"
								height="12"
								rx="1"
								fill="white"
							/>
							<rect
								x="6"
								y="13"
								width="2"
								height="12"
								rx="1"
								transform="rotate(-90 6 13)"
								fill="white"
							/>
						</svg>
					</div>
				</div>
				<div className={styles.skeletonDesc}>
					<div className={styles.descFirstRow}>
						<span className={styles.firstRowFirstItem}></span>
						<span className={styles.firstRowSecondItem}></span>
					</div>
					<div className={styles.descSecondRow}>
						<span className={styles.secondRowFirstItem}></span>
						<span className={styles.secondRowSecondItem}></span>
					</div>
				</div>
			</div>
		</Link>
	);
}
