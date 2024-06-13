"use client";
import styles from "./UserInfoSettings.module.scss";
import { useSelector } from "react-redux";
import { useState } from "react";
import { RootState } from "@/app/store/store";
import Image from "next/image";
import { PencilSvg } from "@/shared/ui/icons/PencilSvg";
import { updateUser } from "@/entities/user/api";

export function UserInfoSettings() {
	const user = useSelector((state: RootState) => state.login.user);
	const [file, setFile] = useState<File | null>(null);
	const [coverFile, setCoverFile] = useState<File | null>(null);
	const [newName, setNewName] = useState<string>(user.name);
	const [newUserName, setNewUserName] = useState<string>(user.username);

	async function handleSavings() {
		const response = await updateUser(
			newName,
			newUserName,
			file as File,
			coverFile as File
		);

		// if (response === 440) {
		// 	return (
		// 		<div>
		// 			{sessionExpired &&
		// 				createPortal(
		// 					<SessionExpiredModal onClose={setSessionExpired} />,
		// 					document.body
		// 				)}
		// 		</div>
		// 	);
		// }
	}

	return (
		<div className={styles.userInfoSettingsBlock}>
			<div className={styles.userNameBtn}>
				<h1 className={styles.userName}>{user.name}</h1>
				<button
					onClick={() => {
						handleSavings();
						console.log("File - ", file);
						console.log("CoverFile - ", coverFile);
						console.log("Name - ", newName);
						console.log("NewUserName - ", newUserName);
					}}
					className={styles.saveBtn}
				>
					Save settings
				</button>
			</div>
			<p className={styles.targetInfo}>
				Update your profile info and manage your wallet
			</p>
			<hr />
			<div className={styles.mainUserInfo}>
				<div className={styles.textInfo}>
					<div className={styles.profileCoverBlock}>
						<h3 className={styles.profileCoverTitle}>Profile cover</h3>
						<div className={styles.userCoverContainer}>
							<Image
								className={styles.userCover}
								src={
									coverFile === null
										? `data:image/png;base64, ${user.cover}`
										: // ? user.cover
											window.URL.createObjectURL(coverFile)
								}
								// src={user.cover}
								width={640}
								height={190}
								alt="img"
							/>
							<span className={styles.changeImg}>
								<PencilSvg />
								<input
									type="file"
									className={styles.chooseCoverFile}
									accept="image/png"
									multiple
									onChange={(e) => {
										if (e.target.files !== null && e.target.files.length >= 1) {
											setCoverFile(e.target.files[0]);
										}
									}}
								/>
							</span>
						</div>
					</div>
					<div className={styles.displayNameBlock}>
						<h3 className={styles.displayNameTitle}>Display name</h3>
						<input
							className={styles.displayNameInput}
							type="text"
							defaultValue={user.name}
							onChange={(e) => {
								setNewName(e.target.value);
							}}
						/>
					</div>
					<div className={styles.usernameBlock}>
						<h3 className={styles.usernameTitle}>Username</h3>
						<input
							className={styles.usernameInput}
							type="text"
							defaultValue={user.username}
							onChange={(e) => {
								setNewUserName(e.target.value);
							}}
						/>
					</div>
				</div>
				<div className={styles.imgInfo}>
					<Image
						src={
							file === null
								? `data:image/png;base64, ${user.userImg}`
								: window.URL.createObjectURL(file)
						}
						width={128}
						height={128}
						alt="img"
					/>
					<p className={styles.prompt}>
						We recommended an image of at least 800x800px. Max 2mb.
					</p>
					<button className={styles.changeImgBtn}>
						Change avatar
						<input
							type="file"
							className={styles.chooseUserFile}
							accept="image/png"
							multiple
							onChange={async (e) => {
								if (e.target.files !== null && e.target.files.length >= 1) {
									const arrayBuffer = await e.target.files[0].arrayBuffer();
									const typedArray = new Uint8Array(arrayBuffer);
									console.log("onChange={ ~ typedArray:", typedArray);

									setFile(e.target.files[0]);
								}
							}}
						/>
					</button>
				</div>
			</div>
		</div>
	);
}
