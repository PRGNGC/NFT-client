import { NftNavigation } from "@/widgets/NftNavigation";
import { NftList } from "@/widgets/NftList";
import { loadNfts } from "@/entities/myNft/queries";
import { UserInfoBlock } from "@/widgets/UserInfoBlock";
import styles from "./Profile.module.scss";

export function Profile() {
	return (
		<div className={styles.profileBlock}>
			<div className={styles.profileBlockContainer}>
				<UserInfoBlock />
				<div className={styles.profileNfts}>
					<NftNavigation />
					<NftList fetchFunc={loadNfts} />
				</div>
			</div>
		</div>
	);
}
