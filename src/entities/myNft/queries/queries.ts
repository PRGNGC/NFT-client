"use client";

import { useInfiniteQuery } from "@tanstack/react-query";
import { getNfts } from "../api";

export function loadNfts(category: string, search?: string) {
	return useInfiniteQuery({
		queryKey: [category, category, search],
		queryFn: ({ pageParam }) => getNfts({ pageParam }, category, search),
		initialPageParam: search ? 0 : 1,
		getNextPageParam: (lastPage, _, lastPageParam) => {
			const lastPageCount = search ? lastPage.nfts?.length : lastPage.length;
			if (lastPageCount <= 4) return null;
			return !search ? lastPageParam + 1 : lastPage.nextSearchIndex;
		}
	});
}
