import styles from "./FirstStage.module.scss";
import { DollarSignSvg } from "@/shared/ui/icons/DollarSignSvg";
import { Dispatch, SetStateAction } from "react";
import type { INft } from "@/entities/nft/api/types";
import { BuyNft } from "@/features/nft/BuyNft";

interface IFirstStage {
	nft: INft;
	onChange: Dispatch<SetStateAction<number>>;
	onResponse: Dispatch<SetStateAction<Response | null>>;
}

export function FirstStage({ nft, onChange, onResponse }: IFirstStage) {
	return (
		<div className={styles.firstStageContainer}>
			<div className={styles.modalHeader}>
				<p className={styles.modalTitle}>Confirm purchase</p>
			</div>
			<div className={styles.modalNftInfo}>
				<p className={styles.nftName}>{nft.nftName}</p>
				<p className={styles.nftEthPrice}>{nft.nftEthPrice}ETH</p>
			</div>
			<div className={styles.modalCurrenciesComparison}>
				<div className={styles.priceTagTitle}>
					<span>
						<DollarSignSvg />
					</span>
					<p className={styles.priceTitle}>Price</p>
				</div>
				<p className={styles.currenciesComparison}>1ETH = $2000.0</p>
			</div>
			<BuyNft
				nft={nft}
				onResponse={onResponse}
				onToggle={onChange}
			/>
			<div className={styles.modalFooter}>
				Corrupti et voluptas. Ut ipsum 0,009 ETH fugiat odio. Impedit ullam vel
				et est rror enim.
			</div>
		</div>
	);
}
