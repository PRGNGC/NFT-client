import styles from "./MainInfo.module.scss";
import type { INft } from "@/entities/nft/api/types";
import { BuyNft } from "@/features/nft/BuyNft";

interface IMainInfo {
	nftItem: INft;
}

export function MainInfo({ nftItem }: IMainInfo) {
	return (
		<>
			<div className={styles.mainInfo}>
				<span className={styles.nftId}>#{nftItem.nftId}</span>
				<div className={styles.nftNamePrice}>
					<h1 className={styles.nftName}>{nftItem.nftName}</h1>
					<div className={styles.nftPrice}>
						<div className={styles.pricesBlock}>
							<span className={styles.ethPrice}>{nftItem.nftEthPrice} ETH</span>
							<span className={styles.usdPrice}>$ {nftItem.nftEthPrice}</span>
						</div>
						<BuyNft nft={nftItem} />
					</div>
				</div>
			</div>
			<div className={styles.secondaryInfo}></div>
		</>
	);
}
