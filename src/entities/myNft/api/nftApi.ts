import type { INft } from "./types";

export async function getNfts(
	{ pageParam }: { pageParam: number },
	category: string,
	search?: string
) {
	const url: string = search
		? `http://localhost:4000/api/own/${category}?nextSearchIndex=${pageParam}&search=${search}`
		: `http://localhost:4000/api/own/${category}?page=${pageParam}`;

	const response = await fetch(url, {
		method: "GET",
		headers: {
			"Content-Type": "application/json"
		},
		credentials: "include"
	});
	return await response.json();
}

export async function buyNft(nft: INft) {
	const url = "http://localhost:4000/api/own/characters/add";

	const response = await fetch(url, {
		method: "POST",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify({
			nft: nft
		}),
		credentials: "include"
	});

	return await response.json();
}
