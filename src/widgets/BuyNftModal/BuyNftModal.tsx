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
	const [response, setResponse] = useState<Response | null>(null);

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
						onChange={setCurrentStage}
						onResponse={setResponse}
					/>
				)}
				{currentStage === 2 && <SecondStage response={response as Response} />}
			</div>
		</div>
	);
}
