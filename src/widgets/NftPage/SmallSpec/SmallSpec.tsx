"use client";
import { useState } from "react";
import styles from "./SmallSpec.module.scss";
import Link from "next/link";
import type { INft } from "@/entities/nft/api/types";
import { LinkSvgImage } from "@/shared/ui/icons/LinkSvgImage";
import { SectionsBlock } from "./ui/SectionsBlock";
import { createPortal } from "react-dom";
import { BuyNftModal } from "@/widgets/BuyNftModal";

interface SmallSpecProps {
	nftInfo: INft;
}

export function SmallSpec({ nftInfo }: SmallSpecProps) {
	const [buyModalOpen, setBuyModalOpen] = useState<boolean>(false);

	return (
		<div className={styles.smallSpecBlock}>
			<div className={styles.smallSpecCommonInfo}>
				<div className={styles.commonInfoTraitId}>
					<span className={styles.commonInfoId}>#{nftInfo.nftId}</span>
					{nftInfo.nftTraits &&
						nftInfo?.nftTraits.map((nftTrait: string) => {
							return <span className={styles.commonInfoTrait}>{nftTrait}</span>;
						})}
				</div>
				<div className={styles.commonInfoPricesName}>
					<h1 className={styles.commonInfoName}>{nftInfo.nftName}</h1>
					<div className={styles.commonInfoPrices}>
						<span className={styles.ethPrice}>{nftInfo.nftEthPrice}</span>
						<span className={styles.dollarPrice}>dollarPrice</span>
					</div>
				</div>
			</div>
			<div className={styles.smallSpecLinks}>
				{buyModalOpen &&
					createPortal(
						<BuyNftModal
							nft={nftInfo}
							onCloseBuyModal={setBuyModalOpen}
						/>,
						document.body
					)}
				<button
					className={styles.smallSpecPurchaseButton}
					onClick={() => {
						// document.body.style.overflowY = "hidden";
						setBuyModalOpen(true);
					}}
				>
					Purchase now
				</button>
				<Link
					className={styles.smallSpecLink}
					href="/"
				>
					<LinkSvgImage />
				</Link>
			</div>
			<SectionsBlock nft={nftInfo} />
		</div>
	);
}
