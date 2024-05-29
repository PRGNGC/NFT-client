"use client";
import styles from "./BuyNft.module.scss";
import { buyNft } from "@/entities/myNft/api";
import type { INft } from "@/entities/myNft/api/types";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store/store";

interface IBuyNft {
	nft: INft;
}

export function BuyNft({ nft }: IBuyNft) {
	const accessToken = useSelector(
		(state: RootState) => state.login.accessToken
	) as string;

	return (
		<button
			onClick={() => {
				if (!accessToken) {
					alert("You must be logged in");
					return;
				}
				buyNft(nft);
			}}
			className={styles.buyButton}
		>
			Purchase now
		</button>
	);
}
