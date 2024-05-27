import styles from "./DetailsSection.module.scss";
import Image from "next/image";
import type { INft, IItemNft } from "@/entities/nft/api/types";

interface IDetailsSection {
	nft: INft;
}

export function DetailsSection({ nft }: IDetailsSection) {
	return (
		<>
			<div className={styles.byBlock}>
				<div className={styles.ownedBy}>
					<h4 className={styles.ownedByTitle}>Owned by</h4>
					<div className={styles.ownedByContent}>
						<Image
							src={(nft as IItemNft).nftDetails.ownedBy.ownerImg}
							alt="img"
							width={48}
							height={48}
						/>
						<div className={styles.ownerCredentials}>
							<p className={styles.ownerName}>
								{(nft as IItemNft).nftDetails.ownedBy.owner}
							</p>
							<p className={styles.ownerId}>
								{(nft as IItemNft).nftDetails.ownedBy.id}
							</p>
						</div>
					</div>
				</div>
				<div className={styles.created}>
					<h4 className={styles.createdTitle}>Created</h4>
					<div className={styles.createdContent}>
						<Image
							src="/images/astronaut.png"
							alt="img"
							width={48}
							height={48}
						/>
						<div className={styles.createdCredentials}>
							<p className={styles.createdUser}>
								{(nft as IItemNft).nftDetails.created}
							</p>
							<p className={styles.createdPlanet}>
								{(nft as IItemNft).nftDetails.created}
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
