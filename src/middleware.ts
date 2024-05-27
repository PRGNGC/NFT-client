import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export default function middleware(req: NextRequest) {
	// const verify = req.cookies.get("connect.sid"); // for session authentication
	const verify = req.cookies.get("refreshToken"); // for JWT authentication
	const url = req.url;

	if (url === "http://localhost:3000/marketplace") {
		return NextResponse.redirect(
			"http://localhost:3000/marketplace/characters"
		);
	}

	if (verify && url === "http://localhost:3000/profile") {
		return NextResponse.redirect("http://localhost:3000/profile/characters");
	}

	if (!verify && url.includes("/profile")) {
		return NextResponse.redirect("http://localhost:3000/login");
	}

	if (
		verify &&
		(url === "http://localhost:3000/login" ||
			url === "http://localhost:3000/signup")
	) {
		return NextResponse.redirect("http://localhost:3000/profile");
	}
}
