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
			level: number;
			health: number;
			strength: number;
			morale: number;
			mana: number;
			gene: string;
		};
		property: {
			emotion: string;
			ears: string;
			antennas: string;
			tail: string;
			color: string;
			texture: string;
		};
	};
}

export interface IPlanetNft extends INft {
	nftCoordinates: string;
	nftDetails: {
		ownedBy: {
			owner: string;
			id: string;
			ownerImg: string;
		};
		found: string;
		specification: {
			residents: number;
			soldiers: number;
			wood: number;
			gold: number;
			iron: number;
			stone: number;
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
			ammo: number;
			speed: string;
			firingRange: string;
			reuse: string;
			waterproof: string;
			fireResistant: string;
		};
	};
}

export interface IBundleNft extends INft {
	nftLevelRequirement: number;
	nftDetails: {
		ownedBy: {
			owner: string;
			id: string;
			ownerImg: string;
		};
		usedFor: string[];
		specification: {
			ammo: number;
			speed: string;
			firingRange: string;
			reuse: string;
			waterproof: string;
			fireResistant: string;
		};
	};
}
