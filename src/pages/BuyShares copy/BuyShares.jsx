import React, { useState } from "react";
import s from "./BuyShares.module.scss";
import Button from "../../components/Button/Button";
import ButtonReturnConteiner from "../../components/ButtonReturn/ButtonReturnConteiner";
import HeaderText from "../../components/HeaderText/HeaderText";
import { NavLink } from "react-router-dom";
import SelectionButtom from "../../components/SelectionButtom/SelectionButtom";

function BuyShares(props) {
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
						<div className={s.infoText}>Вартість ваучера</div>
						<div className={s.infoNumber}>$20</div>
					</div>
					<div className={s.info}>
						<div className={s.infoText}> Кількість</div>
						<div className={s.infoNumber}>1000</div>
					</div>
				</div>
				<div className={s.margin}></div>
				<div className={s.type}>
					<SelectionButtom
						text={"КРС"}
						isSelected={selectedButton === "КРС"}
						onClick={() => handleButtonClick("КРС")}
					/>
					<SelectionButtom
						text={"КЧГ"}
						isSelected={selectedButton === "КЧГ"}
						onClick={() => handleButtonClick("КЧГ")}
					/>
					<SelectionButtom
						text={"УКТ"}
						isSelected={selectedButton === "УКТ"}
						onClick={() => handleButtonClick("УКТ")}
					/>
					<SelectionButtom
						text={"ДР"}
						isSelected={selectedButton === "ДР"}
						onClick={() => handleButtonClick("ДР")}
					/>
					<SelectionButtom
						text={"ЯКХЗ"}
						isSelected={selectedButton === "ЯКХЗ"}
						onClick={() => handleButtonClick("ЯКХЗ")}
					/>
				</div>

				<div className={s.paddingTop}></div>
				<div className={s.border}></div>
				<div className={s.paddingBottom}></div>

				<div className={s.infoWrapper}>
					<div className={s.info}>
						<div className={s.infoText}>Хочу придбати</div>
						<div className={s.infoNumber}>200</div>
					</div>
					<div className={s.info}>
						<div className={s.infoText}> Загальна вартість</div>
						<div className={s.infoNumber}>$2.000</div>
					</div>
				</div>
			</div>
			<Button
				style={{ marginTop: "auto" }}
				name={"Придбати"}
			/>
		</div>
	);
}

export default BuyShares;
