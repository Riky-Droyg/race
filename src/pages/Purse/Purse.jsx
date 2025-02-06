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

	let AddActiveIncome = () => {
		props.AddActiveIncomeAC(value);
		setValue("");
	};

	let addPurseAC = () => {
		props.PurseThunks("+", value);
	};
	let minusPurseAC = () => {
		props.PurseThunks("-", value);
		setValue = 0;
	};
	let PaycheckAC = () => {
		props.PaycheckAC();
		setValue = 0;
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

			{/* <div className={s.optionSection}> */}
			<input
				onChange={handleChange}
				value={value}
				type="number"
				className={s.numberInput}
				placeholder="Введи суму"
			/>
			{/* </div> */}
			{/* <div
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
			</div> */}

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
				name={"Додати"}
				onClick={PaycheckAC}
				background = "#B7E5C1"
				color="black"
				fontSize= "24px"
			/>
		</div>
	);
}

export default Purse;
