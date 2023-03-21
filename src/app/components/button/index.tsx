import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

interface IButtonProps {
	text: string;
	theme?: "filled" | "outlined";
	className?: string;
}

const BaseButton = styled.button`
	${tw`
		px-5
		py-3
		outline-none
		rounded-md
		text-white
		text-xs
		font-semibold
		bg-red-500
		border-transparent
		border-2
		border-solid
		focus:outline-none
		transition-all
		duration-200
		ease-in-out
		m-1
	`}
`;

const OutlinedButton = styled(BaseButton)`
	${tw`
		hover:bg-transparent
		hover:text-red-500
		hover:border-red-500
	`}
`;
const FilledButton = styled(BaseButton)`
	${tw`
		border-red-500
		text-red-500
		bg-transparent
		hover:bg-red-500
		hover:text-white
		hover:border-transparent
	`}
`;

const Button = ({ theme, text, className }: IButtonProps) => {
	if (theme === "filled") {
		return <FilledButton className={className}>{text}</FilledButton>;
	}
	return <OutlinedButton className={className}>{text}</OutlinedButton>;
};

export default Button;
