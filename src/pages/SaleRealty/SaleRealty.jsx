import React, { useState } from "react";
import s from "./SaleRealty.module.scss";
import Button from "../../components/Button/Button";
import ButtonReturnConteiner from "../../components/ButtonReturn/ButtonReturnConteiner";
import HeaderText from "../../components/HeaderText/HeaderText";
import { NavLink } from "react-router-dom";
import SelectionButtom from "../../components/SelectionButtom/SelectionButtom";

function SaleRealty(props) {
	// Створюємо стан для збереження вибраної кнопки
	const [selectedButton, setSelectedButton] = useState("ВБ");

	// Обробник для оновлення вибраної кнопки
	const handleButtonClick = (buttonName) => {
		setSelectedButton(buttonName);
	};

	let item = (
		<div className={s.WrapperItem}>
			<div className={`${s.info} ${s.totalValue}`}>
				<div className={s.infoText}>Загальна вартість</div>
				<div className={s.infoNumber}>$80.000</div>
			</div>
			<div className={`${s.info} ${s.credit}`}>
				<div className={s.infoText}> Кредит</div>
				<div className={s.infoNumber}>$65.000</div>
			</div>
			<div className={`${s.info} ${s.realValue}`}>
				<div className={s.infoText}>Реальна вартість</div>
				<div className={s.infoNumber}>$135.000</div>
			</div>
			<div className={`${s.info} ${s.infoImage}`}>
			<Button
						name={"КРС"}
						height={"100%"}
						style={{minHeight: "47px", borderRadius:0}}
					/>
			</div>
		</div>
	);
	return (
		<div className={s.wrapper}>
			<ButtonReturnConteiner />

			<HeaderText text="Продати квартиру" />

			<div className={s.contentWrapper}>
				<div className={s.type}>
					<SelectionButtom
						text={"К1"}
						isSelected={selectedButton === "К1"}
						onClick={() => handleButtonClick("К1")}
					/>
					<SelectionButtom
						text={"К2"}
						isSelected={selectedButton === "К2"}
						onClick={() => handleButtonClick("К2")}
					/>
					<SelectionButtom
						text={"К3"}
						isSelected={selectedButton === "К3"}
						onClick={() => handleButtonClick("К3")}
					/>
					<SelectionButtom
						text={"К4"}
						isSelected={selectedButton === "К4"}
						onClick={() => handleButtonClick("К4")}
					/>
					<SelectionButtom
						text={"ДО"}
						isSelected={selectedButton === "ДО"}
						onClick={() => handleButtonClick("ДО")}
					/>
					<SelectionButtom
						text={"К1с"}
						isSelected={selectedButton === "К1с"}
						onClick={() => handleButtonClick("К1с")}
					/>
					<SelectionButtom
						text={"К2с"}
						isSelected={selectedButton === "К2с"}
						onClick={() => handleButtonClick("К2с")}
					/>
					<SelectionButtom
						text={"К1о"}
						isSelected={selectedButton === "К1о"}
						onClick={() => handleButtonClick("К1о")}
					/>
					<SelectionButtom
						text={"К2о"}
						isSelected={selectedButton === "К2о"}
						onClick={() => handleButtonClick("К2о")}
					/>
					<SelectionButtom
						text={"К3о"}
						isSelected={selectedButton === "К3о"}
						onClick={() => handleButtonClick("К3о")}
					/>
				</div>
				<div className={s.infoWrapper}>
					{item}
					{item}
					{item}
					{item}
					{item}
					{item}
				</div>

				<div className={s.paddingTop}></div>
				<div className={s.border}></div>
				<div className={s.paddingBottom}></div>

				<div className={s.infoWrapperTwo}>
					<div className={`${s.info} ${s.gridInfoA}`}>
						<div className={s.infoText}>Ціна продажу</div>
						<div className={s.infoNumber}>$200000</div>
					</div>
					<div className={`${s.info} ${s.gridInfoB}`}>
						<div className={s.infoText}> Ріст ціни за відсотком</div>
						<div className={s.infoNumber}>200%</div>
					</div>
				</div>
			</div>

			<div className={s.marginBottom}></div>

			<Button
				style={{ marginTop: "auto" }}
				name={"Продати"}
			/>
		</div>
	);
}

export default SaleRealty;
