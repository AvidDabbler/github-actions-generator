import React from "react";
import { useDispatch } from "react-redux";

interface ButtonPropsType {
	label: string;
	action: Function;
	stateValue: string;
}

export const TextBox = ({ label, action, stateValue }: ButtonPropsType) => {
	const dispatch = useDispatch();
	return (
		<input name={label} type="text" className={``} value={stateValue}></input>
	);
};
