"use client";
import styles from "./PlayButton.module.scss";
import Link from "next/link";
import { UserAvatar } from "../UserAvatar";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store/store";

export function PlayButton() {
	const accessToken = useSelector(
		(state: RootState) => state.login.accessToken
	);

	return (
		<div className={styles.buttonsBlock}>
			<Link
				href="/"
				className={styles.playButton}
			>
				Play Now
			</Link>

			{accessToken === null && (
				<Link
					href="/login"
					className={styles.playButton}
				>
					Log In
				</Link>
			)}

			{accessToken === null && (
				<Link
					href="/signup"
					className={styles.playButton}
				>
					Sign Up
				</Link>
			)}

			{accessToken !== null && <UserAvatar />}
		</div>
	);
}
