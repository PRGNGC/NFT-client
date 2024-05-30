"use client";
import { useState } from "react";
import { Dispatch, SetStateAction } from "react";
import styles from "./BuyNftModal.module.scss";
import type { INft } from "@/entities/nft/api/types";
import { CrossSvg } from "@/shared/ui/icons/CrossSvg";
import { FirstStage } from "./ui/FirstStage";
import { SecondStage } from "./ui/SecondStage";

interface IBuyNftModal {
	nft: INft;
	onCloseBuyModal: Dispatch<SetStateAction<boolean>>;
}

export function BuyNftModal({ nft, onCloseBuyModal }: IBuyNftModal) {
	const [currentStage, setCurrentStage] = useState<number>(1);
	const [response, setResponse] = useState<number>(0);

	return (
		<div className={styles.modalWrapper}>
			<div className={styles.modalBlock}>
				<span
					className={styles.closeModalBtn}
					onClick={() => {
						onCloseBuyModal(false);
					}}
				>
					<CrossSvg />
				</span>
				{currentStage === 1 && (
					<FirstStage
						nft={nft}
						onChange={() =>
							setCurrentStage((prevCurrentStage) => prevCurrentStage + 1)
						}
						onResponse={setResponse}
					/>
				)}
				{currentStage === 2 && <SecondStage status={response} />}
				{/* <div className={styles.modalHeader}>
					<p className={styles.modalTitle}>Confirm purchase</p>
					<span
						onClick={() => {
							onCloseBuyModal(false);
						}}
					>
						<CrossSvg />
					</span>
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
				<p
					style={{ color: "black" }}
					onClick={() => {
						onCloseBuyModal(false);
						onOpenConfirmedModal(true);
					}}
				>
					<BuyNft nft={nft} />
				</p>
				<div className={styles.modalFooter}>
					Corrupti et voluptas. Ut ipsum 0,009 ETH fugiat odio. Impedit ullam
					vel et est rror enim.
				</div> */}
			</div>
		</div>
	);
}
