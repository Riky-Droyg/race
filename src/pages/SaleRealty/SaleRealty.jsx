import React, { useRef, useState } from "react";
import s from "./SaleRealty.module.scss";
import Button from "../../components/Button/Button";
import ButtonReturnConteiner from "../../components/ButtonReturn/ButtonReturnConteiner";
import HeaderText from "../../components/HeaderText/HeaderText";
import { NavLink } from "react-router-dom";
import SelectionButtom from "../../components/SelectionButtom/SelectionButtom";

function SaleRealty(props) {
	// Створюємо стан для збереження вибраної кнопки
	const [selectedButton, setSelectedButton] = useState("К1");
	const [selectedID, setSelectedID] = useState("");
	const [salePrice, setSalePrice] = useState("");
	const [interest, setInterest] = useState("");


	const SellRealty = () => {
		// Знаходимо квартиру за selectedID
		const apartment = props.state.apartments.find(ap => ap.id === selectedID);
	
		// Якщо квартира не знайдена
		if (!apartment) {
			alert("Квартиру не знайдено.");
			return;
		}
	
		const originalPrice = apartment.real_price
		;
	
		// Перевірка на 0 або нижче 100%
		if (salePrice <= 0) {
			alert("Ціна продажу повинна бути більше за 0.");
			return;
		}
		if (salePrice < originalPrice) {
			alert("Ціна продажу повинна бути не менше за реальну вартість.");
			return;
		}
	
		// Підтвердження
		const confirmed = window.confirm("Ви впевнені, що хочете продати нерухомість?");
		if (confirmed) {
			props.SellRealtyThunks(salePrice, selectedID);
		}
	};

	const salePriceRef = useRef(null); // Реф для доступу до інпуту
	const interestRef = useRef(null); // Реф для доступу до інпуту

	const handleClickSalePriceRef = () => {
		if (salePriceRef.current) {
			salePriceRef.current.focus(); // Фокусуємо інпут
		}
	};
	const handleClickInterestRef = () => {
		if (interestRef.current) {
			interestRef.current.focus(); // Фокусуємо інпут
		}
	};

	const handleChange = (onlyNums, field) => {
		let a = +salePrice,
			b = +interest;
		let idFind = props.state.apartments.find((item) => item.id === selectedID);
		if (field === "a") {
			a = onlyNums;
			b = idFind && idFind.real_price ? (+a / +idFind.real_price) * 100 : "";
		} else if (field === "b") {
			b = onlyNums;

			if (idFind && idFind.real_price) {
				a = (+b / 100) * +idFind.real_price;
			}
		}
		setSalePrice(isNaN(a) || a === 0 ? "" : Math.round(a));
		setInterest(isNaN(b) || b === 0 ? "" : Math.round(b));
	};
	// Обробник для оновлення вибраної кнопки
	const handleButtonClick = (buttonName) => {
		setSelectedButton(buttonName);
		setSelectedID("");
	};

	const listRealty = props.state.apartments
		.filter((element) => element.property_type === selectedButton) // фільтрація
		.map((element) => {
			return (
				<div
					className={s.WrapperItem}
					key={element.id}
					onClick={() => setSelectedID(element.id)}
				>
					<div className={`${s.info} ${s.totalValue}`}>
						<div className={s.infoText}>Загальна вартість</div>
						<div className={s.infoNumberList}>{element.total_price}</div>
					</div>
					<div className={`${s.info} ${s.credit} ${selectedID === element.id ? s.shadowElement : ""}`}>
						<div className={s.infoText}>Кредит</div>
						<div className={s.infoNumberList}>{element.credit}</div>
					</div>
					<div className={`${s.info} ${s.realValue} ${selectedID === element.id ? s.shadowElement : ""}`}>
						<div className={s.infoText}>Реальна вартість</div>
						<div className={s.infoNumberList}>{element.real_price}</div>
					</div>
					<div className={`${s.info} ${s.infoImage}`}>
						<Button
							name={element.property_type}
							height={"100%"}
							style={{ minHeight: "47px", borderRadius: 0 }}
							className={selectedID === element.id ? s.shadowElement : ""}
						/>
					</div>
				</div>
			);
		});

	return (
		<div className={s.wrapper}>
			<ButtonReturnConteiner />

			<HeaderText text="Продати квартиру" />

			<div className={s.contentWrapper}>
				<div className={s.type}>
					<SelectionButtom
						text={"К1"}
						isSelected={selectedButton === "К1"}
						onClick={() => handleButtonClick("К1")}
					/>
					<SelectionButtom
						text={"К2"}
						isSelected={selectedButton === "К2"}
						onClick={() => handleButtonClick("К2")}
					/>
					<SelectionButtom
						text={"К3"}
						isSelected={selectedButton === "К3"}
						onClick={() => handleButtonClick("К3")}
					/>
					<SelectionButtom
						text={"К4"}
						isSelected={selectedButton === "К4"}
						onClick={() => handleButtonClick("К4")}
					/>
					<SelectionButtom
						text={"ДО"}
						isSelected={selectedButton === "ДО"}
						onClick={() => handleButtonClick("ДО")}
					/>
					<SelectionButtom
						text={"К1с"}
						isSelected={selectedButton === "К1с"}
						onClick={() => handleButtonClick("К1с")}
					/>
					<SelectionButtom
						text={"К2с"}
						isSelected={selectedButton === "К2с"}
						onClick={() => handleButtonClick("К2с")}
					/>
					<SelectionButtom
						text={"К1о"}
						isSelected={selectedButton === "К1о"}
						onClick={() => handleButtonClick("К1о")}
					/>
					<SelectionButtom
						text={"К2о"}
						isSelected={selectedButton === "К2о"}
						onClick={() => handleButtonClick("К2о")}
					/>
					<SelectionButtom
						text={"К3о"}
						isSelected={selectedButton === "К3о"}
						onClick={() => handleButtonClick("К3о")}
					/>
				</div>
				<div className={s.infoWrapper}>{listRealty}</div>

				<div className={s.paddingTop}></div>
				<div className={s.border}></div>
				<div className={s.paddingBottom}></div>

				<div className={s.infoWrapperTwo}>
					<div className={`${s.info} ${s.gridInfoB}`}>
						<div className={s.infoText}> Ціна Продажу</div>
						<div
							className={s.wrapperInput}
							onClick={handleClickSalePriceRef}
						>
							<span className={s.dolar}>$</span>

							<span className={`${salePrice.length === 0 ? s.placeholder : ""}`}>{salePrice}</span>

							<input
								ref={salePriceRef}
								className={s.infoNumber}
								type="text"
								value={salePrice}
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
						</div>
					</div>

					<div className={`${s.info} ${s.gridInfoC}`}>
						<div className={s.infoText}> Ріст ціни за відсотком</div>
						<div
							className={s.wrapperInput}
							onClick={handleClickInterestRef}
						>
							<span className={`${interest.length === 0 ? s.placeholder : ""}`}>{interest}</span>
							<span className={s.dolar}>%</span>

							<input
								ref={interestRef}
								className={s.infoNumber}
								type="text"
								value={interest}
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
						</div>
					</div>
				</div>
			</div>

			<div className={s.marginBottom}></div>

			<Button
				style={{ marginTop: "auto" }}
				name={"Продати"}
				onClick={SellRealty}
			/>
		</div>
	);
}

export default SaleRealty;
