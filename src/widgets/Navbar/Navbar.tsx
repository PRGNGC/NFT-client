"use client";
import styles from "./Navbar.module.scss";
import { Logo } from "./Logo";
import { MenuBurger } from "./MenuBurger";
import { PlayButton } from "./PlayButton";
import { Console } from "./Console";
import { NavMenu } from "./NavMenu";

export function Navbar() {
	return (
		<div className={styles.navbarBlock}>
			<NavMenu />
			<div className={styles.navbarContainer}>
				<MenuBurger />
				<Logo />
				<PlayButton />
				<Console />
			</div>
		</div>
	);
}
