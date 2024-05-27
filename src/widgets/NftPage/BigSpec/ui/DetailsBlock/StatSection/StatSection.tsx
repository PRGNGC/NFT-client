import type { INft, IBundleNft, IPlanetNft } from "@/entities/nft/api/types";
import styles from "./StatSection.module.scss";
import Image from "next/image";

interface IStatSection {
	nftItem: INft;
}

export function StatSection({ nftItem }: IStatSection) {
	return (
		<>
			{nftItem.nftType === "bundles" && (
				<div className={styles.statBlock}>
					<h4 className={styles.statBlockHeader}>Stats</h4>
					<div className={styles.statContent}>
						{Object.values(
							(nftItem as IBundleNft).nftDetails.specification
						).map((value) => {
							return (
								<div className={styles.statItem}>
									<Image
										src={value.img}
										alt="img"
										width={48}
										height={48}
									/>
									<div className={styles.statCredentials}>
										<p className={styles.statPlanet}>{value.field}</p>
										<p className={styles.statCity}>{value.value}</p>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			)}

			{nftItem.nftType === "planets" && (
				<div className={styles.statBlock}>
					<h4 className={styles.statBlockHeader}>Stats</h4>
					<div className={styles.statContent}>
						{Object.values(
							(nftItem as IPlanetNft).nftDetails.specification
						).map((value) => {
							return (
								<div className={styles.statItem}>
									<Image
										src={value.img}
										alt="img"
										width={48}
										height={48}
									/>
									<div className={styles.statCredentials}>
										<p className={styles.statPlanet}>{value.field}</p>
										<p className={styles.statCity}>{value.value}</p>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			)}
		</>
	);
}
