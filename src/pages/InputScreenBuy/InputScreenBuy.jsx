import React from "react";
import s from "./InputScreenBuy.module.scss";
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

function InputScreenBuy(props) {
	return (
		<div className={s.financialOverview}>
			<ButtonReturnConteiner />
			<HeaderText text="Що будеш купувати?" />
			<NavLink to={"/BuyBuisnes"}>
				<Button
					name={"Бізнес"}
					buttonActive={s.activeGreen} // Передаємо клас для активації кнопки
					fontSize="16px" // Передаємо шрифт
					color="black" // Колір тексту
					background="#F5F5F5" // Колір фону
					style={styleButton} // Передаємо стилі кнопки
				/>
			</NavLink>
			<NavLink to={"/BuyRealty"}>
				<Button
					name={"Квартира і будинок "}
					buttonActive={s.activeGreen} // Передаємо клас для активації кнопки
					fontSize="16px" // Передаємо шрифт
					color="black" // Колір тексту
					background="#F5F5F5" // Колір фону
					style={styleButton} // Передаємо стилі кнопки
				/>
			</NavLink>
			<NavLink to={"/BuyEarth"}>
				<Button
					name={"Земля"}
					buttonActive={s.activeGreen} // Передаємо клас для активації кнопки
					fontSize="16px" // Передаємо шрифт
					color="black" // Колір тексту
					background="#F5F5F5" // Колір фону
					style={styleButton} // Передаємо стилі кнопки
				/>
			</NavLink>
			<NavLink to={"/BuyShares"}>
				<Button
					name={"Акції"}
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

export default InputScreenBuy;
