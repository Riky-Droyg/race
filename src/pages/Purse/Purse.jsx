import React, { useState } from "react";
import s from "./Purse.module.scss";
import daggerImg from "../../img/dagger.png";
import ButtonReturnConteiner from "../../components/ButtonReturn/ButtonReturnConteiner";
import HeaderBar from "../../components/HeaderBar/HeaderBar";
import Button from "../../components/Button/Button";

function Purse(props) {
	let [value, setValue] = useState(""); // Початкове значення — пустий рядок

	const handleChange = (event) => {
		setValue(event.target.value); // Оновлення стану при зміні значення
	};

 	let addPurseAC = () => {
		const confirmed = window.confirm(`Підтвердити отримання доходу у сумі ${value === "" || 0 ? "0" : value}?`);
		if (confirmed) {
			props.PurseThunks("+", value);
			setValue("");
		}
	};

let minusPurseAC = () => {
	const numericValue = Number(value);
	if (numericValue > props.state.cash_on_hand) {
		const confirmedDebt = window.confirm(
			`⚠️ Недостатньо готівки. Додати ${numericValue - props.state.cash_on_hand} у борг?`
		);
		if (!confirmedDebt) return;
	}

	const confirmed = window.confirm(`Підтвердити витрату у сумі ${value === "" || value === "0" ? "0" : value}?`);
	if (confirmed) {
		props.PurseThunks("-", value);
		setValue("");
	}
};
	let totalIncome = +props.state.passive_income.total + +props.state.active_income.total;
	let paycheck = totalIncome - props.state.expenses.total;
	let PaycheckAC = () => {
		const confirmed = window.confirm(`Підтвердити отримання получки у сумі ${paycheck}?`);
		if (confirmed) {
			props.PaycheckAC();
			setValue("");
		}
	};
	return (
		<div className={s.financialOverview}>
			<ButtonReturnConteiner />
			<HeaderBar
				number={props.state.cash_on_hand}
				text={"Готівки на руках"}
				styleFontText={{ fontSize: "15px" }}
				style={{
					height: "12.69%",
					marginBottom: "41px",
				}}
			/>
			<input
				onChange={handleChange}
				value={value}
				type="number"
				className={s.numberInput}
				placeholder="Введи суму"
				inputMode="numeric"
				pattern="[0-9]*"
				onInput={(e) => {
					const onlyNums = e.target.value.replace(/[^\d]/g, ""); // Видаляє всі символи, що не є цифрами
					setValue(onlyNums);
				}}
				onKeyDown={(e) => {
					if (["e", "E", "-", "+"].includes(e.key)) {
						e.preventDefault(); // Блокуємо введення "e", "E", "+" та "-"
					}
				}}
			/>

			<div className={s.buttonContainer}>
				<Button
					height={"100%"}
					name="+Дохід"
					background="#B7E5C1"
					color="black"
					fontSize="24px"
					onClick={addPurseAC}
				/>
				<Button
					height={"100%"}
					name="-Витрата"
					background="#E5B7B7"
					color="black"
					fontSize="24px"
					onClick={minusPurseAC}
				/>
			</div>
			<div className={s.margin}></div>
			<Button
				name={"+Получка"}
				onClick={PaycheckAC}
				background="#B7E5C1"
				color="black"
				fontSize="24px"
			/>
		</div>
	);
}

export default Purse;
