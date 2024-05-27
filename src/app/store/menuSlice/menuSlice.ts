import { createSlice } from "@reduxjs/toolkit";

interface InitialStateType {
	value: boolean;
}

const initialState: InitialStateType = {
	value: false
};

export const menuSlice = createSlice({
	name: "menu",
	initialState,
	reducers: {
		close: (state) => {
			state.value = false;
		},
		open: (state) => {
			state.value = true;
		},
		change: (state) => {
			state.value = !state.value;
		}
	}
});

export const { close, open, change } = menuSlice.actions;

export default menuSlice.reducer;
