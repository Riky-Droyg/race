import React, { useState } from "react";
import s from "./ExpenseForm.module.scss";
import ButtonReturnConteiner from "../../components/ButtonReturn/ButtonReturnConteiner";
import HeaderText from "../../components/HeaderText/HeaderText";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";

function ExpenseForm(props) {
	let [number, setNumber] = useState(""); // Початкове значення — пустий рядок

	const handleChangeNumber = (event) => {
		setNumber(event.target.value); // Оновлення стану при зміні значення
	};
	let [name, setName] = useState(""); // Початкове значення — пустий рядок

	const handleChangeName = (event) => {
		setName(event.target.value); // Оновлення стану при зміні значення
	};
	const navigate = useNavigate();

	const addExpenses = () => {
		if (!name.trim() || !number || Number(number) === 0) {
			alert("Будь ласка, заповніть назву витрати та суму (більше 0).");
			return;
		}

		const confirmed = window.confirm(`Додати витрату "${name}" на суму ${number}?`);
		if (!confirmed) return;

		props.AddExpensesThunks(name, number);
		navigate("/Expenses");
	};

	return (
		<div className={s.financialOverview}>
			<ButtonReturnConteiner link="/Expenses" />

			<HeaderText text="Введи витрату" />
			<div className={s.optionSection}>
				<input
					onChange={handleChangeName}
					value={name}
					type="text"
					className={s.numberInput}
					placeholder="Введи назву витрати"
				/>
			</div>
			<div className={s.optionSection}>
				<input
					onChange={handleChangeNumber}
					value={number}
					type="number"
					className={s.numberInput}
					placeholder="Введи суму витрат"
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
				onClick={addExpenses}
			/>
		</div>
	);
}

export default ExpenseForm;
