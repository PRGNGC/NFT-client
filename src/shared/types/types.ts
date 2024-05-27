export interface NftItem {
	id: string;
	nftImg: string;
	nftId: string;
	nftEthPrice: number;
	nftName: string;
	nftTrait?: string;
	nftCoordinates?: string;
	nftLevelRequirement?: number;
	nftPossibleUsers?: string[];
	nftType?: string;
}

export interface ParamsType {
	category: string;
	nft: string;
}
