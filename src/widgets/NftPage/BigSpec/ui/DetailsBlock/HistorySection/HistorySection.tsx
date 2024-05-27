import { INft } from "@/entities/nft/api/types";
import styles from "./HistorySection.module.scss";
import Image from "next/image";
import Link from "next/link";
import { CopySvgImg } from "@/shared/ui/icons/CopySvgImg";

interface IHistorySection {
	nftItem: INft;
}

export function HistorySection({ nftItem }: IHistorySection) {
	return (
		<div className={styles.historyBlock}>
			{nftItem.history.map((historyItem) => {
				return (
					<>
						<div className={styles.historyItem}>
							<div className={styles.historyUser}>
								<Image
									src={historyItem.userAvatar}
									width={48}
									height={48}
									alt="img"
								/>
								<div className={styles.userCredentials}>
									<p className={styles.transactionType}>
										{historyItem.actionType} by
										<span
											className={styles.userTag}
										>{` ${historyItem.user}`}</span>
									</p>
									<p className={styles.transactionTime}>
										{`${historyItem.date} at `}
										{`${historyItem.time}`}
									</p>
								</div>
							</div>
							<div className={styles.transactionPrice}>
								{`${historyItem.priceETH} ETH `}

								<Link href="/">
									<CopySvgImg />
								</Link>
							</div>
						</div>
						<hr />
					</>
				);
			})}
		</div>
	);
}
