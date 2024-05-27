import styles from "./LinksSection.module.scss";
import Link from "next/link";
import { EthSvgImg } from "@/shared/ui/icons/EthSvgImg";

export function LinksSection() {
	return (
		<div className={styles.linksBlock}>
			<div className={styles.etherscanBlock}>
				<EthSvgImg />
				<Link
					href="/"
					className={styles.etherscanLink}
				>
					View on Etherscan
				</Link>
			</div>
			<div className={styles.metadataBlock}>
				<EthSvgImg />
				<Link
					href="/"
					className={styles.metadataLink}
				>
					View metadata
				</Link>
			</div>
		</div>
	);
}
