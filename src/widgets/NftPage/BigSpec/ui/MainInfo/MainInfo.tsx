"use client";
import { useState } from "react";
import styles from "./MainInfo.module.scss";
import type { INft } from "@/entities/nft/api/types";
import { BuyNftModal } from "@/widgets/BuyNftModal";
import { createPortal } from "react-dom";

interface IMainInfo {
	nftItem: INft;
}

export function MainInfo({ nftItem }: IMainInfo) {
	const [buyModalOpen, setBuyModalOpen] = useState<boolean>(false);

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
						{buyModalOpen &&
							createPortal(
								<BuyNftModal
									nft={nftItem}
									onCloseBuyModal={setBuyModalOpen}
								/>,
								document.body
							)}
						<button
							className={styles.purchaseButton}
							onClick={() => {
								document.body.style.overflowY = "hidden";
								setBuyModalOpen(true);
							}}
						>
							Purchase
						</button>
					</div>
				</div>
			</div>
			<div className={styles.secondaryInfo}></div>
		</>
	);
}
