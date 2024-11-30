import React, { useState } from "react";
import s from "./Purse.module.css";
import daggerImg from "../../img/dagger.png";
import ButtonReturn from "../ButtonReturn/ButtonReturn";

function Purse(props) {
	let [value, setValue] = useState(""); // Початкове значення — пустий рядок

	const handleChange = (event) => {
		setValue(event.target.value); // Оновлення стану при зміні значення
	};

	let AddActiveIncome = () => {
		props.AddActiveIncomeAC(value);
		setValue("");
	};

	let addPurseAC = () => {
		props.PurseAC("+", value);
	};
	let minusPurseAC = () => {
		props.PurseAC("-", value);
	};
	// let content = props.state.active_income.active_income.active_income_data.map((el, index) => (
	// 	<div onClick={() => deleteBuisnes(index)} key={index} className={s.businessItem}>
	// 		<img className={s.buisnesDelete} src={daggerImg} alt="dagger" />
	// 		<div className={s.businessSize}>{el.nameSalary}</div>
	// 		<div className={s.businessIncome}>{el.sumSalary}</div>
	// 	</div>
	// ));
	return (
		<div className={s.financialOverview}>
			<ButtonReturn />
			<div className={s.cashOnHand}>
				<div className={s.amount}>{props.state.cash_on_hand}</div>
				<div className={s.label}>Готівки на руках</div>
			</div>

			<div className={s.optionSection}>
				<input
					onChange={handleChange}
					value={value}
					type="number"
					className={s.numberInput}
					placeholder="Введи суму"
				/>
			</div>
			{/* <div className={s.businessItem}>
				<img
					onClick={DeleteActiveIncome}
					className={s.buisnesDelete}
					src={daggerImg}
					alt="dagger"
				/>
				<div className={s.businessIncome}>Зарплата</div>
				<div className={s.businessSize}>{props.state.active_income.salary}</div>
			</div> */}
			<div
				onClick={addPurseAC}
				className={s.button__add}
			>
				+Разовий дохід
			</div>
			<div
				onClick={minusPurseAC}
				className={s.button__minus}
			>
				-Разова витрата
			</div>
			<div
				onClick={AddActiveIncome}
				className={s.buttom__salary}
			>
				Получка
			</div>
		</div>
	);
}

export default Purse;
