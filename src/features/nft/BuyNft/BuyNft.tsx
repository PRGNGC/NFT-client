import styles from "./BuyNft.module.scss";
import { buyNft } from "@/entities/myNft/api";
import type { INft } from "@/entities/myNft/api/types";
import { Dispatch, SetStateAction } from "react";
import { useDispatch } from "react-redux";
import { login } from "@/app/store/loginSlice/loginSlice";

interface IBuyNft {
	nft: INft;
	onResponse: Dispatch<SetStateAction<Response | null>>;
	onToggle: Dispatch<SetStateAction<number>>;
}

export function BuyNft({ nft, onResponse, onToggle }: IBuyNft) {
	const dispatch = useDispatch();
	return (
		<button
			onClick={async () => {
				const response = await buyNft(nft);
				onToggle(2);
				console.log("onClick={ ~ response:", response);
				onResponse(response);
				const data = await response.json();
				console.log("onClick={ ~ response:", response);
				console.log("data:", data);
				if (response.status === 200 && data.accessToken !== undefined) {
					dispatch(login([data.accessToken, data.expiresAt]));
				}
			}}
			className={styles.buyButton}
		>
			Purchase now
		</button>
	);
}
