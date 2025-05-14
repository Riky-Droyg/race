import React, { useRef, useState } from "react";
import s from "./SaleEarn.module.scss";
import Button from "../../components/Button/Button";
import ButtonReturnConteiner from "../../components/ButtonReturn/ButtonReturnConteiner";
import HeaderText from "../../components/HeaderText/HeaderText";
import { NavLink } from "react-router-dom";
import SelectionButtom from "../../components/SelectionButtom/SelectionButtom";

function SaleEarn(props) {
	const SaleEarn = () => {
		const available = availability(); // доступна кількість соток
		const avgPurchasePrice = averagePrice(); // середня ціна купівлі
		const profitOrLoss = (valueVoucher - avgPurchasePrice) * wantToSale; // +/- різниця
		const profitText = profitOrLoss >= 0 ? "прибуток" : "збиток";

		// Перевірка кількості
		if (wantToSale > available) {
			alert(`У вас лише ${available} соток. Ви не можете продати ${wantToSale}.`);
			return 0;
		}

		// Повідомлення з розрахунками
		const message = `Ви хочете продати ${wantToSale} соток за ціною $${valueVoucher} кожна.
	Загальна сума: $${totalCost}.
	Середня ціна купівлі: $${avgPurchasePrice}.
	Очікуваний ${profitText}: $${Math.abs(profitOrLoss)}.
	Підтвердити продаж?`;

		const isConfirmed = window.confirm(message);

		if (isConfirmed) {
			props.sellEarnThunks(wantToSale, valueVoucher, totalCost);
			setWantToSale("");
			setValueVoucher("");
			setTotalCost("0");

			return wantToSale;
		} else {
			return 0;
		}
	};

	// Створюємо стан для збереження вибраної кнопки
	const [wantToSale, setWantToSale] = useState("");
	const [valueVoucher, setValueVoucher] = useState("");
	const [totalCost, setTotalCost] = useState("0");

	// Обробник для оновлення вибраної кнопки
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
		return props.state.plots.count || 0;
	};
	const averagePrice = () => {
		return props.state.plots.average_price || 0;
	};

	const handleChange = (onlyNums, field) => {
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
		setTotalCost(isNaN(c) || c === 0 ? "0" : c);
	};

	return (
		<div className={s.wrapper}>
			<ButtonReturnConteiner />

			<HeaderText text="Продати Землю" />

			<div className={s.contentWrapper}>
				<div className={s.infoWrapper}>
					<div className={`${s.info} ${s.infoGrid}`}>
						<div className={s.infoText}>кількість соток</div>
						<div className={s.infoNumberOrigin}>{availability()}</div>
					</div>
					<div className={s.info}>
						<div className={s.infoText}> Середня ціна за сотку</div>
						<div className={s.infoNumberOrigin}>${averagePrice()}</div>
					</div>
				</div>
				<div className={s.margin}></div>

				<div className={s.paddingTop}></div>
				<div className={s.border}></div>
				<div className={s.paddingBottom}></div>

				<div className={s.infoWrapperTwo}>
					<div className={`${s.info} ${s.gridInfoA}`}>
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
					</div>
					<div className={`${s.info} ${s.gridInfoB}`}>
						<div className={s.infoText}> Кількість</div>
						<div
							className={s.wrapperInput}
							onClick={handleClickWantToSaleRef}
						>
							<span className={s.dolar}>$</span>

							<span className={`${wantToSale.length === 0 ? s.placeholder : ""}`}>{wantToSale}</span>

							<input
								ref={wantToSaleRef}
								className={s.infoNumber}
								type="text"
								value={wantToSale}
								placeholder="0"
								maxLength={7}
								inputMode="numeric"
								pattern="[0-9]*"
								onInput={(e) => {
									const onlyNums = e.target.value.replace(/[^\d]/g, ""); // Видаляє все, крім цифр
									handleChange(onlyNums, "b"); // Передаємо очищене значення і тип
								}}
								onKeyDown={(e) => {
									if (["e", "E", "-", "+"].includes(e.key)) {
										e.preventDefault(); // Блокуємо введення непотрібних символів
									}
								}}
							/>
						</div>{" "}
					</div>
					<div className={`${s.info} ${s.gridInfoC}`}>
						<div className={s.infoText}> Загальна вартість</div>
						<div className={s.wrapperInput}>
							<span className={s.dolar}>$</span>

							<span>{totalCost}</span>
						</div>
					</div>
				</div>
			</div>
			<div className={s.marginBottom}></div>

			<Button
				style={{ marginTop: "auto" }}
				name={"Продати"}
				onClick={SaleEarn}
			/>
		</div>
	);
}

export default SaleEarn;
