import React, { useState } from "react";
import s from "./DebtsForm.module.scss";
import ButtonReturnConteiner from "../../components/ButtonReturn/ButtonReturnConteiner";
import HeaderText from "../../components/HeaderText/HeaderText";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";

function DebtsForm(props) {
	let [number, setNumber] = useState(""); // Початкове значення — пустий рядок

	const handleChangeNumber = (event) => {
		setNumber(event.target.value); // Оновлення стану при зміні значення
	};
	let [name, setName] = useState(""); // Початкове значення — пустий рядок

	const handleChangeName = (event) => {
		setName(event.target.value); // Оновлення стану при зміні значення
	};
	const navigate = useNavigate();

	const addDebts = () => {
		if (!name.trim() || !number || Number(number) === 0) {
			alert("Будь ласка, заповніть назву боргу та суму (більше 0).");
			return;
		}
		const confirmed = window.confirm(`Додати борг "${name}" на суму ${number}?`);
		if (!confirmed) return;

		props.AddDebtsThunks(name, number);
		navigate("/Debts");
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
					type="number"
					className={s.numberInput}
					placeholder="Введи суму боргу"
					inputMode="numeric"
					pattern="[0-9]*"
					onInput={(e) => {
						const onlyNums = e.target.value.replace(/[^\d]/g, ""); // Видаляє всі символи, що не є цифрами
						setNumber(onlyNums);
					}}
					onKeyDown={(e) => {
						if (["e", "E", "-", "+"].includes(e.key)) {
							e.preventDefault(); // Блокуємо введення "e", "E", "+" та "-"
						}
					}}
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
