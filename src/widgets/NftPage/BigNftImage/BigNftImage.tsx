import styles from "./BigNftImage.module.scss";
import Image from "next/image";

interface BigNftImageType {
	image: string;
}

export function BigNftImage({ image }: BigNftImageType) {
	return (
		<div className={styles.imageContainer}>
			<Image
				src={image}
				alt="image"
				fill={true}
				style={{ objectFit: "contain" }}
			/>
		</div>
	);
}
