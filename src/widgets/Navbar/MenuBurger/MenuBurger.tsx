import styles from "./MenuBurger.module.scss";
import { useDispatch } from "react-redux";
import { change } from "@/app/store/menuSlice/menuSlice";
import Link from "next/link";

export function MenuBurger() {
	const dispatch = useDispatch();

	return (
		<div
			onClick={() => {
				if (window.innerWidth > 768) return;
				dispatch(change());
			}}
			className={styles.menuBurgerBlock}
		>
			<div className={styles.menuBurger}>
				<div className={styles.burger}>
					<span></span>
					<span></span>
				</div>
				<nav className={styles.menuBlock}>
					<ul className={styles.menuList}>
						<Link
							href="/marketplace/characters"
							className={styles.menuItem}
						>
							Marketplace
						</Link>
						<Link
							href="/"
							className={styles.menuItem}
						>
							Game play
						</Link>
						<Link
							href="/"
							className={styles.menuItem}
						>
							Feature & benefits
						</Link>
						<Link
							href="/"
							className={styles.menuItem}
						>
							Roadmap
						</Link>
					</ul>
				</nav>
			</div>
		</div>
	);
}
