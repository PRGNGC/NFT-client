import styles from "./SmallNftImage.module.scss";
import Image from "next/image";

interface SmallNftImageType {
	image: string;
}

export function SmallNftImage({ image }: SmallNftImageType) {
	return (
		<div className={styles.imageContainer}>
			<Image
				src={image}
				alt="image"
				width={700}
				height={700}
			/>
		</div>
	);
}
