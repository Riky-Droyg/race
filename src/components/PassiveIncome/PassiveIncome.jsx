import React, { useState } from "react";
import s from "./PassiveIncome.module.css";
import daggerImg from "../../img/dagger.png";
import HeaderBar from "../HeaderBar/HeaderBar";
import ListItems from "../ListItem/ListItems";
import ButtonReturnConteiner from "../ButtonReturn/ButtonReturnConteiner";

function PassiveIncome(props) {
	// let [sizeBuisnes, setSizeBuisnes] = useState("Малий Бізнес");
	// let [value, setValue] = useState(0); // Початкове значення — пустий рядок

	// const handleChange = (event) => {
	// 	setValue(event.target.value); // Оновлення стану при зміні значення
	// };
	// let addBuisnes = () => {
	// 	props.addBuisnes(sizeBuisnes, +value);
	// 	setValue("");
	// };

	let deleteBuisnes = (index) => {
		props.DeleteBuisnes(index);
	};
	let content = () => {
		if (props.state.passive_income.list === null) {
			return console.log("error 'total_income.input'");
		} else {
			return props.state.passive_income.list.map((el, index) => (
				<div
					onClick={() => deleteBuisnes(index)}
					key={index}
					className={s.businessItem}
				>
					<img
						className={s.buisnesDelete}
						src={daggerImg}
						alt="dagger"
					/>

					<div className={s.businessSize}>{el.type}</div>

					<div className={s.businessIncome}>+{el.sum}</div>
				</div>
			));
		}
	};

	return (
		<div className={s.financialOverview}>
			<ButtonReturnConteiner />
			<HeaderBar
				number={props.state.passive_income.total}
				text={"Пасивний дохід"}
				style={{
					background: "#B7E5C1",
					color: "black",
					marginBottom: "2vh",
					padding: "15px 15px",
				}}
				styleFontNumber={{
					fontSize: "32px",
					paddingBottom: "6px",
				}}
				styleFontText={{
					fontSize: "16px",
				}}
			/>

			{/* <div className={s.cashOnHand}>
				<div className={s.amount}>{props.state.passive_income.total}</div>
				<div className={s.label}>Пасивний дохід</div>
			</div>

			<div className={s.optionSection}>
				<div className={s.optionRow}>
					<label
						htmlFor="radioButtonSmall"
						className={s.optionLabel}
					>
						Малий
					</label>
					<input
						onChange={() => setSizeBuisnes("Малий Бізнес")}
						type="radio"
						name="o"
						id="radioButtonSmall"
						className={s.optionInput}
						defaultChecked
					/>
				</div>
				<div className={s.optionRow}>
					<label
						htmlFor="radioButtonBig"
						className={s.optionLabel}
					>
						Великий
					</label>
					<input
						onChange={() => setSizeBuisnes("Великий Бізнес")}
						type="radio"
						name="o"
						id="radioButtonBig"
						className={s.optionInput}
					/>
				</div>
				<div className={s.optionRow}>
					<label
						htmlFor="radioButtonExpansion"
						className={s.optionLabel}
					>
						Розширення
					</label>

					<input
						onChange={() => setSizeBuisnes("Розширення")}
						type="radio"
						name="o"
						id="radioButtonExpansion"
						className={s.optionInput}
					/>
				</div>
			</div>

			<input
				 maxLength={8} 
				type="number"
				value={value} // Прив'язка значення до стану
				onChange={handleChange} // Встановлення обробника зміни
				className={s.numberInput}
			/>

			<div
				onClick={addBuisnes}
				className={s.purse}
			>
				Новий бізнес
			</div> */}

			{/* {content()} */}
			<ListItems
				del={deleteBuisnes}
				list={props.state.passive_income.list}
			/>
		</div>
	);
}

export default PassiveIncome;
