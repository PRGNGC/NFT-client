import styles from "./NftItemPage.module.scss";
import { BigNftImage } from "@/widgets/NftPage/BigNftImage";
import { SmallSpec } from "@/widgets/NftPage/SmallSpec";
import { BigSpec } from "@/widgets/NftPage/BigSpec";
import type { INft } from "@/entities/nft/api/types";
import { SimilarNftsSlider } from "@/widgets/SimilarNftsSlider";
import { LinksBanner } from "@/widgets/LinksBanner";

interface NftPageType {
	nftItem: INft;
}

export function NftItemPage({ nftItem }: NftPageType) {
	return (
		<div className={styles.nftItemPage}>
			<div className={styles.nftItemPageContainer}>
				<div
					className={styles.nftItemPageMainContent}
					style={
						nftItem.nftType === "planets" || nftItem.nftType === "bundles"
							? { flexDirection: "column" }
							: { flexDirection: "row" }
					}
				>
					<BigNftImage image={nftItem.nftImg} />

					{nftItem.nftType === "planets" || nftItem.nftType === "bundles" ? (
						<BigSpec nftItem={nftItem} />
					) : (
						<SmallSpec nftInfo={nftItem} />
					)}
				</div>

				<SimilarNftsSlider nfts={nftItem.similarNfts} />

				<LinksBanner />
			</div>
		</div>
	);
}
