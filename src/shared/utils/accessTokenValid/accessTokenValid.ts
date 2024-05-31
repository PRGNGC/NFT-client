import { useSelector } from "react-redux";
import { RootState } from "@/app/store/store";

export function accessTokenValid() {
	const expiresAt = useSelector(
		(state: RootState) => state.login.expiresAt
	) as number;

	const currentTime = Number((new Date().getTime() / 1000).toFixed(0));
	const isAccessTokenValid = currentTime >= expiresAt ? true : false;

	return isAccessTokenValid ? true : false;
}
