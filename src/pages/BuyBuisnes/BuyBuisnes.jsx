import React, { useRef, useState } from "react";
import s from "./BuyBuisnes.module.scss";
import Button from "../../components/Button/Button";
import ButtonReturnConteiner from "../../components/ButtonReturn/ButtonReturnConteiner";
import HeaderText from "../../components/HeaderText/HeaderText";
import SelectionButtom from "../../components/SelectionButtom/SelectionButtom";
import { useNavigate } from "react-router-dom";
import Input from "../../components/Input/Input";

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
		if ((!investment || Number(investment) === 0 || !income || Number(income) === 0) && selectedButton !== "Розширення") {
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
					<Input
						text="Початкові вкладення"
						onChange={setInvestments}
						newClass={s.noneBorder}

					/>
					<Input
						text="Щомісячний дохід"
						onChange={setIncome}
					/>
					
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
