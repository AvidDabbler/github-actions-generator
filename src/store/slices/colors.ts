import { createSlice } from "@reduxjs/toolkit";

export interface ColorMode {
	background: string;
	buttonOff: string;
	buttonOn: string;
	textInput: string;
	fontColor: string;
}

export interface InitialState {
	isDarkmode: boolean;
	light: ColorMode;
	dark: ColorMode;
}

const colorState: InitialState = {
	isDarkmode: false,
	dark: {
		background: "dark-grey",
		buttonOn: "dark-green",
		buttonOff: "dark-red",
		textInput: "dark-grey",
		fontColor: "lime-green",
	},
	light: {
		background: "white",
		buttonOn: "bg-green-900",
		buttonOff: "bg-blue-200",
		textInput: "grey",
		fontColor: "black",
	},
};

export const colorSlice = createSlice({
	name: "colors",
	initialState: colorState,
	reducers: {
		switchColors: (state) => {
			state.isDarkmode = !state.isDarkmode;
		},
	},
});

// Action creators are generated for each case reducer function
export const { switchColors } = colorSlice.actions;

export default colorSlice.reducer;
