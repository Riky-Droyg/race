import React from "react";
import s from "./Expenses.module.scss";
import HeaderBar from "../../components/HeaderBar/HeaderBar";
import ListItems from "../../components/ListItem/ListItems";
import ButtonReturnConteiner from "../../components/ButtonReturn/ButtonReturnConteiner";
import Button from "../../components/Button/Button";
import { NavLink } from "react-router-dom";

function Expenses(props) {
	let DeleleExpenses = (index) => {
		props.DeleleExpenses(index);
	};

	return (
		<div className={s.wrpapper}>
			<ButtonReturnConteiner />
			<HeaderBar
				number={props.state.expenses.total}
				text={"Витрати"}
				style={{
					background: "#E5B7B7",
					color: "black",
				}}
			/>

			<ListItems
				del={DeleleExpenses}
				list={props.state.expenses.list}
				style={{ background: "#E5B7B7" }}
			/>

			<NavLink to={"/ExpensesForm"}>
				<Button name={"Додати"} />
			</NavLink>
		</div>
	);
}

export default Expenses;
