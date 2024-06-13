"use client";
import styles from "./UserInfoBlock.module.scss";
import Image from "next/image";
import { LinkSvgImage } from "@/shared/ui/icons/LinkSvgImage";
import { BufferSvg } from "@/shared/ui/icons/BufferSvg";
import { useDispatch } from "react-redux";
import { createPortal } from "react-dom";
import { login } from "@/app/store/loginSlice/loginSlice";
import { loadUser } from "@/entities/user/queries";
import { SessionExpiredModal } from "@/widgets/SessionExpiredModal";
import { useState } from "react";
import { UserInfoBlockSkeleton } from "@/widgets/UserInfoBlockSkeleton";
import { ShareProfileModal } from "../ShareProfileModal";
import { ChangeAvatarModal } from "../ChangeAvatarModal";
import { ChangeCover } from "@/features/user/ChangeCover";

export function UserInfoBlock() {
	const dispatch = useDispatch();
	const [sessionExpired, setSessionExpired] = useState<boolean>(true);
	const [shareProfileModal, setShareProfileModal] = useState(false);
	const [changeAvatarModal, setChangeAvatarModal] = useState(false);

	const { isLoading, isError, isSuccess, data, error } = loadUser();

	if (data?.status === 440) {
		return (
			<div>
				{sessionExpired &&
					createPortal(
						<SessionExpiredModal onClose={setSessionExpired} />,
						document.body
					)}
			</div>
		);
	}

	if (isLoading) return <UserInfoBlockSkeleton />;

	if (isError) return <p>{error.message}</p>;

	if (isSuccess && data.payload.accessToken !== undefined) {
		dispatch(
			login([
				data.payload.accessToken,
				data.payload.expiresAt,
				data?.payload.user
			])
		);
	}

	return (
		<>
			<div className={styles.userInfoBlock}>
				<ChangeCover img={data?.payload.user.cover} />
				<div className={styles.userDataBlock}>
					<div className={styles.userCredentials}>
						<Image
							className={styles.userImg}
							src={`data:image/png;base64, ${data?.payload.user.userImg}`}
							width={140}
							height={140}
							alt="img"
							onClick={() => setChangeAvatarModal((prev) => !prev)}
						/>
						<div className={styles.userNameId}>
							<span className={styles.userName}>{data?.payload.user.name}</span>
							<span
								onClick={() => {
									void navigator.clipboard.writeText(data?.payload.user.userId);
								}}
								className={styles.userId}
							>
								<span className={styles.onlineIndicator}></span>
								<p>{data?.payload.user.userId}</p>
								<BufferSvg />
							</span>
						</div>
					</div>
					<button
						onClick={() => setShareProfileModal((prev) => !prev)}
						className={styles.shareButton}
					>
						<LinkSvgImage /> <p>Share profile</p>
					</button>
					{shareProfileModal &&
						createPortal(
							<ShareProfileModal onClose={setShareProfileModal} />,
							document.body
						)}
					{changeAvatarModal &&
						createPortal(
							<ChangeAvatarModal onClose={setChangeAvatarModal} />,
							document.body
						)}
				</div>
			</div>
		</>
	);
}
