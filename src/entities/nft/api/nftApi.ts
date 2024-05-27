export async function getNfts(
	{ pageParam }: { pageParam: number },
	category: string,
	search?: string
) {
	const url: string = search
		? `http://localhost:4000/api/${category}?nextSearchIndex=${pageParam}&search=${search}`
		: `http://localhost:4000/api/${category}?page=${pageParam}`;

	const response = await fetch(url);
	return await response.json();
}

export async function getNftsForSlider(category: string, nfts: string[]) {
	const url = `http://localhost:4000/api/${category}/slider`;

	const response = await fetch(url, {
		method: "POST",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify({
			nfts: nfts
		})
	});
	return await response.json();
}
