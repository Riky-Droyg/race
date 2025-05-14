import React from "react";
import s from "./Button.module.scss";

function Button({ onClick, name, buttonActive = s.Static, background = "black", color = "white", fontSize = "32px", height, style, className }) {
	return (
		<div
			style={{ ...style, background: background, color: color, fontSize, height }} // Об'єднуємо передані стилі з інлайн стилями
			onClick={onClick}
			className={`${buttonActive} ${className}`}
		>
			{name}
		</div>
	);
}

export default Button;
