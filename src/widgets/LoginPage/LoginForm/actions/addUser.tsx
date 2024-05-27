"use server";
import { cookies } from "next/headers";

export async function addUser(data: FormData) {
	const userLogin = data.get("userLogin");
	const userPassword = data.get("userPassword");

	// console.log(userLogin);
	// console.log(userPassword);

	const response = await fetch("http://localhost:4000/api/login", {
		method: "POST",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify({ login: userLogin, password: userPassword }),
		credentials: "include"
	});
	// console.log("Document cookie" + document.cookie);

	const user = await response.json();

	const expires = new Date(Date.now() + 10 * 1000);

	cookies().set("connect.sid", user.sessionID, { expires, httpOnly: true });
}

//   console.log(user);
// console.log("Cookies - " + user.cookies);
// console.log("SessionID - " + user.sessionID);
// console.log("User - " + user.id);
