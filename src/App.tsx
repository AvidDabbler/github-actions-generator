import { Button } from "./components";
import { RootState } from "./store";
import { updateText, switchBoolean } from "./store/actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

export default function App() {
	const dispatch = useDispatch();

	// useEffect(()=>{
	//   console.log(userSettings)
	//   console.log(colorSettings)
	// },[])

	return (
		<div className="w-full h-screen m-auto p-12 bg-blue-200">
			<div className="w-full h-full m-auto p-12 bg-blue-300 flex flex-col ">
				<h2 className="text-center">Let's generate a Github Action</h2>
				<label className="flex flex-col mx-auto my-5 w-2/3">
					<span className="m-auto">Repo Name</span>
					<input
						className=" mx-auto p-3 w-full"
						type="text"
						name="Repo Name"
						onChange={(e) =>
							dispatch(updateText({ key: "repoName", value: e.target.value }))
						}
					/>
				</label>
				<label className="flex flex-col mx-auto my-5 w-2/3">
					<span className="m-auto">Branch Name</span>
					<input
						className=" mx-auto p-3 w-full"
						type="text"
						name="Branch Name"
						onChange={(e) =>
							dispatch(updateText({ key: "branchName", value: e.target.value }))
						}
					/>
				</label>
				<div className="w-8/12 flex flex-col mx-auto">
					<h3 className="text-center">Select the Trigger Actions</h3>
					<div className="w-100 flex flex-row">
						<Button actionKey="onPush" text={"Push"} />
						<Button actionKey="onPullRequest" text={"Pull Request"} />
						<Button actionKey="onReviewAssigned" text={"Review Assigned"} />
					</div>
				</div>
			</div>
		</div>
	);
}
