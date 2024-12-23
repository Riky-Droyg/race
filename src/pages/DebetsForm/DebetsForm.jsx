import React, { useState } from "react";
import s from "./DebetsForm.module.scss";
import ButtonReturnConteiner from "../../components/ButtonReturn/ButtonReturnConteiner";
import HeaderText from "../../components/HeaderText/HeaderText";
import Button from "../../components/Button/Button";

function DebetsForm (props) {
	let [Number, setNumber] = useState(0); // Початкове значення — пустий рядок

	const handleChangeNumber = (event) => {
		setNumber(event.target.value); // Оновлення стану при зміні значення
	};
	let [Name, setName] = useState(0); // Початкове значення — пустий рядок

	const handleChangeName = (event) => {
		setName(event.target.value); // Оновлення стану при зміні значення
	};
	
	// 

	return (
		<div className={s.financialOverview}>
			<ButtonReturnConteiner link="/Debets"/>

			<HeaderText text="Введи витрату" />

			<div className={s.optionSection}>
				<input
					onChange={handleChangeNumber}
					value={Number}
					type="text"
					className={s.numberInput}
					placeholder="Введи назву боргу"
				/>
			</div>

			<div className={s.optionSection}>
				<input
					onChange={handleChangeName}
					value={Name}
					type="number"
					className={s.numberInput}
					placeholder="Введи суму боргу"
				/>
			</div>

			<Button name={"Додати"} />
		</div>
	);
}

export default DebetsForm;
