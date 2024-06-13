import styles from "./ImageContainer.module.scss";
import Image from "next/image";

interface IImageContainer {
	img: null | File;
}

export function ImageContainer({ img }: IImageContainer) {
	return (
		<Image
			className={styles.userCover}
			src={
				img instanceof String || typeof img === "string"
					? `data:image/png;base64, ${img}`
					: window.URL.createObjectURL(img as File)
			}
			width={1200}
			height={300}
			alt="img"
		/>
	);
}
