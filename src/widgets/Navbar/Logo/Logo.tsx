"use client";
import styles from "./Logo.module.scss";
import Image from "next/image";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { close } from "@/app/store/menuSlice/menuSlice";

export function Logo() {
	const dispatch = useDispatch();

	return (
		<Link
			onClick={() => {
				dispatch(close());
			}}
			href="/"
			className={styles.logo}
		>
			<Image
				src="/icons/logo.svg"
				alt="logo"
				width={140}
				height={50}
			/>
		</Link>
	);
}
