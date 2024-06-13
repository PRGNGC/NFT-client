import styles from "./NftListSkeleton.module.scss";
import { ItemCardSkeleton } from "@/entities/nft/ui/ItemCardSkeleton";

export function NftListSkeleton() {
	return (
		<div className={styles.nftItems}>
			<div className={styles.nftItemsContainer}>
				<ItemCardSkeleton />
				<ItemCardSkeleton />
				<ItemCardSkeleton />
			</div>
			<button className={styles.loadMoreButton}>Load more</button>
		</div>
	);
}
