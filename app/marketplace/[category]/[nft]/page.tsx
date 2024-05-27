import { getNft } from "@/shared/api/getNft";
import { NftItemPage } from "@/pages/NftIItemPage";

interface ParamsType {
	category: string;
	nft: string;
}

interface NftPageType {
	params: ParamsType;
}

export default async function NftPage({ params }: NftPageType) {
	const nftData = await getNft(params.category, params.nft);
	return <NftItemPage nftItem={nftData} />;
}
