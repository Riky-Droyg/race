import React, { useRef, useState } from "react";
import s from "./SaleShares.module.scss";
import Button from "../../components/Button/Button";
import ButtonReturnConteiner from "../../components/ButtonReturn/ButtonReturnConteiner";
import HeaderText from "../../components/HeaderText/HeaderText";
import { NavLink } from "react-router-dom";
import SelectionButtom from "../../components/SelectionButtom/SelectionButtom";

function SaleShares(props) {
	// Створюємо стан для збереження вибраної кнопки
	const [selectedButton, setSelectedButton] = useState("ВБ");

	const [investment, setInvestments] = useState("");
	const [credit, setCredit] = useState("");
	const [deposit, setDeposit] = useState("");
	const [interest, setInterest] = useState("");
	const [income, setIncome] = useState("");
	const [realInvestment, setRealInvestment] = useState("");

	// Обробник для оновлення вибраної кнопки
	const handleButtonClick = (buttonName) => {
		setSelectedButton(buttonName);
	};
	const handleChangeInvestment = (event) => {
		setInvestments(event.target.value);
	};
	const handleChangeCredit = (event) => {
		setCredit(event.target.value);
	};
	const handleChangeDeposit = (event) => {
		setDeposit(event.target.value);
	};
	const handleChangeInterest = (event) => {
		setInterest(event.target.value);
	};

	const handleChangeIncome = (event) => {
		setIncome(event.target.value);
	};
	const handleChangeRealInvestment = (event) => {
		setRealInvestment(event.target.value);
	};
	const AddBuisnes = () => {
		props.AddBuisnesThunks(selectedButton, investment, income);
	};

	const investmentRef = useRef(null); // Реф для доступу до інпуту
	const creditRef = useRef(null); // Реф для доступу до інпуту
	const depositRef = useRef(null); // Реф для доступу до інпуту
	const interestRef = useRef(null); // Реф для доступу до інпуту
	const incomeRef = useRef(null); // Реф для доступу до інпуту
	const realInvestmentRef = useRef(null); // Реф для доступу до інпуту

	const handleClickInvestmentRef = () => {
		if (investmentRef.current) {
			investmentRef.current.focus(); // Фокусуємо інпут
		}
	};
	const handleClickCreditRef = () => {
		if (creditRef.current) {
			creditRef.current.focus(); // Фокусуємо інпут
		}
	};
	const handleClickDepositRef = () => {
		if (depositRef.current) {
			depositRef.current.focus(); // Фокусуємо інпут
		}
	};
	const handleClickInterestRef = () => {
		if (interestRef.current) {
			interestRef.current.focus(); // Фокусуємо інпут
		}
	};
	const handleClickIncomeRef = () => {
		if (incomeRef.current) {
			incomeRef.current.focus(); // Фокусуємо інпут
		}
	};
	const handleClickRealInvestmentRef = () => {
		if (realInvestmentRef.current) {
			realInvestmentRef.current.focus(); // Фокусуємо інпут
		}
	};

	return (
		<div className={s.wrapper}>
			<ButtonReturnConteiner />

			<HeaderText text="Продати акції" />

			<div className={s.contentWrapper}>
				<div className={s.infoWrapper}>
					<div className={`${s.info} ${s.infoGrid}`}>
						<div className={s.infoText}>Наявність</div>
						<div className={s.infoNumberOrigin}>250</div>
					</div>
					<div className={s.info}>
						<div className={s.infoText}> Середня ціна за шт</div>
						<div className={s.infoNumberOrigin}>$20</div>
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

				<div className={s.infoWrapperTwo}>
					<div className={`${s.info} ${s.gridInfoA}`}>
						<div className={s.infoText}>Вартість продажу</div>
						<div
							className={s.wrapperInput}
							onClick={handleClickInvestmentRef}
						>
							<span className={s.dolar}>$</span>

							<span className={`${investment.length === 0 ? s.placeholder : ""}`}>{investment}</span>

							<input
								ref={investmentRef}
								className={s.infoNumber}
								type="text"
								value={investment}
								onChange={handleChangeInvestment} // Виклик функції при зміні
								placeholder="0"
								maxLength={7}
							/>
						</div>					</div>
					<div className={`${s.info} ${s.gridInfoB}`}>
						<div className={s.infoText}> Кількість</div>
						<div
							className={s.wrapperInput}
							onClick={handleClickCreditRef}
						>
							<span className={s.dolar}>$</span>

							<span className={`${credit.length === 0 ? s.placeholder : ""}`}>{credit}</span>

							<input
								ref={creditRef}
								className={s.infoNumber}
								type="text"
								value={credit}
								onChange={handleChangeCredit} // Виклик функції при зміні
								placeholder="0"
								maxLength={7}
							/>
						</div>					</div>
					<div className={`${s.info} ${s.gridInfoC}`}>
						<div className={s.infoText}> Загальна вартість</div>
						<div
							className={s.wrapperInput}
							onClick={handleClickRealInvestmentRef}
						>
							<span className={s.dolar}>$</span>

							<span className={`${realInvestment.length === 0 ? s.placeholder : ""}`}>{realInvestment}</span>

							<input
								ref={realInvestmentRef}
								className={s.infoNumber}
								type="text"
								value={realInvestment}
								onChange={handleChangeRealInvestment} // Виклик функції при зміні
								placeholder="0"
								maxLength={7}
							/>
						</div>					</div>
				</div>
			</div>
			<div className={s.marginBottom}></div>

			<Button
				style={{ marginTop: "auto" }}
				name={"Придбати"}
			/>
		</div>
	);
}

export default SaleShares;
