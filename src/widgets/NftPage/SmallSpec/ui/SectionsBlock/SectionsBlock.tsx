"use client";
import styles from "./SectionsBlock.module.scss";
import { DescriptionSection } from "../DescriptionSection";
import { DetailsSection } from "../DetailsSection";
import { HistorySection } from "../HistorySection";
import { useState } from "react";
import { INft } from "@/entities/nft/api/types";

interface ISectionsBlock {
	nft: INft;
}

export function SectionsBlock({ nft }: ISectionsBlock) {
	const [currentSection, setCurrentSection] = useState<string>("Description");

	return (
		<div className={styles.sectionsBlock}>
			<div className={styles.section}>
				<p
					className={
						currentSection === "Description"
							? styles.activeSection
							: styles.commonSection
					}
					onClick={() => setCurrentSection("Description")}
				>
					Description
				</p>
				<p
					className={
						currentSection === "Details"
							? styles.activeSection
							: styles.commonSection
					}
					onClick={() => setCurrentSection("Details")}
				>
					Details
				</p>
				<p
					className={
						currentSection === "History"
							? styles.activeSection
							: styles.commonSection
					}
					onClick={() => setCurrentSection("History")}
				>
					History
				</p>
			</div>
			<div className={styles.sectionInfo}>
				{currentSection === "Description" && <DescriptionSection nft={nft} />}
				{currentSection === "Details" && <DetailsSection nft={nft} />}
				{currentSection === "History" && <HistorySection nft={nft} />}
			</div>
		</div>
	);
}
