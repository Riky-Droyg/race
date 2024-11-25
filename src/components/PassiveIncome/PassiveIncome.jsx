import React, { useState } from "react";
import s from "./PassiveIncome.module.css";
import daggerImg from "../../img/dagger.png";
import ButtonReturn from "../ButtonReturn/ButtonReturn";

function PassiveIncome(props) {
	let [sizeBuisnes, setSizeBuisnes] = useState("Малий Бізнес");
	let [value, setValue] = useState(0); // Початкове значення — пустий рядок

	const handleChange = (event) => {
		setValue(event.target.value); // Оновлення стану при зміні значення
	};
	let addBuisnes = () => {
		props.addBuisnes(sizeBuisnes, +value);
	};

	let deleteBuisnes = (index) => {
		props.DeleteBuisnes(index);
	};
	let content = () => {
		if (props.state.passive_income.list === null) {
			return console.log("error 'total_income.input'");
		} else {
			return props.state.passive_income.list.map((el, index) => (
				<div onClick={() => deleteBuisnes(index)} key={index} className={s.businessItem}>
					<img className={s.buisnesDelete} src={daggerImg} alt="dagger" />
					{/* <div className={s.businessSize}>{el.name}</div> */}
					<div className={s.businessSize}>{el.type}</div>
					<div className={s.businessIncome}>{el.sum}</div>
				</div>
			));
		}
	};
	return (
		<div className={s.financialOverview}>
			<ButtonReturn />
			<div className={s.cashOnHand}>
				<div className={s.amount}>{props.state.passive_income.total}</div>
				<div className={s.label}>Пасивний дохід</div>
			</div>

			<div className={s.optionSection}>
				<div className={s.optionRow}>
					<label htmlFor="radioButtonSmall" className={s.optionLabel}>
						Малий
					</label>
					<input onChange={() => setSizeBuisnes("Малий Бізнес")} type="radio" name="o" id="radioButtonSmall" className={s.optionInput} defaultChecked />
				</div>
				<div className={s.optionRow}>
					<label htmlFor="radioButtonBig" className={s.optionLabel}>
						Великий
					</label>
					<input onChange={() => setSizeBuisnes("Великий Бізнес")} type="radio" name="o" id="radioButtonBig" className={s.optionInput} />
				</div>
				<div className={s.optionRow}>
					<label htmlFor="radioButtonExpansion" className={s.optionLabel}>
						Розширення
					</label>
					<input onChange={() => setSizeBuisnes("Розширення")} type="radio" name="o" id="radioButtonExpansion" className={s.optionInput} />
				</div>
				<input
					type="number"
					value={value} // Прив'язка значення до стану
					onChange={handleChange} // Встановлення обробника зміни
					className={s.numberInput}
				/>
			</div>

			<div onClick={addBuisnes} className={s.purse}>
				Новий бізнес
			</div>
			{content()}
		</div>
	);
}

export default PassiveIncome;
