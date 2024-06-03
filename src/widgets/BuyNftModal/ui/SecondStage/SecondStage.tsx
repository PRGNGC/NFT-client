import styles from "./SecondStage.module.scss";
import Link from "next/link";
import { GreenTickSvg } from "@/shared/ui/icons/GreenTickSvg";
import { RedCrossSvg } from "@/shared/ui/icons/RedCrossSvg";

interface ISecondStage {
	response: Response;
}

export function SecondStage({ response }: ISecondStage) {
	console.log("SecondStage ~ response:", response);
	return (
		<div className={styles.secondStageContainer}>
			<div className={styles.statusSign}>
				{response.status === 200 ? <GreenTickSvg /> : <RedCrossSvg />}
			</div>
			<h1 className={styles.secondStageTitle}>
				{response.status === 200 ? "Congrats!" : "Error happened!"}
			</h1>
			<p className={styles.secondStageText}>
				{response.status === 200
					? "Awesome, your item was put on profile."
					: response.status === 401
						? "You should be logged in to buy nft!"
						: response.status === 440
							? "Your session expired! You need to login again!"
							: "Sorry, something went wrong!"}
			</p>
			{response.status === 200 ? (
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
