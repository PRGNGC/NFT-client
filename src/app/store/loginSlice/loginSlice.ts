import { IUser } from "@/entities/user/api/types";
import { createSlice } from "@reduxjs/toolkit";

interface ILoginSlice {
	accessToken: string | null;
	expiresAt: number | null;
	user: IUser;
}

const initialState: ILoginSlice = {
	accessToken: null,
	expiresAt: null,
	user: {} as IUser
};

const loginSlice = createSlice({
	name: "login",
	initialState,
	reducers: {
		login: (state, action) => {
			state.accessToken = action.payload[0];
			state.expiresAt = action.payload[1];
			state.user = action.payload[2];
		},
		logout: (state) => {
			state.accessToken = null;
			state.expiresAt = null;
			state.user = {} as IUser;
		}
	}
});

export const { login, logout } = loginSlice.actions;

export default loginSlice.reducer;
