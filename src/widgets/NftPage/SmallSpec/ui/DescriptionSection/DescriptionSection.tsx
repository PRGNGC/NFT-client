import styles from "./DescriptionSection.module.scss";
import Image from "next/image";
import type { INft, IItemNft, ICharacterNft } from "@/entities/nft/api/types";

interface IDescriptionSection {
	nft: INft;
}

export function DescriptionSection({ nft }: IDescriptionSection) {
	return (
		<div className={styles.descriptionSection}>
			<p className={styles.textBlock}>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam odio
				accusamus fugit sunt reiciendis alias ullam harum eligendi id ipsum.
			</p>

			<hr />

			{nft.nftType === "characters" && (
				<>
					<div className={styles.byBlock}>
						<div className={styles.ownedBy}>
							<h4 className={styles.ownedByTitle}>Owned by</h4>
							<div className={styles.ownedByContent}>
								<Image
									src={(nft as ICharacterNft).nftDetails.ownedBy.ownerImg}
									alt="img"
									width={48}
									height={48}
								/>
								<div className={styles.ownerCredentials}>
									<p className={styles.ownerName}>
										{(nft as ICharacterNft).nftDetails.ownedBy.owner}
									</p>
									<p className={styles.ownerId}>
										{(nft as ICharacterNft).nftDetails.ownedBy.id}
									</p>
								</div>
							</div>
						</div>
						<div className={styles.location}>
							<h4 className={styles.locationTitle}>Location</h4>
							<div className={styles.locationContent}>
								<Image
									src={(nft as ICharacterNft).nftDetails.location.planetImg}
									alt="img"
									width={48}
									height={48}
								/>
								<div className={styles.locationCredentials}>
									<p className={styles.locationPlanet}>
										{(nft as ICharacterNft).nftDetails.location.planet}
									</p>
									<p className={styles.locationCity}>
										{(nft as ICharacterNft).nftDetails.location.city}
									</p>
								</div>
							</div>
						</div>
					</div>

					<hr />

					<div className={styles.statBlock}>
						<h4 className={styles.statBlockHeader}>Stats</h4>
						<div className={styles.statContent}>
							{Object.values(
								(nft as ICharacterNft).nftDetails.specification
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

					<hr />

					<div className={styles.propertyBlock}>
						<h4 className={styles.propertyBlockHeader}>Property</h4>
						<div className={styles.propertyContent}>
							{Object.values((nft as ICharacterNft).nftDetails.property).map(
								(value) => {
									return (
										<div className={styles.propertyItem}>
											<Image
												src="/images/astronaut.png"
												alt="img"
												width={48}
												height={48}
											/>
											<div className={styles.propertyCredentials}>
												<p className={styles.propertyPlanet}>{value.field}</p>
												<p className={styles.propertyCity}>{value.value}</p>
											</div>
										</div>
									);
								}
							)}
						</div>
					</div>
				</>
			)}

			{nft.nftType === "items" && (
				<>
					<div className={styles.byBlock}>
						<div className={styles.usedBy}>
							<h4 className={styles.usedByTitle}>UsedBy</h4>
							<div className={styles.usedByContent}>
								<Image
									src={(nft as IItemNft).nftDetails.usedBy.userImg}
									alt="img"
									width={48}
									height={48}
								/>
								<div className={styles.usedByCredentials}>
									<p className={styles.usedByUser}>
										{(nft as IItemNft).nftDetails.usedBy.user}
									</p>
									<p className={styles.usedByPlanet}>
										{(nft as IItemNft).nftDetails.usedBy.planet}
									</p>
								</div>
							</div>
						</div>
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
					</div>

					<hr />

					<div className={styles.statBlock}>
						<h4>Specification</h4>
						<div className={styles.statContent}>
							{Object.values((nft as IItemNft).nftDetails.specification).map(
								(value) => {
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
								}
							)}
						</div>
					</div>
				</>
			)}
		</div>
	);
}
