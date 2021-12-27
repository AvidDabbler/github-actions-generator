import React from "react";
import { useDispatch } from "react-redux";
import { updateText } from "../store/actions";
import { AWSParams, RepoParams } from "../types";

interface TextBoxTypes {
	label: string;
	type: string;
	stateValue: RepoParams | AWSParams;
}

export const TextBox = ({ type, label, stateValue }: TextBoxTypes) => {
	const dispatch = useDispatch();
	return (
		<label className="flex flex-col mx-auto my-5 w-2/3">
			<span className="m-auto">{label}</span>
			<input
				required={true}
				className=" mx-auto p-3 w-full"
				type={type}
				name={label}
				onChange={(e) =>
					dispatch(updateText({ key: stateValue, value: e.target.value }))
				}
			/>
		</label>
	);
};
