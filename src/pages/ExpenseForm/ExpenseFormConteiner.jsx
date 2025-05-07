import { connect } from "react-redux";
import ExpenseForm from "./ExpenseForm";
import { AddExpensesThunks } from "../../components/Redux/Redux-Thunk";

let mapStatetoProps = (state) => {
	return {
		state: state.MainReduser,
	};
};

let mapDispatchToProps = (dispatch) => {
	return {
		AddExpensesThunks: (name, number) => {
			dispatch(AddExpensesThunks(name, number));
		},
		// DeleteActiveIncomeAC: (index) => {
		// 	dispatch(DeleteActiveIncomeThunks(index));
		// },
	};
};

const ExpenseFormConteiner = connect(mapStatetoProps, mapDispatchToProps)(ExpenseForm);

export default ExpenseFormConteiner;
