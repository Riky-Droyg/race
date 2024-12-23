import React, { useState } from "react";
import s from "./Debets.module.scss";
import daggerImg from "../../img/dagger.png";
import HeaderBar from "../../components/HeaderBar/HeaderBar";
import ListItems from "../../components/ListItem/ListItems";
import ButtonReturnConteiner from "../../components/ButtonReturn/ButtonReturnConteiner";
import Button from "../../components/Button/Button";
import { NavLink } from "react-router-dom";

function Debts(props) {
	let DeleteDebts = (index) => {
		props.DeleteDebts(index);
	};

	return (
		<div className={s.financialOverview}>
			<ButtonReturnConteiner />
			<HeaderBar
				number={props.state.debts.total}
				text={"Борги"}
				style={{
					background: "#E5B7B7",
					color: "black",
				}}
				styleFontNumber={{
					fontSize: "32px",
				}}
				styleFontText={{
					fontSize: "16px",
				}}
			/>

			<ListItems
				del={DeleteDebts}
				list={props.state.debts.list}
				style={{ background: "#E5B7B7" }}
			/>

			<NavLink to={"/DebetsForm"}>
				<Button name={"Додати"} />
			</NavLink>
		</div>
	);
}

export default Debts;
