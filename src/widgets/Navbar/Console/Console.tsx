import styles from "./Console.module.scss";
import Image from "next/image";
import Link from "next/link";

export function Console() {
	return (
		<Link
			href="/"
			className={styles.consoleBlock}
		>
			<Image
				src="/icons/console.svg"
				alt="console"
				width={24}
				height={24}
			/>
		</Link>
	);
}
