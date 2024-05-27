"use client";
import styles from "./SearchNfts.module.scss";
import Image from "next/image";
import { useRouter, useSearchParams, usePathname } from "next/navigation";

export function SearchNfts() {
	const { push } = useRouter();
	const path = usePathname();
	const searchParams = useSearchParams();

	function handleOnChange(search: string) {
		if (search.length === 0) {
			push(`${path}`);
			// push(`/${params?.category}`);
		}
		if (search.length !== 0) {
			push("?search=" + search);
		}
	}

	return (
		<div className={styles.nftSearchBlock}>
			<Image
				src="/icons/magnify-glass.svg"
				alt="glass"
				width={24}
				height={24}
			/>
			<input
				placeholder="Search character, planet, item..."
				className={styles.nftSearch}
				type="search"
				defaultValue={
					searchParams?.get("search")
						? (searchParams.get("search") as string)
						: ""
				}
				onChange={(e) => {
					handleOnChange(e.target.value);
				}}
			/>
		</div>
	);
}
