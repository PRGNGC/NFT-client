import type { INft } from "@/entities/nft/api/types"; // change

export interface IUser {
	userId: string;
	name: string;
	userImg: string;
	cover: string;
	nfts: INft[];
}
