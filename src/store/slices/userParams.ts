import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface GithubTypes {
	onPush: boolean;
	onPullRequest: boolean;
	onReviewAssigned: boolean;
}

export interface InitialState {
	repoName: string;
	branchName: string;
	updateOn: GithubTypes;
	installCmd: string;
	buildCmd: string;
}

interface UpdateTextType {
	key: "repoName" | "branchName" | "installCmd" | "buildCmd";
	value: string;
}

const initialGithub: GithubTypes = {
	onPush: false,
	onPullRequest: false,
	onReviewAssigned: false,
};

const initialState: InitialState = {
	repoName: "",
	branchName: "",
	updateOn: initialGithub,
	installCmd: "npm i",
	buildCmd: "npm run build",
};

export const userParamsSlice = createSlice({
	name: "userParams",
	initialState,
	reducers: {
		updateText: (state, action: PayloadAction<UpdateTextType>) => {
			state[action.payload.key] = action.payload.value;
		},
	},
});

// Action creators are generated for each case reducer function
export const { updateText } = userParamsSlice.actions;

export default userParamsSlice.reducer;
