import React, { useRef, useState } from "react";
import s from "./SaleShares.module.scss";
import Button from "../../components/Button/Button";
import ButtonReturnConteiner from "../../components/ButtonReturn/ButtonReturnConteiner";
import HeaderText from "../../components/HeaderText/HeaderText";
import { NavLink } from "react-router-dom";
import SelectionButtom from "../../components/SelectionButtom/SelectionButtom";
import Input from "../../components/Input/Input";

function SaleShares(props) {
	const SaleShares = () => {
		
		const available = availability(); // доступна кількість акцій
		const avgPurchasePrice = averagePrice(); // середня ціна купівлі
		const profitOrLoss = (valueVoucher - avgPurchasePrice) * wantToSale; // +/- різниця
		const profitText = profitOrLoss >= 0 ? "прибуток" : "збиток";

		// Перевірка кількості
		if (wantToSale > available) {
			alert(`У вас лише ${available} акцій. Ви не можете продати ${wantToSale}.`);
			return 0;
		}

		// Повідомлення з розрахунками
		const message = `Ви хочете продати ${wantToSale} акцій за ціною $${valueVoucher} кожна.
	Загальна сума: $${totalCost}.
	Середня ціна купівлі: $${avgPurchasePrice}.
	Очікуваний ${profitText}: $${Math.abs(profitOrLoss)}.
	Підтвердити продаж?`;

		const isConfirmed = window.confirm(message);

		if (isConfirmed) {
			props.sellSharesThunks(selectedButton, wantToSale, valueVoucher, totalCost);
			return wantToSale;
		} else {
			return 0;
		}
	};

	// Створюємо стан для збереження вибраної кнопки
	const [selectedButton, setSelectedButton] = useState("КРС");
	const [wantToSale, setWantToSale] = useState("");
	const [valueVoucher, setValueVoucher] = useState("");
	const [totalCost, setTotalCost] = useState("");

	// Обробник для оновлення вибраної кнопки
	const handleButtonClick = (buttonName) => {
		setSelectedButton(buttonName);
	};
	const valueVoucherRef = useRef(null); // Реф для доступу до інпуту
	const wantToSaleRef = useRef(null); // Реф для доступу до інпуту
	const totalCostRef = useRef(null); // Реф для доступу до інпуту

	const handleClickValueVoucherRef = () => {
		if (valueVoucherRef.current) {
			valueVoucherRef.current.focus(); // Фокусуємо інпут
		}
	};
	const handleClickWantToSaleRef = () => {
		if (wantToSaleRef.current) {
			wantToSaleRef.current.focus(); // Фокусуємо інпут
		}
	};
	const handleClickTotalCostRef = () => {
		if (totalCostRef.current) {
			totalCostRef.current.focus(); // Фокусуємо інпут
		}
	};
	const availability = () => {
		switch (selectedButton) {
			case "КРС":
				return props.state.stocks.krs.totalCount || 0;
			case "КЧГ":
				return props.state.stocks.kchg.totalCount || 0;
			case "УКТ":
				return props.state.stocks.ykt.totalCount || 0;
			case "ДР":
				return props.state.stocks.dr.totalCount || 0;
			case "ЯКХЗ":
				return props.state.stocks.yakhz.totalCount || 0;
			default:
				return 0;
		}
	};
	const averagePrice = () => {
		switch (selectedButton) {
			case "КРС":
				return props.state.stocks.krs.averagePrice || 0;
			case "КЧГ":
				return props.state.stocks.kchg.averagePrice || 0;
			case "УКТ":
				return props.state.stocks.ykt.averagePrice || 0;
			case "ДР":
				return props.state.stocks.dr.averagePrice || 0;
			case "ЯКХЗ":
				return props.state.stocks.yakhz.averagePrice || 0;
			default:
				return 0;
		}
	};

	const handleChange = (onlyNums, field) => {
		debugger
	
		if (onlyNums === "") {
			onlyNums = 0
		}
			let b = +wantToSale,
			a = +valueVoucher,
			c = +totalCost;
		if (field === "a") {
			a = onlyNums;
			c = a * b;
		} else if (field === "b") {
			b = onlyNums;
			c = a * b;
		} else if (field === "c") {
			c = onlyNums;
			b = a !== 0 ? c / a : 0;
		}
		// debugger;
		setValueVoucher(isNaN(a) || a === 0 ? "" : a);
		setWantToSale(isNaN(b) || b === 0 ? "" : Math.round(b));
		setTotalCost(isNaN(c) || c === 0 ? "" : c);
		
	};

	return (
		<div className={s.wrapper}>
			<ButtonReturnConteiner />

			<HeaderText text="Продати акції" />

			<div className={s.contentWrapper}>
				<div className={s.infoWrapper}>
					<div className={`${s.info} ${s.infoGrid}`}>
						<div className={s.infoText}>Наявність</div>
						<div className={s.infoNumberOrigin}>{availability()}</div>
					</div>
					<div className={s.info}>
						<div className={s.infoText}> Середня ціна за шт</div>
						<div className={s.infoNumberOrigin}>${averagePrice()}</div>
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
					{/* <div className={`${s.info} ${s.gridInfoA}`}>
						<div className={s.infoText}>Вартість продажу</div>
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
								placeholder="0"
								maxLength={7}
								inputMode="numeric"
								pattern="[0-9]*"
								onInput={(e) => {
									const onlyNums = e.target.value.replace(/[^\d]/g, ""); // Видаляє все, крім цифр
									handleChange(onlyNums, "a"); // Передаємо очищене значення і тип
								}}
								onKeyDown={(e) => {
									if (["e", "E", "-", "+"].includes(e.key)) {
										e.preventDefault(); // Блокуємо введення непотрібних символів
									}
								}}
							/>
						</div>{" "}
					</div> */}
					<Input
						text="Вартість продажу"
						newClass={s.gridInfoA}
						onChange={handleChange}
						symbolOnChange="a"

					
					/>
					<Input
						text="Загальна вартість"
						newClass={s.gridInfoC}
						value={`${totalCost}`}
						onChange={handleChange}
						symbolOnChange="c"

					
					/>
					<Input
						text="Ціна за сотку"
						newClass={s.gridInfoB}
						onChange={handleChange}
						symbolOnChange="b"

					/>
				</div>
			</div>
			<div className={s.marginBottom}></div>

			<Button
				style={{ marginTop: "auto" }}
				name={"Продати"}
				onClick={SaleShares}
			/>
		</div>
	);
}

export default SaleShares;
