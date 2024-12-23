import React from "react";
import s from "./Button.module.scss";

function Button({ onClick, name, background = "black", color = "white", fontSize = "32px", height, style }) {
	return (
		<div
			style={{ background: background, color: color, fontSize, height, style}}
			onClick={onClick}
			className={s.button__add}
		>
			{name}
		</div>
	);
}

export default Button;
