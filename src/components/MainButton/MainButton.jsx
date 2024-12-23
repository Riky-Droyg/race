import React from "react";
import s from "./MainButton.module.scss";

function MainButton({ onClick, name }) {
	return (
		<div
			onClick={onClick}
			className={s.button}
		>
			{name}
		</div>
	);
}

export default MainButton;
