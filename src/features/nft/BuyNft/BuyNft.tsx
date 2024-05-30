import styles from "./BuyNft.module.scss";
import { buyNft } from "@/entities/myNft/api";
import type { INft } from "@/entities/myNft/api/types";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store/store";
import { Dispatch, SetStateAction } from "react";

interface IBuyNft {
	nft: INft;
	onResponse: Dispatch<SetStateAction<number>>;
}

export function BuyNft({ nft, onResponse }: IBuyNft) {
	const accessToken = useSelector(
		(state: RootState) => state.login.accessToken
	) as string;

	return (
		<button
			onClick={async () => {
				if (!accessToken) {
					alert("You must be logged in");
					return;
				}
				const response = await buyNft(nft);
				console.log("onClick={ ~ response:", response);
				onResponse(response.status);
			}}
			className={styles.buyButton}
		>
			Purchase now
		</button>
	);
}
