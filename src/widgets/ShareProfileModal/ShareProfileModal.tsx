import { Dispatch, SetStateAction } from "react";
import styles from "./ShareProfileModal.module.scss";
import { CrossSvg } from "@/shared/ui/icons/CrossSvg";
import { ChainSvg } from "@/shared/ui/icons/ChainSvg";
import { usePathname } from "next/navigation";
import { TwitterSvg } from "@/shared/ui/icons/TwitterSvg";
import { RedditSvg } from "@/shared/ui/icons/RedditSvg";
import { FacebookSvg } from "@/shared/ui/icons/FacebookSvg";
import { DiscordSvg } from "@/shared/ui/icons/DiscordSvg";
import { TelegramSvg } from "@/shared/ui/icons/TelegramSvg";
import Link from "next/link";

interface IShareProfileModal {
	onClose: Dispatch<SetStateAction<boolean>>;
}

export function ShareProfileModal({ onClose }: IShareProfileModal) {
	const pathname = usePathname();

	return (
		<div className={styles.modalWrapper}>
			<div className={styles.modalBlock}>
				<span
					className={styles.closeModalBtn}
					onClick={() => {
						onClose(false);
					}}
				>
					<CrossSvg />
				</span>
				<h2 className={styles.shareProfileTitle}>
					Share this profile with your social community
				</h2>
				<div className={styles.shareProfileLinks}>
					<Link
						href={"/"}
						className={styles.shareProfileLinkDiscord}
					>
						<DiscordSvg color="5866F2" />
					</Link>
					<Link
						href={"/"}
						className={styles.shareProfileLinkTwitter}
					>
						<TwitterSvg color="1EA1F1" />
					</Link>
					<Link
						href={"/"}
						className={styles.shareProfileLinkReddit}
					>
						<RedditSvg color="FE4500" />
					</Link>
					<Link
						href={"/"}
						className={styles.shareProfileLinkTelegram}
					>
						<TelegramSvg color="3290EC" />
					</Link>
					<Link
						href={"/"}
						className={styles.shareProfileLinkFacebook}
					>
						<FacebookSvg color="1B74E3" />
					</Link>
				</div>
				<div className={styles.urlToShareBlock}>
					<p className={styles.text}>Or copy link</p>
					<div className={styles.urlToShare}>
						<ChainSvg />
						<p className={styles.url}>http://localstorage:3000{pathname}</p>
						<button
							onClick={() => {
								void navigator.clipboard.writeText(
									`http://localstorage:3000${pathname}`
								);
							}}
							className={styles.copyBtn}
						>
							Copy
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
