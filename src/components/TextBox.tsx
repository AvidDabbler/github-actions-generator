import React from "react";
import { useDispatch } from "react-redux";

interface ButtonPropsType {
	label: string;
	text: string;
	type: "string" | "number";
	action: Function;
	stateValue: string;
}

export const TextInput = ({ label, action, stateValue }: ButtonPropsType) => {
	const dispatch = useDispatch();
	return (
		<input
			name={label}
			type="text"
			className={``}
			value={stateValue}
			onChange={(e) => dispatch(action())}></input>
	);
};
