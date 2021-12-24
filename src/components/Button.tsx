import React from "react";
import { useDispatch } from "react-redux";

interface ButtonPropsType {
	text: string;
	// colorClass: string;
	// action: Function;
}

export const Button = ({ text }: ButtonPropsType) => {
	const dispatch = useDispatch();
	return (
		<button
			className={`p-2 rounded-md bg-slate-200 text-lg`}
			// onClick={() => dispatch(action())}
		>
			{text}
		</button>
	);
};
