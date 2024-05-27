import { createSlice } from "@reduxjs/toolkit";

interface ILoginSlice {
	accessToken: string | null;
}

const initialState: ILoginSlice = {
	accessToken: null
};

const loginSlice = createSlice({
	name: "login",
	initialState,
	reducers: {
		login: (state, action) => {
			state.accessToken = action.payload;
		},
		logout: (state) => {
			state.accessToken = null;
		}
	}
});

export const { login, logout } = loginSlice.actions;

export default loginSlice.reducer;
