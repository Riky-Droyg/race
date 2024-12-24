import React from "react";
import ImgArrow from "../../img/arrow.png";
import s from "./ButtonReturn.module.scss";
import { NavLink } from "react-router-dom";

const ButtonReturn = ({ link = "/MainMenu", state }) => {
	let text = `Готівка: ${state.cash_on_hand.toLocaleString("en-US")}`;
	return (
			<NavLink className={s.wrapper} to={link}>
				<img
					className={s.ImgArrow}
					src={ImgArrow}
					alt="Arrow"
				/>
				<div className={s.Text}>{text}</div>
				<div className={s.block}></div>
			</NavLink>
	);
};
export default ButtonReturn;
