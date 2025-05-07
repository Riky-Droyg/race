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
	const [property_type, setProperty_type] = useState("К1");
	const [total_price, setTotal_price] = useState("");
	const [credit, setCredit] = useState("");
	const [deposit, setDeposit] = useState("");
	const [rent_price, setRent_price] = useState("");
	const [real_price, setReal_price] = useState("");
	const [monthly_interest, setMonthly_interest] = useState("");

	const addRealtyCash = () => {
		console.log(property_type, total_price, credit, deposit, rent_price, real_price, monthly_interest)
		props.addRealtyCash(property_type, total_price, credit, deposit, rent_price, real_price, monthly_interest);
	};
	// Обробник для оновлення вибраної кнопки
	const handleButtonClick = (buttonName) => {
		setProperty_type(buttonName);
	};
	const handleChangetotal_price = (event) => {
		setTotal_price(event.target.value);
	};
	const handleChangeCredit = (event) => {
		setCredit(event.target.value);
	};
	const handleChangeDeposit = (event) => {
		setDeposit(event.target.value);
	};
	const handleClickRentPrice = (event) => {
		setRent_price(event.target.value);
	};

	const handleChangeRealPrice = (event) => {
		setReal_price(event.target.value);
	};
	const handleChangeMonthlyInterest = (event) => {
		setMonthly_interest(event.target.value);
	};
	const AddBuisnes = () => {
		props.AddBuisnesThunks(property_type, total_price, real_price);
	};

	const total_priceRef = useRef(null); // Реф для доступу до інпуту
	const creditRef = useRef(null); // Реф для доступу до інпуту
	const depositRef = useRef(null); // Реф для доступу до інпуту
	const rent_priceRef = useRef(null); // Реф для доступу до інпуту
	const real_priceRef = useRef(null); // Реф для доступу до інпуту
	const monthly_interestRef = useRef(null); // Реф для доступу до інпуту

	const handleClicktotal_priceRef = () => {
		if (total_priceRef.current) {
			total_priceRef.current.focus(); // Фокусуємо інпут
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
	const handleChangeRentPriceRef = () => {
		if (rent_priceRef.current) {
			rent_priceRef.current.focus(); // Фокусуємо інпут
		}
	};
	const handleClickRealPriceRef = () => {
		if (real_priceRef.current) {
			real_priceRef.current.focus(); // Фокусуємо інпут
		}
	};
	const handleClickMonthlyInterestRef = () => {
		if (monthly_interestRef.current) {
			monthly_interestRef.current.focus(); // Фокусуємо інпут
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
							onClick={handleClicktotal_priceRef}
						>
							<span className={s.dolar}>$</span>

							<span className={`${total_price.length === 0 ? s.placeholder : ""}`}>{total_price}</span>

							<input
								ref={total_priceRef}
								className={s.infoNumber}
								type="text"
								value={total_price}
								onChange={handleChangetotal_price} // Виклик функції при зміні
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
					<div className={`${s.info} ${s.monthlyrent_price}`}>
						<div className={s.infoText}>Щомісячні відсотки</div>
						<div
							className={s.wrapperInput}
							onClick={handleClickMonthlyInterestRef}
						>
							<span className={s.dolar}>- $</span>

							<span className={`${monthly_interest.length === 0 ? s.placeholder : ""}`}>{monthly_interest}</span>

							<input
								ref={monthly_interestRef}
								className={s.infoNumber}
								type="text"
								value={monthly_interest}
								onChange={handleChangeMonthlyInterest} // Виклик функції при зміні
								placeholder="0"
								maxLength={7}
							/>
						</div>
					</div>
					<div className={`${s.info} ${s.rent_price}`}>
						<div className={s.infoText}> Орендна плата</div>
						<div
							className={s.wrapperInput}
							onClick={handleClickRentPrice}
						>
							<span className={s.dolar}>+ $</span>

							<span className={`${rent_price.length === 0 ? s.placeholder : ""}`}>{rent_price}</span>

							<input
								ref={rent_priceRef}
								className={s.infoNumber}
								type="text"
								value={rent_price}
								onChange={handleClickRentPrice} // Виклик функції при зміні
								placeholder="0"
								maxLength={7}
							/>
						</div>
					</div>
					<div className={`${s.info} ${s.realCost}`}>
						<div className={s.infoText}> Реальна вартість</div>
						<div
							className={s.wrapperInput}
							onClick={handleClickRealPriceRef}
						>
							<span className={s.dolar}>$</span>

							<span className={`${real_price.length === 0 ? s.placeholder : ""}`}>{real_price}</span>

							<input
								ref={real_priceRef}
								className={s.infoNumber}
								type="text"
								value={real_price}
								onChange={handleChangeRealPrice} // Виклик функції при зміні
								placeholder="0"
								maxLength={7}
							/>
						</div>
					</div>
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
			/>
		</div>
	);
}

export default BuyRealty;
