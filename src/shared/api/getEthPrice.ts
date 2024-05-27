import axios from "axios";

async function getEthPrice() {
	const response = await axios.get(
		"https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=BTC,USD,EUR"
	);
	return response.data;
}

export { getEthPrice };
