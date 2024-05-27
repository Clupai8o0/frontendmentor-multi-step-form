import React from "react";

interface Props {
	label: string;
	name: string;
	type: "text" | "email";
	placeholder: string;
}

const Input = ({ label, name, type, placeholder }: Props) => {
	return (
		<div className="flex flex-col">
			<label htmlFor={name} className="text-sm text-primary-marine-blue">
				{label}
			</label>
			<input
				type={type}
				placeholder={placeholder}
				name={name}
				className="border rounded-md border-neutral-cool-gray py-2 px-4 placeholder:font-medium"
			/>
		</div>
	);
};

export default Input;
