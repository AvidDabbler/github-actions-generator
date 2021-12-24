import { Button } from "./components";

export default function App() {
	return (
		<div className="w-full h-screen m-auto p-12 bg-blue-200">
			<div className="w-full h-full m-auto p-12 bg-blue-300 text-4xl font-bold underline">
				<h2 className="m-auto text-center">Let's generate a Github Action</h2>
				<Button text={"hey there"} />
			</div>
		</div>
	);
}
