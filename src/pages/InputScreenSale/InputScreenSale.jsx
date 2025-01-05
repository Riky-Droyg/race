import React from "react";
import s from "./InputScreenSale.module.scss";
import Button from "../../components/Button/Button";
import ButtonReturnConteiner from "../../components/ButtonReturn/ButtonReturnConteiner";
import HeaderText from "../../components/HeaderText/HeaderText";
import { NavLink } from "react-router-dom";

let styleButton = {
	justifyContent: "flex-start",
	padding: "0 36px",
	fontWeight: "400",
  marginBottom:"7px",
};

function InputScreenSale(props) {
	return (
		<div className={s.financialOverview}>
			<ButtonReturnConteiner />
			<HeaderText text="Що будеш продавати?" />
			<NavLink to={"/SaleShares"}>
				<Button
					name={"Акції"}
					buttonActive={s.activeGreen} // Передаємо клас для активації кнопки
					fontSize="16px" // Передаємо шрифт
					color="black" // Колір тексту
					background="#F5F5F5" // Колір фону
					style={styleButton} // Передаємо стилі кнопки
				/>
			</NavLink>
			<NavLink to={"/SaleRealty"}>
				<Button
					name={"Квартира | Будинок"}
					buttonActive={s.activeGreen} // Передаємо клас для активації кнопки
					fontSize="16px" // Передаємо шрифт
					color="black" // Колір тексту
					background="#F5F5F5" // Колір фону
					style={styleButton} // Передаємо стилі кнопки
				/>
			</NavLink>
			<NavLink to={"/SaleEarn"}>
				<Button
					name={"Земля"}
					buttonActive={s.activeGreen} // Передаємо клас для активації кнопки
					fontSize="16px" // Передаємо шрифт
					color="black" // Колір тексту
					background="#F5F5F5" // Колір фону
					style={styleButton} // Передаємо стилі кнопки
				/>
			</NavLink>
		</div>
	);
}

export default InputScreenSale;
