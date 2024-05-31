import styles from "./BuyNft.module.scss";
import { buyNft } from "@/entities/myNft/api";
import type { INft } from "@/entities/myNft/api/types";
import { Dispatch, SetStateAction } from "react";

interface IBuyNft {
	nft: INft;
	onResponse: Dispatch<SetStateAction<number>>;
	onToggle: Dispatch<SetStateAction<number>>;
}

export function BuyNft({ nft, onResponse, onToggle }: IBuyNft) {
	return (
		<button
			onClick={async () => {
				const response = await buyNft(nft);
				console.log("here");
				onToggle(2);
				console.log("here2");
				console.log("onClick={ ~ response:", response);
				console.log("here3");

				onResponse(response);
			}}
			className={styles.buyButton}
		>
			Purchase now
		</button>
	);
}
