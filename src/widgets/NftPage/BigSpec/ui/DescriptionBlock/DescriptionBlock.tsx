import styles from "./DescriptionBlock.module.scss";
import Image from "next/image";
import { INft, IPlanetNft, IBundleNft } from "@/entities/nft/api/types";
import { LocationSvgImg } from "@/shared/ui/icons/LocationSvgImg";

interface IDescriptionBlock {
	nftItem: INft;
}

export function DescriptionBlock({ nftItem }: IDescriptionBlock) {
	return (
		<div className={styles.descriptionBlock}>
			<h2 className={styles.descriptionTitle}>Description</h2>

			{nftItem.nftType === "planets" && (
				<>
					<div className={styles.locationBlock}>
						<h3 className={styles.locationTitle}>Location</h3>
						<div className={styles.locationInfo}>
							<div className={styles.locationPlace}>
								<div className={styles.locationImg}>
									<LocationSvgImg />
								</div>
								<div className={styles.locationCoordinates}>
									<span className={styles.locationSystem}>
										{(nftItem as IPlanetNft).nftSystem}
									</span>
									<span className={styles.locationLongLat}>
										{(nftItem as IPlanetNft).nftCoordinates}
									</span>
								</div>
							</div>
							<button className={styles.getDirButton}>Get direction</button>
						</div>
					</div>
					<hr />
				</>
			)}

			<div className={styles.descriptionText}>
				Eius eum sunt in nulla autem voluptas facilis et magnam. Provident
				accusamus omnis quos sunt. Illo enim consequuntur ratione aperiam eum
				rerum. Incidunt rerum maxime voluptas ad pariatur. Consequatur mollitia
				illum quia aut.
			</div>

			{nftItem.nftType === "bundles" && (
				<div className={styles.bundleItemsBlock}>
					<h3 className={styles.bundleItemsTitle}>Items included</h3>

					<div className={styles.bundleItems}>
						{(nftItem as IBundleNft).itemsInBundle.map(
							(itemInBundle: string) => {
								return (
									<div className={styles.bundleItem}>
										<Image
											src={itemInBundle}
											width={50}
											height={50}
											alt="img"
										/>
									</div>
								);
							}
						)}
					</div>
				</div>
			)}
		</div>
	);
}
