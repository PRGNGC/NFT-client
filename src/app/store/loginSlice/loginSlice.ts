import { createSlice } from "@reduxjs/toolkit";

interface ILoginSlice {
	accessToken: string | null;
	expiresAt: number | null;
}

const initialState: ILoginSlice = {
	accessToken: null,
	expiresAt: null
};

const loginSlice = createSlice({
	name: "login",
	initialState,
	reducers: {
		login: (state, action) => {
			state.accessToken = action.payload[0];
			console.log("state.accessToken:", state.accessToken);
			state.expiresAt = action.payload[1];
			console.log("state.expiresAt:", state.expiresAt);
		},
		logout: (state) => {
			state.accessToken = null;
			state.expiresAt = null;
		}
	}
});

export const { login, logout } = loginSlice.actions;

export default loginSlice.reducer;
