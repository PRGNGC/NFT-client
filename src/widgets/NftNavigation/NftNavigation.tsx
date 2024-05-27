import styles from "./NftNavigation.module.scss";
import Image from "next/image";
import Link from "next/link";
import { SearchNfts } from "@/features/nft/searchNfts";
import { usePathname } from "next/navigation";

export function NftNavigation() {
	const urlPath = usePathname();
	const mainUrlSegment = urlPath?.split("/")[1];
	const secondaryUrlSegment = urlPath?.split("/")[2];

	return (
		<div className={styles.nftNavigation}>
			<div className={styles.nftNavigationContainer}>
				<nav className={styles.nftNavigationMenu}>
					<ul className={styles.nftNavigationList}>
						<Link href={`/${mainUrlSegment}/characters`}>
							<li
								className={
									secondaryUrlSegment === "characters"
										? styles.activeNavigationItem
										: styles.nftNavigationItem
								}
							>
								<Image
									src="/images/toggler-img-1.png"
									alt="icon"
									width={32}
									height={32}
								/>
								Characters
							</li>
						</Link>
						<Link href={`/${mainUrlSegment}/planets`}>
							<li
								className={
									secondaryUrlSegment === "planets"
										? styles.activeNavigationItem
										: styles.nftNavigationItem
								}
							>
								<Image
									src="/images/toggler-img-2.png"
									alt="icon"
									width={32}
									height={32}
								/>
								Planets
							</li>
						</Link>
						<Link href={`/${mainUrlSegment}/items`}>
							<li
								className={
									secondaryUrlSegment === "items"
										? styles.activeNavigationItem
										: styles.nftNavigationItem
								}
							>
								<Image
									src="/images/toggler-img-3.png"
									alt="icon"
									width={32}
									height={32}
								/>
								Items
							</li>
						</Link>
						<Link href={`/${mainUrlSegment}/bundles`}>
							<li
								className={
									secondaryUrlSegment === "bundles"
										? styles.activeNavigationItem
										: styles.nftNavigationItem
								}
							>
								<Image
									src="/images/toggler-img-4.png"
									alt="icon"
									width={32}
									height={32}
								/>
								Bundles
							</li>
						</Link>
					</ul>
				</nav>
				<SearchNfts />
			</div>
		</div>
	);
}
