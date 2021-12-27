import React from "react";
import { RootState } from "../store";
import { useDispatch, useSelector } from "react-redux";
import { switchBoolean } from "../store/actions";
import { ButtonPropsType } from "../types";

export const Button = ({ text, actionKey }: ButtonPropsType) => {
	const dispatch = useDispatch();
	const isOn = useSelector((state: RootState) => state.userParams.on[actionKey])
		? "buttonOn"
		: "buttonOff";
	const isDark = useSelector((state: RootState) => state.colorParams.isDarkmode)
		? "dark"
		: "light";
	const color = useSelector(
		(state: RootState) => state.colorParams[isDark][isOn],
	);

	return (
		<button
			className={`p-2 rounded-md ${color} text-lg w-2/3 mx-3 flex flex-col`}
			onClick={() => dispatch(switchBoolean({ key: actionKey }))}>
			{text}
		</button>
	);
};
