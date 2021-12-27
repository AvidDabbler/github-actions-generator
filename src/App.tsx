import { BooleanButton } from "./components";
import { LinkButton } from "./components/Button";
import { TextBox } from "./components/TextBox";

export default function App() {
	return (
		<div className="w-full h-screen m-auto p-12 bg-blue-200">
			<div className="w-full h-full m-auto p-12 bg-blue-300 flex flex-col ">
				<h2 className="text-center">Let's generate a Github Action</h2>
				<TextBox type="text" label="Repo Name" stateValue="repoName" />
				<TextBox type="text" label="Branch Name" stateValue="branchName" />
				<TextBox type="text" label="S3 Location" stateValue="s3Location" />
				<div className="w-8/12 flex flex-col mx-auto">
					<h3 className="text-center">Select the Trigger Actions</h3>
					<div className="w-100 flex flex-row">
						<BooleanButton actionKey="onPush" text={"Push"} />
						<BooleanButton actionKey="onPullRequest" text={"Pull Request"} />
						<BooleanButton
							actionKey="onReviewAssigned"
							text={"Review Assigned"}
						/>
					</div>
				</div>
				<LinkButton text="next" to="PageTwo" />
			</div>
		</div>
	);
}
