import React, { useRef, useState } from "react";
import s from "./BuyEarth.module.scss";
import Button from "../../components/Button/Button";
import ButtonReturnConteiner from "../../components/ButtonReturn/ButtonReturnConteiner";
import HeaderText from "../../components/HeaderText/HeaderText";
import EarnIcon from "../../img/Earn.svg";
import TypeIcon from "../../img/TypeIcon.svg";

function BuyEarth(props) {
	// Створюємо стан для збереження вибраної кнопки
	const [count, setCount] = useState("1"); // кількість
	const [average_price, setAverage_price] = useState("1"); // ціна покупки разово
	// const [total_price, settotal_price] = useState(""); // ціна покупки разово

	let total_price = count * average_price;

	// Обробник для оновлення вибраної кнопки
	const handleChangecount = (event) => {
		setCount(event.target.value);
	};
	const handleChangeaverage_price = (event) => {
		setAverage_price(event.target.value);
	};
	const AddEarn = () => {
		props.AddEarnThunks(count, average_price, total_price);
	};

	const countRef = useRef(null); // Реф для доступу до інпуту
	const average_priceRef = useRef(null); // Реф для доступу до інпуту

	const handleClickCountRef = () => {
		if (countRef.current) {
			countRef.current.focus(); //  Фокусуємо інпут
		}
	};
	const handleClickAverage_priceRef = () => {
		if (average_priceRef.current) {
			average_priceRef.current.focus(); // Фокусуємо інпут
		}
	};

	return (
		<div className={s.wrapper}>
			<ButtonReturnConteiner />

			<HeaderText text="Введіть дані ділянки" />

			<div className={s.contentWrapper}>
				<div className={s.infoWrapper}>
					<div className={`${s.info} ${s.gridHeader}`}>
						<div className={s.infoText}>Площа ділянки (соток)</div>
						<div
							className={s.wrapperInput}
							onClick={handleClickCountRef}
						>
							<span className={s.dolar}>$</span>

							<span className={`${count.length === 0 ? s.placeholder : ""}`}>{count}</span>

							<input
								ref={countRef}
								className={s.infoNumber}
								type="text"
								value={count}
								onChange={handleChangecount} // Виклик функції при зміні
								placeholder="0"
								maxLength={7}
							/>
						</div>
					</div>
					<div className={`${s.info} ${s.gridInfoA}`}>
						<div className={s.infoText}> Загальна вартість</div>
						<div className={s.wrapperInput}>
							<span className={s.dolar}>$</span>

							<span className={`${total_price.length === 0 ? s.placeholder : ""}`}>{total_price}</span>

							
						</div>
					</div>
					<div className={`${s.info} ${s.gridInfoB}`}>
						<div className={s.infoText}> Ціна за сотку</div>
						<div
							className={s.wrapperInput}
							onClick={handleClickAverage_priceRef}
						>
							<span className={s.dolar}>$</span>

							<span className={`${average_price.length === 0 ? s.placeholder : ""}`}>{average_price}</span>

							<input
								ref={average_priceRef}
								className={s.infoNumber}
								type="text"
								value={average_price}
								onChange={handleChangeaverage_price} // Виклик функції при зміні
								placeholder="0"
								maxLength={7}
							/>
						</div>
					</div>
					<div className={`${s.info} ${s.gridImg}`}>
						<img
							className={s.typeIcon}
							src={TypeIcon}
							alt="Example SVG"
						/>
						<img
							className={s.EarnIcon}
							src={EarnIcon}
							alt="Example SVG"
						/>
					</div>
				</div>
			</div>
			<div className={s.margin}></div>

			<Button
				style={{ marginTop: "auto" }}
				name={"Придбати"}
				onClick={AddEarn}
			/>
		</div>
	);
}

export default BuyEarth;
