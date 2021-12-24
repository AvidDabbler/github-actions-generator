import React from "react";

interface ButtonPropsType {
	text: string;
	colorClass: string;
}

export const Button = ({ text, colorClass }: ButtonPropsType) => {
	
	return (
		<div className={`${colorClass}`}>
			<span>{text}</span>
		</div>
	);
};
