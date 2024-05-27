import styles from "./UserInfoBlock.module.scss";
import Image from "next/image";
import { LinkSvgImage } from "@/shared/ui/icons/LinkSvgImage";
import { BufferSvg } from "@/shared/ui/icons/BufferSvg";
import type { IUser } from "@/entities/user/api/types";

interface IUserInfoBlock {
	userInfo: IUser;
}

export function UserInfoBlock({ userInfo }: IUserInfoBlock) {
	return (
		<div className={styles.userInfoBlock}>
			<Image
				className={styles.userCover}
				src={userInfo.cover}
				width={1200}
				height={300}
				alt="img"
			/>
			<div className={styles.userDataBlock}>
				<div className={styles.userCredentials}>
					<Image
						className={styles.userImg}
						src={userInfo.userImg}
						width={140}
						height={140}
						alt="img"
					/>
					<div className={styles.userNameId}>
						<span className={styles.userName}>{userInfo.name}</span>
						<span
							onClick={() => {
								void navigator.clipboard.writeText(userInfo.userId);
							}}
							className={styles.userId}
						>
							<span className={styles.onlineIndicator}></span>
							<p>{userInfo.userId}</p>
							<BufferSvg />
						</span>
					</div>
				</div>
				<button className={styles.shareButton}>
					<LinkSvgImage /> <p>Share profile</p>
				</button>
			</div>
		</div>
	);
}
