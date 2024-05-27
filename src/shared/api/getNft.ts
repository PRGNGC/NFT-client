import axios from "axios";

async function getNft(category: string, id: string) {
	const response = await axios.get(
		`http://localhost:4000/api/${category}/${id}`
	);
	return response.data;
}

export { getNft };
