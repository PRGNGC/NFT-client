"use client";
import { useState } from "react";
import styles from "./DefaultsAvatars.module.scss";
import Image from "next/image";

export function DefaultsAvatars() {
	const [activeAvatar, setActiveAvatar] = useState<number>(0);
	return (
		<div className={styles.defaultsAvatarsContainer}>
			<h4 className={styles.defaultsAvatarsTitle}>
				Select one of your NFTs to create an avatar
			</h4>
			<div className={styles.defaultsAvatarsBlock}>
				<span
					onClick={() => {
						if (activeAvatar === 1) {
							return setActiveAvatar(0);
						}
						return setActiveAvatar(1);
					}}
					className={
						activeAvatar === 1
							? styles.activeDefaultAvatar
							: styles.defaultAvatar
					}
				>
					<Image
						src={"/images/label.png"}
						width={60}
						height={60}
						alt="img"
					/>
				</span>
				<span
					onClick={() => {
						if (activeAvatar === 2) {
							return setActiveAvatar(0);
						}
						return setActiveAvatar(2);
					}}
					className={
						activeAvatar === 2
							? styles.activeDefaultAvatar
							: styles.defaultAvatar
					}
				>
					<Image
						src={"/images/label.png"}
						width={60}
						height={60}
						alt="img"
					/>
				</span>
				<span
					onClick={() => {
						if (activeAvatar === 3) {
							return setActiveAvatar(0);
						}
						return setActiveAvatar(3);
					}}
					className={
						activeAvatar === 3
							? styles.activeDefaultAvatar
							: styles.defaultAvatar
					}
				>
					<Image
						src={"/images/label.png"}
						width={60}
						height={60}
						alt="img"
					/>
				</span>
				<span
					onClick={() => {
						if (activeAvatar === 4) {
							return setActiveAvatar(0);
						}
						return setActiveAvatar(4);
					}}
					className={
						activeAvatar === 4
							? styles.activeDefaultAvatar
							: styles.defaultAvatar
					}
				>
					<Image
						src={"/images/label.png"}
						width={60}
						height={60}
						alt="img"
					/>
				</span>
				<span
					onClick={() => {
						if (activeAvatar === 5) {
							return setActiveAvatar(0);
						}
						return setActiveAvatar(5);
					}}
					className={
						activeAvatar === 5
							? styles.activeDefaultAvatar
							: styles.defaultAvatar
					}
				>
					<Image
						src={"/images/label.png"}
						width={60}
						height={60}
						alt="img"
					/>
				</span>
			</div>
		</div>
	);
}
