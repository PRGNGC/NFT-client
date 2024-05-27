import styles from "./DetailsBlock.module.scss";
import type { INft } from "@/entities/nft/api/types";
import { BySection } from "./BySection";
import { StatSection } from "./StatSection";
import { LinksSection } from "./LinksSection";
import { HistorySection } from "./HistorySection";

interface IDetailsBlock {
	nftItem: INft;
}

export function DetailsBlock({ nftItem }: IDetailsBlock) {
	return (
		<div className={styles.detailsBlock}>
			<h2 className={styles.detailsTitle}>Details</h2>
			<BySection nftItem={nftItem} />
			<hr />
			<StatSection nftItem={nftItem} />
			<hr />
			<LinksSection />
			<hr />
			<HistorySection nftItem={nftItem} />
		</div>
	);
}
