import React, { useRef, useState } from "react";
import s from "./BuyShares.module.scss";
import Button from "../../components/Button/Button";
import ButtonReturnConteiner from "../../components/ButtonReturn/ButtonReturnConteiner";
import HeaderText from "../../components/HeaderText/HeaderText";
import SelectionButtom from "../../components/SelectionButtom/SelectionButtom";

function BuyShares(props) {
	const addShares = () => {
		debugger
		const purchaseCost = valueVoucher * wantToBuy;

		if (purchaseCost > totalCost) {
			const maxAffordableUnits = Math.floor(totalCost / valueVoucher);
			const message = `Сума покупки перевищує доступну кількість коштів. Ви можете купити лише ${maxAffordableUnits} одиниць за ${valueVoucher} кожна. Ваш поточний бюджет: ${maxAffordableUnits*valueVoucher}. Підтвердьте покупку або відхиліть.`;

			const isConfirmed = window.confirm(message);

			if (isConfirmed) {
				props.addSharesThunks(selectedButton, maxAffordableUnits, valueVoucher, totalCost);
				return maxAffordableUnits;
			} else {
				return 0; // або null, якщо хочеш
			}
		} else {
			const message = `Ви обрали ${wantToBuy} одиниць на суму ${purchaseCost}. Підтвердьте покупку.`;
			const isConfirmed = window.confirm(message);

			if (isConfirmed) {
				props.addSharesThunks(selectedButton, wantToBuy, valueVoucher, totalCost);
				return wantToBuy;
			} else {
				return 0;
			}
		}
	};
	// props.addSharesThunks(selectedButton, wantToBuy, valueVoucher, totalCost);

	// Створюємо стан для збереження вибраної кнопки
	const [selectedButton, setSelectedButton] = useState("КРС");
	const [wantToBuy, setWantToBuy] = useState("");
	const [valueVoucher, setValueVoucher] = useState("");
	const [totalCost, setTotalCost] = useState("");
	// Обробник для оновлення вибраної кнопки

	const handleButtonClick = (buttonName) => {
		setSelectedButton(buttonName);
	};
	const handleChangeValueVoucher = (event) => {
		setValueVoucher(event.target.value);
	};
	const handleChangeWantToBuy = (event) => {
		setWantToBuy(event.target.value);
	};
	const handleChangeTotalCost = (event) => {
		setTotalCost(event.target.value);
	};

	const valueVoucherRef = useRef(null); // Реф для доступу до інпуту
	const wantToBuyRef = useRef(null); // Реф для доступу до інпуту
	const totalCostRef = useRef(null); // Реф для доступу до інпуту

	const handleClickValueVoucherRef = () => {
		if (valueVoucherRef.current) {
			valueVoucherRef.current.focus(); // Фокусуємо інпут
		}
	};
	const handleClickWantToBuyRef = () => {
		if (wantToBuyRef.current) {
			wantToBuyRef.current.focus(); // Фокусуємо інпут
		}
	};
	const handleClickTotalCostRef = () => {
		if (totalCostRef.current) {
			totalCostRef.current.focus(); // Фокусуємо інпут
		}
	};

	const handleChange = (e, field) => {
		let b = +wantToBuy,
			a = +valueVoucher,
			c = +totalCost;
		if (field === "a") {
			a = e.target.value;
			c = a * b;
		} else if (field === "b") {
			b = e.target.value;
			c = a * b;
		} else if (field === "c") {
			c = e.target.value;
			b = a !== 0 ? c / a : 0;
		}
		// debugger;
		setValueVoucher(isNaN(a) || a === 0 ? "" : a);
		setWantToBuy(isNaN(b) || b === 0 ? "" : Math.round(b));
		setTotalCost(isNaN(c) || c === 0 ? "" : c);
	};

	return (
		<div className={s.wrapper}>
			<ButtonReturnConteiner />

			<HeaderText text="Придбати акції" />

			<div className={s.contentWrapper}>
				<div className={s.infoWrapper}>
					<div className={s.info}>
						<div className={s.infoText}>Вартість ваучера</div>
						<div
							className={s.wrapperInput}
							onClick={handleClickValueVoucherRef}
						>
							<span className={s.dolar}>$</span>

							<span className={`${valueVoucher.length === 0 ? s.placeholder : ""}`}>{valueVoucher}</span>

							<input
								ref={valueVoucherRef}
								className={s.infoNumber}
								type="text"
								value={valueVoucher}
								onChange={(e) => handleChange(e, "a")} // Виклик функції при зміні
								placeholder="0"
								maxLength={7}
							/>
						</div>{" "}
					</div>
					{/* <div className={s.info}>
						<div className={s.infoText}> Кількість</div>
						<div
							className={s.wrapperInput}
							onClick={handleClickCreditRef}
						>

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
						</div>{" "}
					</div> */}
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
						<div
							className={s.wrapperInput}
							onClick={handleClickWantToBuyRef}
						>
							<span className={`${wantToBuy.length === 0 ? s.placeholder : ""}`}>{wantToBuy}</span>

							<input
								ref={wantToBuyRef}
								className={s.infoNumber}
								type="text"
								value={wantToBuy}
								onChange={(e) => handleChange(e, "b")} // Виклик функції при зміні
								placeholder="0"
								maxLength={7}
							/>
						</div>{" "}
					</div>
					<div className={s.info}>
						<div className={s.infoText}> Загальна вартість</div>
						<div
							className={s.wrapperInput}
							onClick={handleClickTotalCostRef}
						>
							<span className={s.dolar}>$</span>

							<span className={`${totalCost.length === 0 ? s.placeholder : ""}`}>{totalCost}</span>

							<input
								ref={totalCostRef}
								className={s.infoNumber}
								type="text"
								value={totalCost}
								onChange={(e) => handleChange(e, "c")} // Виклик функції при зміні
								placeholder="0"
								maxLength={7}
							/>
						</div>
					</div>
				</div>
			</div>
			<div className={s.marginBottom}></div>

			<Button
				style={{ marginTop: "auto" }}
				name={"Придбати"}
				onClick={addShares}
			/>
		</div>
	);
}

export default BuyShares;
