"use client";
import { Dispatch, SetStateAction } from "react";
import styles from "./ChangeAvatarModal.module.scss";
import { CrossSvg } from "@/shared/ui/icons/CrossSvg";
import { useState } from "react";
import { DefaultsAvatars } from "./ui/DefaultsAvatars";
import { ChangeCover } from "./ui/ChangeCover";

interface IChangeAvatarModal {
	onClose: Dispatch<SetStateAction<boolean>>;
}

export function ChangeAvatarModal({ onClose }: IChangeAvatarModal) {
	const [customMode, setCustomMode] = useState<boolean>(false);

	return (
		<div className={styles.modalWrapper}>
			<div className={styles.modalBlock}>
				<span
					className={styles.closeModalBtn}
					onClick={() => {
						onClose(false);
					}}
				>
					<CrossSvg />
				</span>
				<h2 className={styles.modalTitle}>Change avatar</h2>
				<div className={styles.modeTogglerBlock}>
					<span
						onClick={() => setCustomMode((prev) => !prev)}
						className={
							!customMode ? styles.modeToggler : styles.activeModeToggler
						}
					>
						Choose from NFTs
					</span>
					<span
						onClick={() => setCustomMode((prev) => !prev)}
						className={
							customMode ? styles.modeToggler : styles.activeModeToggler
						}
					>
						Upload photo
					</span>
				</div>
				{customMode && <DefaultsAvatars />}
				{!customMode && <ChangeCover />}
				<button className={styles.changeBtn}>Change avatar</button>
			</div>
		</div>
	);
}
