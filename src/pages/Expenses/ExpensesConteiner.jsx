import React from "react";
import { connect } from "react-redux";
import Expenses from "./Expenses";
import { AddExpensesThunks, DeleteExpensesThunks } from "../../components/Redux/Redux-Thunk";
import { DeleteExpensesAC } from "../../components/Redux/MainReduser";

let mapStatetoProps = (state) => {
	return {
		state: state.MainReduser,
	};
};

let mapDispatchToProps = (dispatch) => {
	return {
		AddExpenses: (text, value) => {
			dispatch(AddExpensesThunks(text, value));
		},
		DeleleExpenses: (index) => {
			dispatch(DeleteExpensesThunks(index));
		},
	};
};

const ExpensesConteiner = connect(mapStatetoProps, mapDispatchToProps)(Expenses);

export default ExpensesConteiner;
