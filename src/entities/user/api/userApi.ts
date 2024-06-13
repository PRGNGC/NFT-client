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

	return {
		status: response.status,
		payload: await response.json()
	};
}

export async function updateUser(
	newName?: string | "_",
	newUserName?: string | "_",
	newUserImg?: File | "_",
	newCover?: File | "_"
) {
	const accessToken = store.getState().login.accessToken;

	const formData = new FormData();
	if (newUserImg && newUserImg !== "_") {
		formData.append("avatar", newUserImg);
	}
	if (newCover && newCover !== "_") {
		formData.append("cover", newCover);
	}
	if (newName && newName !== "_") {
		formData.append("name", newName);
	}
	if (newUserName && newUserName !== "_") {
		formData.append("userName", newUserName);
	}

	const response = await fetch(`http://localhost:4000/api/user/update`, {
		method: "POST",
		headers: {
			authorization: `Bearer ${accessToken}`
		},
		body: formData,
		credentials: "include"
	});

	return response.status;
}
