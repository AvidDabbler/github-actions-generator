import React from "react";
import { RootState } from "../store";
import { useDispatch, useSelector } from "react-redux";
import { switchBoolean, switchPage } from "../store/actions";
import { ButtonPropsType, LinkButtonProps } from "../types";
import { Link } from "react-router-dom";

export const BooleanButton = ({ text, actionKey }: ButtonPropsType) => {
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

export const LinkButton = ({ text, to }: LinkButtonProps) => {
	const dispatch = useDispatch();
	const isDark = useSelector((state: RootState) => state.colorParams.isDarkmode)
		? "dark"
		: "light";
	const color = useSelector((state: RootState) => state.colorParams[isDark]);

	return (
		<Link to={to}>
			<button
				className={`p-2 rounded-md ${color} text-lg w-2/3 mx-3 flex flex-col`}
				onClick={() => dispatch(switchPage(to))}>
				{text}
			</button>
		</Link>
	);
};
