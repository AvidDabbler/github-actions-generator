import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
	GithubTypes,
	InitialState,
	UpdateTextType,
	SwitchBooleanType,
} from "../../types";

// interface UpdateArrayType {
// 	key: "branchesName" | "ignoreBranchesName";
// 	value: Array<string>;
// }

const initialGithub: GithubTypes = {
	onPush: false,
	onPullRequest: false,
	onReviewAssigned: false,
};

const initialState: InitialState = {
	repoName: "",
	branchName: "",
	on: initialGithub,
	installCmd: "npm i",
	buildCmd: "npm run build",
};

export const userParamsSlice = createSlice({
	name: "userParams",
	initialState: initialState,
	reducers: {
		updateText: (state, action: PayloadAction<UpdateTextType>) => {
			state[action.payload.key] = action.payload.value;
		},
		switchBoolean: (state, action: PayloadAction<SwitchBooleanType>) => {
			state.on[action.payload.key] = !state.on[action.payload.key];
		},
	},
});

// Action creators are generated for each case reducer function
export const { updateText, switchBoolean } = userParamsSlice.actions;

export default userParamsSlice.reducer;
