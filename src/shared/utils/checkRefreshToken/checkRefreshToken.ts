import { cookies } from "next/headers";

export function checkRefreshToken() {
	const refreshToken = String(cookies().get("refreshToken"));
	const jwtPayload = JSON.parse(window.atob(refreshToken.split(".")[1]));
	return Date.now() >= jwtPayload.exp * 1000;
}
