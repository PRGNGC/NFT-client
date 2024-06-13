import styles from "./UserAvatar.module.scss";
import Image from "next/image";
import Link from "next/link";
// hooks
import { LandscapeSvg } from "@/shared/ui/icons/LandscapeSvg";
import { HeartSvg } from "@/shared/ui/icons/HeartSvg";
import { PencilSvg } from "@/shared/ui/icons/PencilSvg";
import { GearSvg } from "@/shared/ui/icons/GearSvg";
import { TickSvg } from "@/shared/ui/icons/TickSvg";
import { RightArrowSvgImg } from "@/shared/ui/icons/RightArrowSvgImg";
import { SunSvg } from "@/shared/ui/icons/SunSvg";
import { MoonSvg } from "@/shared/ui/icons/MoonSvg";
// svg
import { useState } from "react";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { logoutApi } from "@/entities/session/api";
import { logout } from "@/app/store/loginSlice/loginSlice";
import { RootState } from "@/app/store/store";

export function UserAvatar() {
	const user = useSelector((state: RootState) => state.login.user);
	const [menuStatus, setMenuStatus] = useState<boolean | null>(false);
	const page = usePathname()?.split("/");
	const dispatch = useDispatch();
	const router = useRouter();

	return (
		<div className={styles.userAvatarBlock}>
			<Image
				className={styles.userAvatar}
				// src={user?.userImg}
				// src={"/images/label.png"}
				src={`data:image/png;base64, ${user?.userImg}`}
				width={38}
				height={38}
				alt="img"
				onClick={() => setMenuStatus((prev) => !prev)}
			/>
			{menuStatus && (
				<div className={styles.userAvatarMenu}>
					<Link
						onClick={() => setMenuStatus((prev) => !prev)}
						className={styles.userNameTag}
						href={"/profile"}
					>
						<p className={styles.userName}>
							{user?.name} <TickSvg />
						</p>
						<p className={styles.userTag}>
							{`@${user?.name.split(" ").join("").toLowerCase()}`}
						</p>
					</Link>
					<hr />
					<ul className={styles.linksBlock}>
						<Link
							onClick={() => setMenuStatus((prev) => !prev)}
							className={
								page?.includes("profile") && page?.includes("mynft")
									? styles.activePageLink
									: styles.pageLink
							}
							href={"/profile/mynft"}
						>
							<div className={styles.pageName}>
								<LandscapeSvg />
								<p>My NFT</p>
							</div>
							<TickSvg />
						</Link>
						<Link
							onClick={() => setMenuStatus((prev) => !prev)}
							className={
								page?.includes("profile") && page?.includes("wishlist")
									? styles.activePageLink
									: styles.pageLink
							}
							href={"/profile/wishlist"}
						>
							<div className={styles.pageName}>
								<HeartSvg />
								<p>Wishlist</p>
							</div>
							<TickSvg />
						</Link>
					</ul>

					<hr />

					<ul className={styles.linksBlock}>
						<Link
							onClick={() => setMenuStatus((prev) => !prev)}
							className={
								page?.includes("profile") && page?.includes("editprofile")
									? styles.activePageLink
									: styles.pageLink
							}
							href={"/profile/editprofile"}
						>
							<div className={styles.pageName}>
								<PencilSvg />
								<p>Edit profile</p>
							</div>
							<TickSvg />
						</Link>
						<Link
							onClick={() => setMenuStatus((prev) => !prev)}
							className={
								page?.includes("profile") && page?.includes("settings")
									? styles.activePageLink
									: styles.pageLink
							}
							href={"/profile/settings"}
						>
							<div className={styles.pageName}>
								<GearSvg />
								<p>Settings</p>
							</div>
							<TickSvg />
						</Link>
					</ul>
					<hr />
					<div className={styles.themeSwitcherBlock}>
						<div className={styles.themeSwitchers}>
							<span className={styles.activeLightSwitcher}>
								<SunSvg />
								Light
							</span>
							<span className={styles.darkSwitcher}>
								<MoonSvg />
								Dark
							</span>
						</div>
					</div>
					<div className={styles.btnBlock}>
						<Link
							href={"/"}
							className={styles.playButton}
						>
							Play game
							<RightArrowSvgImg />
						</Link>
						<button
							className={styles.logoutButton}
							onClick={async () => {
								// SESSION AUTHENTICATION
								// const res = await fetch("http://localhost:4000/api/logout", {
								//   credentials: "include",
								// });
								// router.push("/");

								//JWT AUTHENTICATION
								dispatch(logout());
								logoutApi();
								setMenuStatus((prev) => !prev);
								if (page?.includes("profile")) {
									router.push("/");
								}
							}}
						>
							Log out
						</button>
					</div>
				</div>
			)}
		</div>
	);
}
