import { NftList } from "@/widgets/NftList";
import { loadNfts } from "@/entities/nft/queries";

export default function CategoryPage() {
	return <NftList fetchFunc={loadNfts} />;
}
