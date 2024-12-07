import React, { useState } from "react";
import s from "./ActiveIncome.module.css";
import daggerImg from "../../img/dagger.png";
import ButtonReturn from "../ButtonReturn/ButtonReturn";

function ActiveIncome(props) {
	let [value, setValue] = useState(0); // Початкове значення — пустий рядок

	const handleChange = (event) => {
		setValue(event.target.value); // Оновлення стану при зміні значення
	};

	let AddActiveIncome = () => {
		props.AddActiveIncomeAC(value);
		setValue("");
	};

	let DeleteActiveIncome = () => {
		props.DeleteActiveIncomeAC();
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
				<div className={s.amount}>{props.state.active_income.total}</div>
				<div className={s.label}>Активний дохід</div>
			</div>

			<div className={s.businessItem}>
				<img onClick={DeleteActiveIncome} className={s.buisnesDelete} src={daggerImg} alt="dagger" />
				<div className={s.businessIncome}>Зарплата</div>
				<div className={s.businessSize}>{props.state.active_income.salary}</div>
			</div>

			<div className={s.optionSection}>
				<input onChange={handleChange} value={value} type="number" className={s.numberInput} placeholder="Введи зарплату з картки" />
			</div>

			<div onClick={AddActiveIncome} className={s.purse}>
				Додати
			</div>
		</div>
	);
}

export default ActiveIncome;
