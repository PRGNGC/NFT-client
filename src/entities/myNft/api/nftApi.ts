import type { INft } from "./types";
import { axiosInstance } from "@/shared/api/axiosInstance";
import store from "@/app/store/store";

export async function getNfts(
	{ pageParam }: { pageParam: number },
	category: string,
	search?: string
) {
	const url: string = search
		? `/own/${category}?nextSearchIndex=${pageParam}&search=${search}`
		: `/own/${category}?page=${pageParam}`;

	const response = await axiosInstance.get(url);

	// 	const response = await fetch(url, {
	// 	method: "GET",
	// 	headers: {
	// 		"Content-Type": "application/json"
	// 		// authorization: `Bearer ${accessToken}`
	// 	},
	// 	credentials: "include"
	// });
	return response.data;
}
// export async function getNfts(
// 	{ pageParam }: { pageParam: number },
// 	category: string,
// 	search?: string
// ) {
// 	const url: string = search
// 		? `http://localhost:4000/api/own/${category}?nextSearchIndex=${pageParam}&search=${search}`
// 		: `http://localhost:4000/api/own/${category}?page=${pageParam}`;

// 	const response = await fetch(url, {
// 		method: "GET",
// 		headers: {
// 			"Content-Type": "application/json"
// 			// authorization: `Bearer ${accessToken}`
// 		},
// 		credentials: "include"
// 	});
// 	return await response.json();
// }

export async function buyNft(nft: INft) {
	const accessToken = store.getState().login.accessToken;
	const url = "http://localhost:4000/api/own/characters/add";
	// const url = "/own/characters/add";

	// const response = await axiosInstance.post(url, {
	// 	nft: nft
	// });

	const response = await fetch(url, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			authorization: `Bearer ${accessToken}`
		},
		body: JSON.stringify({
			nft: nft
		}),
		credentials: "include"
	});

	return response;
}
