import React, { useState } from "react";
import s from "./BuyBuisnes.module.scss";
import Button from "../../components/Button/Button";
import ButtonReturnConteiner from "../../components/ButtonReturn/ButtonReturnConteiner";
import HeaderText from "../../components/HeaderText/HeaderText";
import { NavLink } from "react-router-dom";
import SelectionButtom from "../../components/SelectionButtom/SelectionButtom";

function BuyBuisnes(props) {
	// Створюємо стан для збереження вибраної кнопки
	const [selectedButton, setSelectedButton] = useState("ВБ");

	// Обробник для оновлення вибраної кнопки
	const handleButtonClick = (buttonName) => {
		setSelectedButton(buttonName);
	};

	return (
		<div className={s.wrapper}>
			<ButtonReturnConteiner />

			<HeaderText text="Придбати бізнес" />

			<div className={s.contentWrapper}>
				<div className={s.infoWrapper}>
					<div className={s.info}>
						<div className={s.infoText}>Початкові вкладення</div>
						<div className={s.infoNumber}>$200.000</div>
					</div>
					<div className={s.info}>
						<div className={s.infoText}> Щомісячний дохід</div>
						<div className={s.infoNumber}>$2.000</div>
					</div>
				</div>
				<div className={s.margin}></div>
				<div className={s.type}>
					<SelectionButtom
						text={"ВБ"}
						isSelected={selectedButton === "ВБ"}
						onClick={() => handleButtonClick("ВБ")}
					/>
					<SelectionButtom
						text={"МБ"}
						isSelected={selectedButton === "МБ"}
						onClick={() => handleButtonClick("МБ")}
					/>
					<SelectionButtom
						text={"Розширення"}
						isSelected={selectedButton === "Розширення"}
						onClick={() => handleButtonClick("Розширення")}
					/>
				</div>
			</div>

			<Button
				style={{ marginTop: "auto", }}
				name={"Придбати"}
			/>
		</div>
	);
}

export default BuyBuisnes;
