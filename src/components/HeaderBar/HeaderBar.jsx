import React from "react";
import s from "./HeaderBar.module.scss";

const HeaderBar = ({ number, text, style, styleFontNumber, styleFontText }) => {
	return (
		<div
        className={s.wrapper}
        style={style}
		>
			<div
				style={styleFontNumber}
				className={s.number}
			>
				{number.toLocaleString("en-US")}
			</div>
			<div
				style={styleFontText}
				className={s.text}
			>
				{text}
			</div>
		</div>
	);
};

export default HeaderBar;
