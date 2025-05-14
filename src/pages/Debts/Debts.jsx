import React from "react";
import s from "./Debts.module.scss";
import HeaderBar from "../../components/HeaderBar/HeaderBar";
import ListItems from "../../components/ListItem/ListItems";
import ButtonReturnConteiner from "../../components/ButtonReturn/ButtonReturnConteiner";
import Button from "../../components/Button/Button";
import { NavLink } from "react-router-dom";

function Debts(props) {
let DeleteDebts = (index) => {
	const debt = props.state.debts.list[index];
	const confirmed = window.confirm(
		`Видалити борг "${debt.name}" на суму ${debt.sum}?`
	);
	if (!confirmed) return;

	props.DeleteDebts(index);
};
	return (
		<div className={s.wrpapper}>
			<ButtonReturnConteiner />
			<HeaderBar
				number={props.state.debts.total}
				text={"Витрати"}
				style={{
					background: "#E5B7B7",
					color: "black",
				}}
			/>

			<ListItems
				del={DeleteDebts}
				list={props.state.debts.list}
				style={{ background: "#E5B7B7" }}
			/>

			<NavLink to={"/DebtsForm"}>
				<Button name={"Додати"} />
			</NavLink>
		</div>
	);
}

export default Debts;
