export async function loginApi(login: string, password: string) {
	const response = await fetch("http://localhost:4000/api/login", {
		method: "POST",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify({ login: login, password: password }),
		credentials: "include"
	});

	return response;
}

export async function signupApi(login: string, password: string, name: string) {
	const response = await fetch("http://localhost:4000/api/signup", {
		method: "POST",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify({
			login: login,
			password: password,
			name: name
		}),
		credentials: "include"
	});

	return response;
}

export async function logoutApi(accessToken: string) {
	await fetch("http://localhost:4000/api/logout", {
		method: "POST",
		body: JSON.stringify({ accessToken: accessToken }),
		credentials: "include"
	});
}
