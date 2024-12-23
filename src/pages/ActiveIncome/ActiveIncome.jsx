import React, { useState } from "react";
import s from "./ActiveIncome.module.scss";
import daggerImg from "../../img/dagger.png";
import HeaderBar from "../../components/HeaderBar/HeaderBar";
import ButtonReturnConteiner from "../../components/ButtonReturn/ButtonReturnConteiner";
import Button from "../../components/Button/Button";

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
	return (
		<div className={s.financialOverview}>
			<ButtonReturnConteiner />

			<HeaderBar
				number={props.state.active_income.total}
				text={"Активний дохід"}
				style={{
					background: " #B7E5C1",
					color: "black",
				}}
				
			/>

			<div
				className={s.businessItem}
			>
				<img
					className={s.buisnesDelete}
					src={daggerImg}
					alt="dagger"
					onClick={DeleteActiveIncome}

				/>

				<div className={s.businessSize}>{"Зарплата"}</div>
				<div className={s.businessIncome}>+{props.state.active_income.salary}</div>
			</div>

			<div className={s.optionSection}>
				<input
					onChange={handleChange}
					value={value}
					type="number"
					className={s.numberInput}
					placeholder="Введи зарплату з картки"
				/>
			</div>

			{/* <div onClick={AddActiveIncome} className={s.purse}>
				Додати
			</div> */}
			<Button
				name="Додати"
				onClick={AddActiveIncome}
			/>
		</div>
	);
}

export default ActiveIncome;
