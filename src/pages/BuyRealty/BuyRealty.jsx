import React, { useState } from "react";
import s from "./BuyRealty.module.scss";
import Button from "../../components/Button/Button";
import ButtonReturnConteiner from "../../components/ButtonReturn/ButtonReturnConteiner";
import HeaderText from "../../components/HeaderText/HeaderText";
import Home from "../../img/home.svg";
import SelectionButtom from "../../components/SelectionButtom/SelectionButtom";
import { useNavigate } from "react-router-dom";
import Input from "../../components/Input/Input";

function BuyRealty(props) {
	// Створюємо стан для збереження вибраної кнопки
	const [property_type, setProperty_type] = useState("К1");
	const [total_price, setTotal_price] = useState("");
	const [credit, setCredit] = useState("");
	const [deposit, setDeposit] = useState("");
	const [rent_price, setRent_price] = useState("");
	const [real_price, setReal_price] = useState("");
	const [monthly_interest, setMonthly_interest] = useState("");

	const navigate = useNavigate();

	const addRealtyCash = () => {
		const numericFields = [
			{ name: "Загальна вартість", value: total_price },
			{ name: "Кредит", value: credit },
			{ name: "Завдаток", value: deposit },
			{ name: "Орендна плата", value: rent_price },
			{ name: "Реальна вартість", value: real_price },
			{ name: "Щомісячні відсотки", value: monthly_interest },
		];

		for (const field of numericFields) {
			if (!field.value || isNaN(field.value) || Number(field.value) <= 0) {
				alert(`Будь ласка, введіть коректне число більше 0 для поля "${field.name}".`);
				return;
			}
		}

		if (Number(total_price) > props.state.cash_on_hand) {
			alert("Недостатньо коштів для придбання нерухомості.");
			return;
		}

		const confirmed = window.confirm(`Придбати нерухомість за $${total_price}?`);
		if (!confirmed) return;

		props.addRealtyCash(property_type, total_price, credit, deposit, rent_price, real_price, monthly_interest);
		navigate("/SaleRealty");
	};

	const addRealtyCredit = () => {
		const numericFields = [
			{ name: "Загальна вартість", value: total_price },
			{ name: "Кредит", value: credit },
			{ name: "Завдаток", value: deposit },
			{ name: "Орендна плата", value: rent_price },
			{ name: "Реальна вартість", value: real_price },
			{ name: "Щомісячні відсотки", value: monthly_interest },
		];

		for (const field of numericFields) {
			if (!field.value || isNaN(field.value) || Number(field.value) <= 0) {
				alert(`Будь ласка, введіть коректне число більше 0 для поля "${field.name}".`);
				return;
			}
		}

		if (Number(deposit) > props.state.cash_on_hand) {
			alert("Недостатньо коштів для внесення завдатку.");
			return;
		}

		const confirmed = window.confirm(`Придбати нерухомість з завдатком $${deposit}?`);
		if (!confirmed) return;

		props.addRealtyCredit(property_type, total_price, credit, deposit, rent_price, real_price, monthly_interest);
		navigate("/SaleRealty");
	};
	// Обробник для оновлення вибраної кнопки
	const handleButtonClick = (buttonName) => {
		setProperty_type(buttonName);
	};
	return (
		<div className={s.wrapper}>
			<ButtonReturnConteiner />

			<HeaderText text="Придбати квартиру" />

			<div className={s.contentWrapper}>
				<div className={s.infoWrapper}>
					
					<Input
						text="Загальна вартість"
						onChange={setTotal_price}
						newClass={s.totalValue}
					/>

				
					<Input
						text="Кредит"
						onChange={setCredit}
						newClass={s.credit}
					/>

				
					<Input
						text="Завдаток"
						onChange={setDeposit}
						newClass={s.deposit}
					/>

				
					<Input
						text="Щомісячні відсотки"
						onChange={setMonthly_interest}
						newClass={s.monthlyrent_price}
						signs = "-"

					/>
				
					<Input
						text="Орендна плата"
						onChange={setRent_price}
						newClass={s.rent_price}
						signs = "+"
					/>
					
					<Input
						text="Реальна вартість"
						onChange={setReal_price}
						newClass={s.realCost}
					/>
					<div className={`${s.info} ${s.gridImg}`}>
						<Button
							name={property_type}
							height="43.27%"
							style={{ borderRadius: "0", padding: "0 10px" }}
						/>

						<img
							className={s.EarnIcon}
							src={Home}
							alt="Example SVG"
						/>
					</div>
				</div>
			</div>
			<div className={s.margin}></div>
			<div className={s.type}>
				<SelectionButtom
					text={"К1"}
					isSelected={property_type === "К1"}
					onClick={() => handleButtonClick("К1")}
				/>
				<SelectionButtom
					text={"К2"}
					isSelected={property_type === "К2"}
					onClick={() => handleButtonClick("К2")}
				/>
				<SelectionButtom
					text={"К3"}
					isSelected={property_type === "К3"}
					onClick={() => handleButtonClick("К3")}
				/>
				<SelectionButtom
					text={"К4"}
					isSelected={property_type === "К4"}
					onClick={() => handleButtonClick("К4")}
				/>
				<SelectionButtom
					text={"ДО"}
					isSelected={property_type === "ДО"}
					onClick={() => handleButtonClick("ДО")}
				/>
				<SelectionButtom
					text={"К1с"}
					isSelected={property_type === "К1с"}
					onClick={() => handleButtonClick("К1с")}
				/>
				<SelectionButtom
					text={"К2с"}
					isSelected={property_type === "К2с"}
					onClick={() => handleButtonClick("К2с")}
				/>
				<SelectionButtom
					text={"К1о"}
					isSelected={property_type === "К1о"}
					onClick={() => handleButtonClick("К1о")}
				/>
				<SelectionButtom
					text={"К2о"}
					isSelected={property_type === "К2о"}
					onClick={() => handleButtonClick("К2о")}
				/>
				<SelectionButtom
					text={"К3о"}
					isSelected={property_type === "К3о"}
					onClick={() => handleButtonClick("К3о")}
				/>
			</div>
			<Button
				style={{ marginTop: "auto" }}
				name={"Придбати за готівку"}
				fontSize={24}
				onClick={addRealtyCash}
			/>

			<Button
				style={{ marginTop: "11px" }}
				fontSize={24}
				name={"Придбати в кредит"}
				onClick={addRealtyCredit}
			/>
		</div>
	);
}

export default BuyRealty;
