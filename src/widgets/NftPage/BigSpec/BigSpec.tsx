import styles from "./BigSpec.module.scss";
import type { INft } from "@/entities/nft/api/types";
import { MainInfo } from "./ui/MainInfo";
import { DescriptionBlock } from "./ui/DescriptionBlock";
import { DetailsBlock } from "./ui/DetailsBlock";

interface BigSpecType {
	nftItem: INft;
}

export function BigSpec({ nftItem }: BigSpecType) {
	return (
		<div className={styles.bigSpecBlock}>
			<MainInfo nftItem={nftItem} />
			<hr />
			<div className={styles.secondaryInfo}>
				<DescriptionBlock nftItem={nftItem} />
				<DetailsBlock nftItem={nftItem} />
			</div>
		</div>
	);
}
