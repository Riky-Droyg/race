import React from "react";
import s from "./SelectionButtom.module.scss";

const SelectionButtom = ({ text, isSelected, onClick }) => {
	return (
		<div
			className={`${isSelected ? s.buttonActive : s.button}`} // Додаємо клас, якщо кнопка вибрана
			onClick={onClick}
		>
			<div className={s.text}>{text}</div>
		</div>
	);
};

export default SelectionButtom;
