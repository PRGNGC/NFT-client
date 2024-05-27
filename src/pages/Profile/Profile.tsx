import { NftNavigation } from "@/widgets/NftNavigation";
import { NftList } from "@/widgets/NftList";
import { loadNfts } from "@/entities/myNft/queries";

export function Profile() {
	return (
		<div
			style={{ backgroundColor: "white" }}
			className="profile"
		>
			<NftNavigation />
			<NftList fetchFunc={loadNfts} />
		</div>
	);
}
