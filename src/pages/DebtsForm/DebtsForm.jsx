import React, { useState } from "react";
import s from "./DebtsForm.module.scss";
import ButtonReturnConteiner from "../../components/ButtonReturn/ButtonReturnConteiner";
import HeaderText from "../../components/HeaderText/HeaderText";
import Button from "../../components/Button/Button";

function DebtsForm(props) {
	let [number, setNumber] = useState(""); // Початкове значення — пустий рядок

	const handleChangeNumber = (event) => {
		setNumber(event.target.value); // Оновлення стану при зміні значення
	};
	let [name, setName] = useState(""); // Початкове значення — пустий рядок

	const handleChangeName = (event) => {
		setName(event.target.value); // Оновлення стану при зміні значення
	};

	const addDebts = () => {
		props.AddDebtsThunks(name, number);
	};

	return (
		<div className={s.financialOverview}>
			<ButtonReturnConteiner link="/Debts" />

			<HeaderText text="Введи борг" />
			<div className={s.optionSection}>
				<input
					onChange={handleChangeName}
					value={name}
					type="text"
					className={s.numberInput}
					placeholder="Введи назву боргу"
				/>
			</div>
			<div className={s.optionSection}>
				<input
					onChange={handleChangeNumber}
					value={number}
					type=" number"
					className={s.numberInput}
					placeholder="Введи суму боргу"
				/>
			</div>

			<Button
				name={"Додати"}
				onClick={addDebts}
			/>
		</div>
	);
}

export default DebtsForm;
