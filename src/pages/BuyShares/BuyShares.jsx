import React, { useRef, useState } from "react";
import s from "./BuyShares.module.scss";
import Button from "../../components/Button/Button";
import ButtonReturnConteiner from "../../components/ButtonReturn/ButtonReturnConteiner";
import HeaderText from "../../components/HeaderText/HeaderText";
import SelectionButtom from "../../components/SelectionButtom/SelectionButtom";
import { useNavigate } from "react-router-dom";

function BuyShares(props) {
	const navigate = useNavigate();
	const addShares = () => {
		const purchaseCost = valueVoucher * wantToBuy;

		if (purchaseCost > totalCost) {
			const maxAffordableUnits = Math.floor(totalCost / valueVoucher);
			const message = `⚠️ Сума покупки перевищує доступний бюджет.

💰 Ви можете придбати лише: ${maxAffordableUnits} одиниць
💵 Ціна за одиницю: $${valueVoucher}
📉 Ваш поточний бюджет: $${maxAffordableUnits * valueVoucher}

✅ Підтвердити покупку?
❌ Відхилити дію?`;

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
				navigate("/SaleShares");
				return wantToBuy;

			} else {
				return 0;
			}
		}
	};
	// props.addSharesThunks(selectedButton, wantToBuy, valueVoucher, totalCost);

	// Створюємо стан для збереження вибраної кнопки
	const [selectedButton, setSelectedButton] = useState("");
	const [wantToBuy, setWantToBuy] = useState("");
	const [valueVoucher, setValueVoucher] = useState("");
	const [totalCost, setTotalCost] = useState("");
	// Обробник для оновлення вибраної кнопки

	const handleButtonClick = (buttonName) => {
		setSelectedButton(buttonName);
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

	const handleChange = (onlyNums, field) => {
		let b = +wantToBuy,
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
								placeholder="0"
								maxLength={7}
								inputMode="numeric"
								pattern="[0-9]*"
								onInput={(e) => {
									const onlyNums = e.target.value.replace(/[^\d]/g, ""); // Видаляє все, крім цифр
									handleChange(onlyNums, "c"); // Передаємо очищене значення і тип
								}}
								onKeyDown={(e) => {
									if (["e", "E", "-", "+"].includes(e.key)) {
										e.preventDefault(); // Блокуємо введення непотрібних символів
									}
								}}
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
