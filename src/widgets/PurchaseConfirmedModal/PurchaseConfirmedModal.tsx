"use client";
import { MouseEventHandler } from "react";
import styles from "./PurchaseConfirmedModal.module.scss";
import type { INft } from "@/entities/nft/api/types";
import { BuyNft } from "@/features/nft/BuyNft";

interface IBuyNftModal {
	nft: INft;
	onClose: MouseEventHandler<HTMLButtonElement>;
}

export function BuyNftModal({ nft, onClose }: IBuyNftModal) {
	return (
		<div className={styles.modalWrapper}>
			<div className={styles.modalBlock}>
				<div className={styles.modalHeader}>
					<p className={styles.modalTitle}>Confirm purchase</p>
					<span onClick={onClose}>
						<svg
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M6 18L18 6"
								stroke="#494E5B"
								stroke-width="1.5"
								stroke-miterlimit="10"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
							<path
								d="M18 18L6 6"
								stroke="#494E5B"
								stroke-width="1.5"
								stroke-miterlimit="10"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
					</span>
				</div>
				<div className={styles.modalNftInfo}>
					<p className={styles.nftName}>{nft.nftName}</p>
					<p className={styles.nftEthPrice}>{nft.nftEthPrice}ETH</p>
				</div>
				<div className={styles.modalCurrenciesComparison}>
					<div className={styles.priceTagTitle}>
						<span>
							<svg
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M12 17V16M14.0833 9.09091C13.6667 8.43636 12.8333 8 11.9167 8C10.5833 8 9.5 8.94545 9.5 10.1818C9.5 10.1818 9.5 12 12 12C14.5 12 14.5 13.8182 14.5 13.8182C14.5 15.0545 13.4167 16 12.0833 16C11.1667 16 10.3333 15.5636 9.91666 14.9091M12 8V7"
									stroke="#494E5B"
									stroke-width="1.5"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3Z"
									stroke="#494E5B"
									stroke-width="1.5"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
							</svg>
						</span>
						<p className={styles.priceTitle}>Price</p>
					</div>
					<p className={styles.currenciesComparison}>1ETH = $2000.0</p>
				</div>
				{/* <button className={styles.confirmPurchaseBtn}>Confirm purchase</button> */}
				<BuyNft nft={nft} />
				<div className={styles.modalFooter}>
					Corrupti et voluptas. Ut ipsum 0,009 ETH fugiat odio. Impedit ullam
					vel et est rror enim.
				</div>
			</div>
		</div>
	);
}
