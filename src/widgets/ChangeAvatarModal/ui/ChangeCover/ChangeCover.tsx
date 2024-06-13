"use client";
import styles from "./ChangeCover.module.scss";
import { useState } from "react";
import { UploadZone } from "./ui/UploadZone";
import { ImageContainer } from "./ui/ImageContainer";

export function ChangeCover() {
	const [currentImage, setCurrentImage] = useState<File | null>(null);
	const [changeMode, setChangeMode] = useState(true);

	return (
		<div className={styles.userCoverBlock}>
			{changeMode && (
				<UploadZone
					onLoad={setCurrentImage}
					onChangeMode={setChangeMode}
				/>
			)}
			{!changeMode && <ImageContainer img={currentImage} />}
		</div>
	);
}
