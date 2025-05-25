import React, { useRef, useState } from "react";
import s from "./SaleEarn.module.scss";
import Button from "../../components/Button/Button";
import ButtonReturnConteiner from "../../components/ButtonReturn/ButtonReturnConteiner";
import HeaderText from "../../components/HeaderText/HeaderText";
import Input from "../../components/Input/Input";

function SaleEarn(props) {
		// Створюємо стан для збереження вибраної кнопки
		const [wantToSale, setWantToSale] = useState("");
		const [valueVoucher, setValueVoucher] = useState("");
		const [totalCost, setTotalCost] = useState("0");
	
	
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

			return;
		} else {
			return 0;
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
		setValueVoucher(isNaN(a) || a <= 0 ? "" : a.toString());
		setWantToSale(isNaN(b) || b <= 0 ? "" : Math.round(b).toString());
		setTotalCost(isNaN(c) || c <= 0 ? "0" : c.toString());
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
					<Input
						text="Вартість продажу"
						newClass={s.gridInfoA}
						value={valueVoucher}
						onChange={handleChange}
						symbolOnChange="a"
						
					/>
					<Input
						text="Загальна вартість"
						newClass={s.gridInfoC}
						value={`${totalCost}`}
						onChange={handleChange}
						symbolOnChange="c"
						disabled={true}
					/>
					<Input
						text="Кількість"
						newClass={s.gridInfoB}
						value={wantToSale}
						onChange={handleChange}
						symbolOnChange="b"
				
					/>
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
