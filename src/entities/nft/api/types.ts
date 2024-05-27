export interface INft {
	id: string;
	nftImg: string;
	nftId: string;
	nftEthPrice: number;
	nftName: string;
	nftDescription: string;
	nftCategory: string;
	nftType: string;
	nftTraits?: string[];
	similarNfts: string[];
	history: {
		user: string;
		date: string;
		time: string;
		userAvatar: string;
		actionType: string;
		priceETH: string;
	}[];
}

export interface ICharacterNft extends INft {
	nftDetails: {
		ownedBy: {
			owner: string;
			id: string;
			ownerImg: string;
		};
		location: {
			planet: string;
			city: string;
			planetImg: string;
		};
		created: string;
		specification: {
			level: { field: string; value: number; img: string };
			health: { field: string; value: number; img: string };
			strength: { field: string; value: number; img: string };
			morale: { field: string; value: number; img: string };
			mana: { field: string; value: number; img: string };
			gene: { field: string; value: string; img: string };
		};
		property: {
			emotion: { field: string; value: string };
			ears: { field: string; value: string };
			antennas: { field: string; value: string };
			tail: { field: string; value: string };
			color: { field: string; value: string };
			texture: { field: string; value: string };
		};
	};
}

export interface IPlanetNft extends INft {
	nftSystem: string;
	nftCoordinates: string;
	nftDetails: {
		ownedBy: {
			owner: string;
			id: string;
			ownerImg: string;
		};
		found: string;
		specification: {
			residents: { field: string; value: number; img: string };
			soldiers: { field: string; value: number; img: string };
			wood: { field: string; value: number; img: string };
			gold: { field: string; value: number; img: string };
			iron: { field: string; value: number; img: string };
			stone: { field: string; value: number; img: string };
		};
	};
}

export interface IItemNft extends INft {
	nftLevelRequirement: number;
	nftDetails: {
		ownedBy: {
			owner: string;
			id: string;
			ownerImg: string;
		};
		usedBy: {
			user: string;
			planet: string;
			userImg: string;
		};
		created: string;
		specification: {
			ammo: { field: string; value: number; img: string };
			speed: { field: string; value: string; img: string };
			firingRange: { field: string; value: string; img: string };
			reuse: { field: string; value: string; img: string };
			waterproof: { field: string; value: string; img: string };
			fireResistant: { field: string; value: string; img: string };
		};
	};
}

export interface IBundleNft extends INft {
	nftLevelRequirement: number;
	itemsInBundle: string[];
	nftDetails: {
		ownedBy: {
			owner: string;
			id: string;
			ownerImg: string;
		};
		usedFor: string[];
		specification: {
			ammo: { field: string; value: number; img: string };
			speed: { field: string; value: string; img: string };
			firingRange: { field: string; value: string; img: string };
			reuse: { field: string; value: string; img: string };
			waterproof: { field: string; value: string; img: string };
			fireResistant: { field: string; value: string; img: string };
		};
	};
}
