"use client";

import Input from "./input";

export default function Home() {
	return (
		<form className="relative w-full h-full flex items-start justify-center">
			{/* MOBILE-BACKGROUND */}
			<div className="absolute top-0 left-0 w-full flex justify-center items-center">
				<img
					src="/assets/images/bg-sidebar-mobile.svg"
					alt="Multi step form sidebar mobile"
					className="w-full h-auto absolute top-0 left-0"
				/>

				{/* STATE NUMBERS */}
				<div className="relative z-40 flex space-x-4 items-center mt-8">
					<div className="state state-active">
						1
					</div>
					<div className="state">
						2
					</div>
					<div className="state">
						3
					</div>
					<div className="state">
						4
					</div>
				</div>
			</div>

			{/* CARD */}
			<main className="w-full mx-4 mt-32 relative z-50 px-6 py-8 rounded-lg shadow-lg bg-neutral-white">
				<div className="hidden"></div>
				<div className="w-full space-y-3">
					<h1 className="text-2xl font-bold tracking-tight">Personal info</h1>
					<p className="text-neutral-cool-gray">
						Please provide your name, email address, and phone number.
					</p>

					<Input
						label="Name"
						type="text"
						placeholder="e.g. Stephen King"
						name="name"
					/>
					<Input
						label="Email Address"
						type="email"
						placeholder="e.g. stephenking@lorem.com"
						name="email"
					/>
					<Input
						label="Phone Number"
						type="text"
						placeholder="e.g. +1 234 567 890"
						name="phone"
					/>
				</div>
			</main>

			{/* MOBILE FORM SUBMIT */}
			<div className="absolute bottom-0 left-0 w-full p-4 flex items-center justify-end bg-neutral-alabaster">
				<button className="bg-primary-marine-blue text-white px-4 py-3 rounded-md">
					Next Step
				</button>
			</div>
		</form>
	);
}
