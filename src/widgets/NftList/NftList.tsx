"use client";
import { ItemCard } from "@/entities/nft/ui/itemCard";
import styles from "./NftList.module.scss";
import { useSearchParams, useParams, usePathname } from "next/navigation";
import { InfiniteData, UseInfiniteQueryResult } from "@tanstack/react-query";
import { ItemCardSkeleton } from "@/entities/nft/ui/ItemCardSkeleton";
import type { INft } from "@/entities/nft/api/types";
import { useDispatch } from "react-redux";
import { login } from "@/app/store/loginSlice/loginSlice";

interface INftList {
	fetchFunc(
		category: string,
		searchQuery: string
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
	): UseInfiniteQueryResult<InfiniteData<any, unknown>, Error>;
}

export function NftList({ fetchFunc }: INftList) {
	const searchParams = useSearchParams();
	const searchQuery = searchParams?.get("search") as string;
	const category = useParams()?.category as string;
	const path = usePathname();
	const dispatch = useDispatch();

	const {
		data,
		isLoading,
		isError,
		error,
		fetchNextPage,
		hasNextPage,
		status
	} = fetchFunc(category, searchQuery);

	if (isLoading) return <p style={{ color: "black" }}>Loading...</p>;

	if (isError) return <p style={{ color: "black" }}>{`${error}`}</p>;

	// if (status === "success") {
	// 	dispatch(login([data.accessToken, data.expiresAt]));
	// }

	return (
		<div className={styles.nftItems}>
			<div className={styles.nftItemsContainer}>
				{data?.pages.map((page: { nfts: [] } | []) => {
					const path: [] = Array.isArray(page) ? page : page.nfts;
					return path.map((nft: INft) => {
						return (
							<ItemCard
								key={nft.id}
								category={category}
								item={nft}
							/>
						);
					});
				})}
				{path?.includes("profile") && <ItemCardSkeleton />}
			</div>
			<button
				className={
					hasNextPage ? styles.activeLoadMore : styles.disabledLoadMore
				}
				onClick={() => {
					fetchNextPage();
				}}
			>
				Load more
			</button>
		</div>
	);
}
