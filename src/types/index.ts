export type OnTypes = "onPush" | "onPullRequest" | "onReviewAssigned";
export type RepoParams = "branchName" | "repoName" | "installCmd" | "buildCmd";
export type AWSParams = "s3Location";

export interface GithubTypes {
	onPush: boolean;
	onPullRequest: boolean;
	onReviewAssigned: boolean;
}

export interface InitialState {
	repoName: string;
	branchName: string;
	s3Location: string;
	installCmd: string;
	buildCmd: string;
	on: GithubTypes;
	page: string;
}

export interface ButtonPropsType {
	text: string;
	actionKey: OnTypes;
}
export interface LinkButtonProps {
	text: string;
	to: string;
}

export interface UpdateTextType {
	key: RepoParams | AWSParams;
	value: string;
}
export interface SwitchBooleanType {
	key: OnTypes;
}
