import store from "@/app/store/store";

export async function getUser() {
	const accessToken = store.getState().login.accessToken;

	const response = await fetch(`http://localhost:4000/api/user`, {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
			authorization: `Bearer ${accessToken}`
		},
		credentials: "include"
	});

	return await response.json();
}
