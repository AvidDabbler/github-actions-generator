export type OnTypes = "onPush" | "onPullRequest" | "onReviewAssigned";

export interface GithubTypes {
	onPush: boolean;
	onPullRequest: boolean;
	onReviewAssigned: boolean;
}

export interface InitialState {
	repoName: string;
	branchName: string;
	installCmd: string;
	buildCmd: string;
	on: GithubTypes;
}

export interface ButtonPropsType {
	text: string;
	actionKey: OnTypes;
}

export interface UpdateTextType {
	key: "repoName" | "installCmd" | "buildCmd" | "branchName";
	value: string;
}
export interface SwitchBooleanType {
	key: OnTypes;
}
