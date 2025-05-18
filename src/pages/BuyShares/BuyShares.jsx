import React, { useRef, useState } from "react";
import s from "./BuyShares.module.scss";
import Button from "../../components/Button/Button";
import ButtonReturnConteiner from "../../components/ButtonReturn/ButtonReturnConteiner";
import HeaderText from "../../components/HeaderText/HeaderText";
import SelectionButtom from "../../components/SelectionButtom/SelectionButtom";
import { useNavigate } from "react-router-dom";
import Input from "../../components/Input/Input";

function BuyShares(props) {
	const navigate = useNavigate();
	const addShares = () => {
		if (!selectedButton) {
			alert("Будь ласка, оберіть тип акції перед покупкою.");
			return;
		}

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
		if (onlyNums === "") {
			onlyNums = 0
		}

		let b = +wantToBuy,
			a = +valueVoucher,
			c = +totalCost;
		if (field === "a") {
			a = +onlyNums;
			c = +a * +b;
		} else if (field === "b") {
			b = +onlyNums;
			c = +a * +b;
		} else if (field === "c") {
			c = +onlyNums;
			b = +a !== 0 ? +c / +a : 0;
		}
		// debugger;
		setValueVoucher(isNaN(+a) || +a === 0 ? "" : +a);
		setWantToBuy(isNaN(+b) || +b === 0 ? "" : Math.round(+b));
		setTotalCost(isNaN(+c) || +c === 0 ? "" : +c);
		console.log(wantToBuy);
	};
	console.log(wantToBuy);

	return (
		<div className={s.wrapper}>
			<ButtonReturnConteiner />

			<HeaderText text="Придбати акції" />

			<div className={s.contentWrapper}>
				<div className={s.infoWrapper}>
					<Input
						text="Вартість ваучера"
						onChange={handleChange}
						symbolOnChange="a"
						value={valueVoucher}
					/>
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
					<Input
						text="Хочу придбати"
						onChange={handleChange}
						symbolOnChange="b"
						value={wantToBuy}
						displaySymbol=""
					/>
					<Input
						text="Загальна вартість"
						onChange={handleChange}
						symbolOnChange="c"
						value={totalCost}
					/>
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
