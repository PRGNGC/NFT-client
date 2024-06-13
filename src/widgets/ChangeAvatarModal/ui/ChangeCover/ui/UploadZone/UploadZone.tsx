import { Dispatch, SetStateAction } from "react";
import styles from "./UploadZone.module.scss";
import { UploadSvg } from "@/shared/ui/icons/UploadSvg";

interface IUploadZone {
	onLoad: Dispatch<SetStateAction<null | File>>;
	onChangeMode: Dispatch<SetStateAction<boolean>>;
}

export function UploadZone({ onLoad, onChangeMode }: IUploadZone) {
	return (
		<div className={styles.uploadZone}>
			<input
				type="file"
				className={styles.chooseCoverFile}
				accept="image/png"
				multiple
				onDragOver={(e) => {
					e.preventDefault();
				}}
				onDrop={(e) => {
					e.preventDefault();
					const file = e.dataTransfer.files[0];

					if (file.type === "image/png") {
						onLoad(file);
						onChangeMode((prev) => !prev);
					}
				}}
				onChange={(e) => {
					if (e.target.files !== null && e.target.files.length >= 1) {
						onLoad(e.target.files[0]);
						onChangeMode((prev) => !prev);
					}
				}}
			/>
			<UploadSvg />
			<h2 className={styles.uploadZoneTitle}>Drag and drop to upload</h2>
			<p className={styles.uploadZoneText}>
				Size recommend 2560x756. Max 10mb.
			</p>
		</div>
	);
}
