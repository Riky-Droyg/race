import React, { useState } from "react";
import s from "./Shares.module.css";
import ButtonReturnConteiner from "../ButtonReturn/ButtonReturnConteiner";

function Shares(props) {
	let [price, setPrice] = useState("");
	let [number, setNumber] = useState(""); // Початкове значення — пустий рядок
	let [selectShares, setSelectShares] = useState("УКТ"); // Початкове значення — пустий рядок
	let [totalPrice, setTotalPrice] = useState(""); // Початкове значення — пустий рядок

	const priceChange = (event) => {
		let newPrice = event.target.value;
		setPrice(newPrice);

		if (newPrice && number) {
			let a = parseInt(number) * parseInt(newPrice);
			setTotalPrice(Math.round(a));
		} else {
			return setTotalPrice("");
		}
	};
	const numberChange = (event) => {
		let newNumber = event.target.value;
		setNumber(newNumber);

		if (price && newNumber) {
			let a = parseInt(newNumber) * parseInt(price);
			setTotalPrice(Math.round(a));
		} else {
			return setTotalPrice("");
		}
	};

	const selectSharesChange = (shares) => {
		setSelectShares(shares); // Оновлення стану при зміні значення
	};

	let AddShares = () => {
		if (props.state.cash_on_hand < totalPrice) {
			alert("Не достатньо готівки");
			console.log("Не достатньо готівки");

		} else {
			props.AddShares(selectShares, number, price);
		}
	};
	let DeleteShares = () => {
		let transformNameShares = () => {
			switch (selectShares) {
				case "УКТ": {
					return "ykt";
				}
				case "КРС": {
					return "krs";
				}
				case "ДР": {
					return "dr";
				}
				case "КЧГ": {
					return "kchg";
				}
				case "ЯКХЗ": {
					return "yakhz";
				}
				default:
					console.log('error "addSharesThunks"');
			}
		};
			if (props.state.stocks[transformNameShares()].totalCount < +number) {
		    alert("кількість наявних акцій не достання для продажу")
			console.log("кількість наявних акцій не достання для продажу");
		} else {
			props.DeleteShares(selectShares, number, totalPrice);
		}
	};

	return (
		<div className={s.financialOverview}>
			<ButtonReturnConteiner />
			<div className={s.cashOnHand}>
				<div className={s.amount}>{props.state.cash_on_hand}</div>
				<div className={s.label}>Готівки на руках</div>
			</div>
			<div className={s.stocksOverview}>
				<div className={s.headerRow}>
					<div className={s.headerItem}>Акції</div>
					<div className={s.headerItem}>К-ть</div>
					<div className={s.headerItem}>Ціна</div>
				</div>
				<div
					onClick={() => selectSharesChange("УКТ")}
					className={s.dataRow}
				>
					<div className={s.dataItem}>УКТ</div>
					<div className={s.dataItem}>{props.state.stocks.ykt.totalCount}</div>
					<div className={s.dataItem}>{props.state.stocks.ykt.averagePrice}</div>
				</div>
				<div
					onClick={() => selectSharesChange("КРС")}
					className={s.dataRow}
				>
					<div className={s.dataItem}>КРС</div>
					<div className={s.dataItem}>{props.state.stocks.krs.totalCount}</div>
					<div className={s.dataItem}>{props.state.stocks.krs.averagePrice}</div>
				</div>
				<div
					onClick={() => selectSharesChange("ДР")}
					className={s.dataRow}
				>
					<div className={s.dataItem}>ДР</div>
					<div className={s.dataItem}>{props.state.stocks.dr.totalCount}</div>
					<div className={s.dataItem}>{props.state.stocks.dr.averagePrice}</div>
				</div>
				<div
					onClick={() => selectSharesChange("КЧГ")}
					className={s.dataRow}
				>
					<div className={s.dataItem}>КЧГ</div>
					<div className={s.dataItem}>{props.state.stocks.kchg.totalCount}</div>
					<div className={s.dataItem}>{props.state.stocks.kchg.averagePrice}</div>
				</div>
				<div
					onClick={() => selectSharesChange("ЯКХЗ")}
					className={s.dataRow}
				>
					<div className={s.dataItem}>ЯКХЗ</div>
					<div className={s.dataItem}>{props.state.stocks.yakhz.totalCount}</div>
					<div className={s.dataItem}>{props.state.stocks.yakhz.averagePrice}</div>
				</div>
			</div>

			<div className={s.optionSection}>
				<div className={s.wrapperInpun}>
					<input
						onChange={numberChange}
						value={number}
						type="text"
						className={s.numberInput}
						placeholder={`Кількість акцій ${selectShares}`}
					/>
				</div>
				<div className={s.wrapperInpun}>
					<input
						onChange={priceChange}
						value={price}
						type="number"
						className={s.numberInput}
						placeholder={`Ціна однієї акції ${selectShares}`}
					/>
				</div>
			</div>
			<div className={s.wrapper_buttons}>
				<div
					onClick={AddShares}
					className={s.purse}
				>
					Купити
				</div>
				<div
					onClick={DeleteShares}
					className={s.purse}
				>
					Продати
				</div>
			</div>
			<div className={s.wrapperSum}>
				<input
					onChange={priceChange}
					value={totalPrice}
					type="number"
					className={s.sum}
					placeholder={`Загальна вартість ${selectShares}`}
				/>
			</div>
		</div>
	);
}

export default Shares;
