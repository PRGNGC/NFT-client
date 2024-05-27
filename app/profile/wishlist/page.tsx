"use client";

import { useSelector } from "react-redux";
import { RootState } from "@/app/store/store";

export default function MyNftPage() {
	const accessToken = useSelector(
		(state: RootState) => state.login.accessToken
	);
	console.log("Profile page access token - " + accessToken);

	return <p>Wishlist page</p>;
}
