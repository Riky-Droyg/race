import React, { useRef, useState } from "react";
import s from "./BuyBuisnes.module.scss";
import Button from "../../components/Button/Button";
import ButtonReturnConteiner from "../../components/ButtonReturn/ButtonReturnConteiner";
import HeaderText from "../../components/HeaderText/HeaderText";
import SelectionButtom from "../../components/SelectionButtom/SelectionButtom";

function BuyBuisnes(props) {
	// Створюємо стан для збереження вибраної кнопки
	const [selectedButton, setSelectedButton] = useState("ВБ");
	const [investment, setInvestments] = useState("");
	const [income, setIncome] = useState("");

	// Обробник для оновлення вибраної кнопки
	const handleButtonClick = (buttonName) => {
		setSelectedButton(buttonName);
	};
	const handleChangeInvestment = (event) => {
		setInvestments( event.target.value );
	};

	const handleChangeIncome = (event) => {
		setIncome(event.target.value);
	};
	const AddBuisnes = () => {
		props.AddBuisnesThunks(selectedButton, investment, income);
	};

	const inputRef = useRef(null); // Реф для доступу до інпуту
	const inputTwoRef = useRef(null); // Реф для доступу до інпуту

	const handleParentClick = () => {
		if (inputRef.current) {
			inputRef.current.focus(); // Фокусуємо інпут
		}
	};
	const handleParentTwoClick = () => {
		if (inputTwoRef.current) {
			inputTwoRef.current.focus(); // Фокусуємо інпут
		}
	};

	return (
		<div className={s.wrapper}>
			<ButtonReturnConteiner />

			<HeaderText text="Придбати бізнес" />

			<div className={s.contentWrapper}>
				<div className={s.infoWrapper}>
					<div className={s.info}>
						<div className={s.infoText}>Початкові вкладення</div>

						<div
							className={s.wrapperInput}
							onClick={handleParentClick}
						>
							<span className={s.dolar}>$</span>

							<span className={`${investment.length === 0 ? s.placeholder : ""}`}>{investment}</span>

							<input
								ref={inputRef}
								className={s.infoNumber}
								type="text"
								value={investment}
								onChange={handleChangeInvestment} // Виклик функції при зміні
								placeholder="0"
								maxLength={7}
							/>
						</div>
					</div>
					<div className={s.info}>
						<div className={s.infoText}> Щомісячний дохід</div>
						<div
							className={s.wrapperInput}
							onClick={handleParentTwoClick}
						>
							<span className={s.dolar}>$</span>

							<span className={`${income.length === 0 ? s.placeholder : ""}`}>{income}</span>
							<input
								ref={inputTwoRef}
								className={s.infoNumber}
								type="text"
								value={income}
								onChange={handleChangeIncome} // Виклик функції при зміні
								placeholder="0"
								maxLength={7}
							/>
						</div>
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
			<div className={s.marginBottom}></div>

			<Button
				style={{ marginTop: "auto" }}
				name={"Придбати"}
				onClick={AddBuisnes}
			/>
		</div>
	);
}

export default BuyBuisnes;
