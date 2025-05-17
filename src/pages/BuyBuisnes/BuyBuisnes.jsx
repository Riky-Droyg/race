import React, { useRef, useState } from "react";
import s from "./BuyBuisnes.module.scss";
import Button from "../../components/Button/Button";
import ButtonReturnConteiner from "../../components/ButtonReturn/ButtonReturnConteiner";
import HeaderText from "../../components/HeaderText/HeaderText";
import SelectionButtom from "../../components/SelectionButtom/SelectionButtom";
import { useNavigate } from "react-router-dom";

function BuyBuisnes(props) {
	// Створюємо стан для збереження вибраної кнопки
	const [selectedButton, setSelectedButton] = useState("Малий Бізнес");
	const [investment, setInvestments] = useState("");
	const [income, setIncome] = useState("");
	const navigate = useNavigate();

	// Обробник для оновлення вибраної кнопки
	const handleButtonClick = (buttonName) => {
		setSelectedButton(buttonName);
	};
	const AddBuisnes = () => {
		if (!investment || Number(investment) === 0 || !income || Number(income) === 0) {
			alert("Будь ласка, введіть вкладення та щомісячний дохід (більші за 0).");
			return;
		}

		if (Number(investment) > props.state.cash_on_hand) {
			alert("Недостатньо коштів для придбання бізнесу.");
			return;
		}

		const confirmed = window.confirm(`Додати бізнес з вкладенням $${investment} і доходом $${income}?`);
		if (!confirmed) return;

		props.AddBuisnesThunks(selectedButton, investment, income);
		setInvestments("");
		setIncome("");
		navigate("/PassiveIncome");
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
								placeholder="0"
								maxLength={7}
								inputMode="numeric"
								pattern="[0-9]*"
								onInput={(e) => {
									const onlyNums = e.target.value.replace(/[^\d]/g, ""); // Видаляє всі символи, що не є цифрами
									setInvestments(onlyNums);
								}}
								onKeyDown={(e) => {
									if (["e", "E", "-", "+"].includes(e.key)) {
										e.preventDefault(); // Блокуємо введення "e", "E", "+" та "-"
									}
								}}
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
								placeholder="0"
								maxLength={7}
								inputMode="numeric"
								pattern="[0-9]*"
								onInput={(e) => {
									const onlyNums = e.target.value.replace(/[^\d]/g, ""); // Видаляє всі символи, що не є цифрами
									setIncome(onlyNums);
								}}
								onKeyDown={(e) => {
									if (["e", "E", "-", "+"].includes(e.key)) {
										e.preventDefault(); // Блокуємо введення "e", "E", "+" та "-"
									}
								}}
							/>
						</div>
					</div>
				</div>
				<div className={s.margin}></div>
				<div className={s.type}>
				<SelectionButtom
						text={"МБ"}
						isSelected={selectedButton === "Малий Бізнес"}
						onClick={() => handleButtonClick("Малий Бізнес")}
					/>
					<SelectionButtom
						text={"ВБ"}
						isSelected={selectedButton === "Великий Бізнес"}
						onClick={() => handleButtonClick("Великий Бізнес")}
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
