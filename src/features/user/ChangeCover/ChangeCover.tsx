"use client";
import styles from "./ChangeCover.module.scss";
import { useState } from "react";
import { UploadZone } from "./ui/UploadZone";
import { ImageContainer } from "./ui/ImageContainer";

interface IChangeCover {
	img: string;
}

export function ChangeCover({ img }: IChangeCover) {
	const [currentImage, setCurrentImage] = useState<string | File>(img);
	const [changeMode, setChangeMode] = useState(false);

	return (
		<div className={styles.userCoverBlock}>
			{changeMode && (
				<UploadZone
					onLoad={setCurrentImage}
					onChangeMode={setChangeMode}
				/>
			)}
			{!changeMode && <ImageContainer img={currentImage} />}
			<button
				onClick={() => setChangeMode((prev) => !prev)}
				className={styles.editBtn}
			>
				Edit cover
			</button>
		</div>
	);
}
