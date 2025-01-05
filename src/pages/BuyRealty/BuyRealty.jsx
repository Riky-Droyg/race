import React, { useRef, useState } from "react";
import s from "./BuyRealty.module.scss";
import Button from "../../components/Button/Button";
import ButtonReturnConteiner from "../../components/ButtonReturn/ButtonReturnConteiner";
import HeaderText from "../../components/HeaderText/HeaderText";
import EarnIcon from "../../img/Earn.svg";
import Home from "../../img/home.svg";
import TypeHome from "../../img/TypeHome.svg";
import SelectionButtom from "../../components/SelectionButtom/SelectionButtom";

function BuyRealty(props) {
	// Створюємо стан для збереження вибраної кнопки
	const [selectedButton, setSelectedButton] = useState("К1");
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

			<HeaderText text="Придбати квартиру" />

			<div className={s.contentWrapper}>
				<div className={s.infoWrapper}>
					<div className={`${s.info} ${s.totalValue}`}>
						<div className={s.infoText}>Загальна вартість</div>

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
						</div>
					</div>

					<div className={`${s.info} ${s.credit}`}>
						<div className={s.infoText}>Кредит</div>
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
						</div>
					</div>
					<div className={`${s.info} ${s.deposit}`}>
						<div className={s.infoText}>Завдаток</div>
						<div
							className={s.wrapperInput}
							onClick={handleClickDepositRef}
						>
							<span className={s.dolar}>$</span>

							<span className={`${deposit.length === 0 ? s.placeholder : ""}`}>{deposit}</span>

							<input
								ref={depositRef}
								className={s.infoNumber}
								type="text"
								value={deposit}
								onChange={handleChangeDeposit} // Виклик функції при зміні
								placeholder="0"
								maxLength={7}
							/>
						</div>
					</div>
					<div className={`${s.info} ${s.monthlyInterest}`}>
						<div className={s.infoText}>Щомісячні відсотки</div>
						<div
							className={s.wrapperInput}
							onClick={handleClickInterestRef}
						>
							<span className={s.dolar}>$</span>

							<span className={`${interest.length === 0 ? s.placeholder : ""}`}>{interest}</span>

							<input
								ref={interestRef}
								className={s.infoNumber}
								type="text"
								value={interest}
								onChange={handleChangeInterest} // Виклик функції при зміні
								placeholder="0"
								maxLength={7}
							/>
						</div>
					</div>
					<div className={`${s.info} ${s.rent}`}>
						<div className={s.infoText}> Орендна плата</div>
						<div
							className={s.wrapperInput}
							onClick={handleClickIncomeRef}
						>
							<span className={s.dolar}>$</span>

							<span className={`${income.length === 0 ? s.placeholder : ""}`}>{income}</span>

							<input
								ref={incomeRef}
								className={s.infoNumber}
								type="text"
								value={income}
								onChange={handleChangeIncome} // Виклик функції при зміні
								placeholder="0"
								maxLength={7}
							/>
						</div>
					</div>
					<div className={`${s.info} ${s.realCost}`}>
						<div className={s.infoText}> Реальна вартість</div>
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
						</div>
					</div>
					<div className={`${s.info} ${s.gridImg}`}>
						<Button
						name={selectedButton}
						height="43.27%"
						style={{borderRadius:"0", padding:"0 10px",}}/>

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
			<Button
				style={{ marginTop: "auto" }}
				name={"Придбати за готівку"}
				fontSize={24}
			/>

			<Button
				style={{ marginTop: "11px" }}
				fontSize={24}
				name={"Придбати в кредит"}
			/>
		</div>
	);
}

export default BuyRealty;
