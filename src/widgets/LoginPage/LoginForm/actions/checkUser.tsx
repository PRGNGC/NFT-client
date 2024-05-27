"use server";

export async function checkCookie() {
	const cookie = await fetch("http://localhost:4000/api/login/status", {
		headers: {
			cookie: ""
		}
	});

	// const cookies = cookiess.getAll();

	// console.log("All cookies - " + cookies);

	const cookieInfo = await cookie.json();
	console.log("SessionID - " + cookieInfo.sessionID);
}
