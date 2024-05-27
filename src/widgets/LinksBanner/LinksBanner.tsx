import styles from "./LinksBanner.module.scss";
import Link from "next/link";
import { DiscordSvg } from "@/shared/ui/icons/DiscordSvg";
import { TwitterSvg } from "@/shared/ui/icons/TwitterSvg";
import { InstagramSvg } from "@/shared/ui/icons/InstagramSvg";
import { TelegramSvg } from "@/shared/ui/icons/TelegramSvg";
import { FacebookSvg } from "@/shared/ui/icons/FacebookSvg";

export function LinksBanner() {
	return (
		<div className={styles.linksBannerBlock}>
			<h2 className={styles.linksBannerTitle}>Join our community</h2>
			<p className={styles.linksBannerText}>
				Iste animi consectetur dicta dolorem
			</p>
			<div className={styles.linksBannerLinks}>
				<Link
					href={"/"}
					className={styles.linkBlock}
				>
					<DiscordSvg />
				</Link>
				<Link
					href={"/"}
					className={styles.linkBlock}
				>
					<TwitterSvg />
				</Link>
				<Link
					href={"/"}
					className={styles.linkBlock}
				>
					<InstagramSvg />
				</Link>
				<Link
					href={"/"}
					className={styles.linkBlock}
				>
					<TelegramSvg />
				</Link>
				<Link
					href={"/"}
					className={styles.linkBlock}
				>
					<FacebookSvg />
				</Link>
			</div>
		</div>
	);
}
