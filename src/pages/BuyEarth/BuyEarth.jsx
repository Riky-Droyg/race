import React, { useRef, useState } from "react";
import s from "./BuyEarth.module.scss";
import Button from "../../components/Button/Button";
import ButtonReturnConteiner from "../../components/ButtonReturn/ButtonReturnConteiner";
import HeaderText from "../../components/HeaderText/HeaderText";
import EarnIcon from "../../img/Earn.svg";
import TypeIcon from "../../img/TypeIcon.svg";
import { useNavigate } from "react-router-dom";
import Input from "../../components/Input/Input";

function BuyEarth(props) {
	// Створюємо стан для збереження вибраної кнопки
	const [count, setCount] = useState(""); // кількість
	const [average_price, setAverage_price] = useState(""); // ціна покупки разово
	// const [total_price, settotal_price] = useState(""); // ціна покупки разово
	const navigate = useNavigate();

	let total_price = count * average_price;

	// Обробник для оновлення вибраної кнопки
	const handleChangecount = (event) => {
		setCount(event.target.value);
	};
	const handleChangeaverage_price = (event) => {
		setAverage_price(event.target.value);
	};
	const AddEarn = () => {
		debugger
		const numericFields = [
			{ name: "Площа ділянки (соток)", value: count },
			{ name: "Ціна за сотку", value: average_price },
		];

		for (const field of numericFields) {
			if (!field.value || isNaN(field.value) || Number(field.value) <= 0) {
				alert(`Будь ласка, введіть коректне число більше 0 для поля "${field.name}".`);
				return;
			}
		}

		const total_price = count * average_price;

		if (Number(total_price) > props.state.cash_on_hand) {
			alert("Недостатньо коштів для придбання ділянки.");
			return;
		}

		const confirmed = window.confirm(`Придбати ділянку за $${total_price}?`);
		if (!confirmed) return;

		props.AddEarnThunks(count, average_price, total_price);
		navigate("/SaleEarn");
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
					{/* <div className={`${s.info} ${s.gridHeader}`}>
						<div className={s.infoText}>Площа ділянки (соток)</div>
						<div
							className={s.wrapperInput}
							onClick={handleClickCountRef}
						>
							<span className={`${count.length === 0 ? s.placeholder : ""}`}>{count}</span>

							<input
								ref={countRef}
								className={s.infoNumber}
								type="text"
								value={count}
								placeholder="0"
								maxLength={7}
								inputMode="numeric"
								pattern="[0-9]*"
								onInput={(e) => {
									const onlyNums = e.target.value.replace(/[^\d]/g, ""); // Видаляє всі символи, що не є цифрами
									setCount(onlyNums);
								}}
								onKeyDown={(e) => {
									if (["e", "E", "-", "+"].includes(e.key)) {
										e.preventDefault(); // Блокуємо введення "e", "E", "+" та "-"
									}
								}}
							/>
						</div>
					</div> */}

					{/* <div className={`${s.info} ${s.gridInfoA}`}>
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
								placeholder="0"
								maxLength={7}
								inputMode="numeric"
								pattern="[0-9]*"
								onInput={(e) => {
									const onlyNums = e.target.value.replace(/[^\d]/g, ""); // Видаляє всі символи, що не є цифрами
									setAverage_price(onlyNums);
								}}
								onKeyDown={(e) => {
									if (["e", "E", "-", "+"].includes(e.key)) {
										e.preventDefault(); // Блокуємо введення "e", "E", "+" та "-"
									}
								}}
							/>
						</div>
					</div> */}
					<Input
						text="Площа ділянки (соток)"
						newClass={s.gridHeader}
						onChange={setCount}

					
					/>
					<Input
						text="Загальна вартість"
						newClass={s.gridInfoA}
						disabled={true}
						value={`${total_price}`}
					
					/>
					<Input
						text="Ціна за сотку"
						newClass={s.gridInfoB}
						onChange={setAverage_price}

					/>

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
