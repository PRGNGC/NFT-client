import styles from "./SecondStage.module.scss";
import Link from "next/link";
import { GreenTickSvg } from "@/shared/ui/icons/GreenTickSvg";
import { RedCrossSvg } from "@/shared/ui/icons/RedCrossSvg";

interface ISecondStage {
	status: number;
}

export function SecondStage({ status }: ISecondStage) {
	return (
		<div className={styles.secondStageContainer}>
			<div className={styles.statusSign}>
				{status === 200 ? <GreenTickSvg /> : <RedCrossSvg />}
			</div>
			<h1 className={styles.secondStageTitle}>
				{status === 200 ? "Congrats!" : "Error happened!"}
			</h1>
			<p className={styles.secondStageText}>
				{status === 200
					? "Awesome, your item was put on profile."
					: "Sorry, something went wrong"}
			</p>
			{status === 200 ? (
				<Link
					href="/profile"
					className={styles.secondStageBtn}
				>
					View on profile
				</Link>
			) : null}
		</div>
	);
}
