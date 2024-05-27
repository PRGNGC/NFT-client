"use client";
import styles from "./SimilarNftsSlider.module.scss";
import Link from "next/link";
import { RightArrowSvgImg } from "@/shared/ui/icons/RightArrowSvgImg";
import { LeftArrowSvgImg } from "@/shared/ui/icons/LeftArrowSvgImg";
import type { INft } from "@/entities/nft/api/types";
import { loadNftsForSlider } from "@/entities/nft/queries";
import { useParams } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./slider.scss";
import { ItemCard } from "@/entities/nft/ui/itemCard";
import { useRef } from "react";

interface ISimilarNftsSlider {
	nfts: string[];
}

export function SimilarNftsSlider({ nfts }: ISimilarNftsSlider) {
	const category = useParams()?.category as string;
	const { isLoading, isError, error, data } = loadNftsForSlider(category, nfts);
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const swiperRef = useRef<any>(null);

	if (isLoading) {
		<div>Loading..</div>;
	}
	if (isError) {
		<div>{error.message}</div>;
	}

	return (
		<div className={styles.similarNftsBlock}>
			<div className={styles.similarNftsHeader}>
				<h3 className={styles.similarNftsTitle}>You may also like</h3>
				<Link
					className={styles.similarNftsLink}
					href="/marketplace"
				>
					<p>View all nfts</p>
					<RightArrowSvgImg />
				</Link>
			</div>
			<div className={styles.similarNftsSlider}>
				<Swiper
					loop={true}
					onSwiper={(swiper) => {
						swiperRef.current = swiper;
					}}
					breakpoints={{
						640: {
							slidesPerView: 2,
							spaceBetween: 20
						},
						768: {
							slidesPerView: 4,
							spaceBetween: 40
						},
						1024: {
							slidesPerView: 3,
							spaceBetween: 125
						}
					}}
					className={styles.sliderBlock}
				>
					{data?.map((item: INft) => {
						return (
							<SwiperSlide>
								<ItemCard
									item={item}
									category={category}
								/>
							</SwiperSlide>
						);
					})}
				</Swiper>
				<div className={styles.sliderArrows}>
					<span onClick={() => swiperRef.current.slidePrev()}>
						<LeftArrowSvgImg />
					</span>
					<span onClick={() => swiperRef.current.slideNext()}>
						<RightArrowSvgImg />
					</span>
				</div>
			</div>
		</div>
	);
}
