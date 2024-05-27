import styles from "./PreviewBlock.module.scss";
import Link from "next/link";
import Image from "next/image";
import { archivo } from "@/app/fonts";

export function PreviewBlock() {
	return (
		<div className={styles.previewBlock}>
			<div className={styles.previewBlockContainer}>
				<div className={styles.previewBlockMain}>
					<div className={styles.previewBlockText}>
						<h1 className={`${styles.previewBlockTitle} ${archivo.className}`}>
							<span className={styles.previewBlueTitle}>2,048</span> legendary
							is ready to join the clash.
						</h1>
						<p
							className={`${styles.previewBlockSubtitle} ${archivo.className}`}
						>
							Play-to-Earn NFT Marketplace
						</p>
						<Link
							className={styles.button}
							href="/"
						>
							Explore now
						</Link>

						{/* <Image
              src="/images/preview-img.png"
              alt="image"
              width={950}
              height={600}
              // fill={true}
              className={styles.image}
            /> */}
					</div>
					<div className={styles.previewBlockImage}>
						{/* <Image
              src="/images/preview-img.png"
              alt="image"
              width={950}
              height={600}
              // fill={true}
            /> */}
					</div>
				</div>
				<div className={styles.previewBlockStat}>
					<div className={styles.statItem}>
						<Image
							src="/images/preview-img-1.png"
							alt="stat-img"
							width={64}
							height={64}
						/>
						<div className={styles.statText}>
							<p className={styles.statName}>Total sales</p>
							<p className={`${styles.statValue} ${archivo.className}`}>
								16,789
							</p>
						</div>
					</div>
					<div className={styles.statItem}>
						<Image
							src="/images/preview-img-2.png"
							alt="stat-img"
							width={64}
							height={64}
						/>
						<div className={styles.statText}>
							<p className={styles.statName}>Total volumes</p>
							<p className={`${styles.statValue} ${archivo.className}`}>
								300.89 <span>$833,722</span>
							</p>
						</div>
					</div>
					<div className={styles.statItem}>
						<Image
							src="/images/preview-img-3.png"
							alt="stat-img"
							width={64}
							height={64}
						/>
						<div className={styles.statText}>
							<p className={styles.statName}>Character sold</p>
							<p className={`${styles.statValue} ${archivo.className}`}>
								8,321
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
