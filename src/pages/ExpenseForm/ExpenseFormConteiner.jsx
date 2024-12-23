import { connect } from "react-redux";
import ExpenseForm from "./ExpenseForm";

let mapStatetoProps = (state) => {
	return {
		state: state.MainReduser,
	};
};

let mapDispatchToProps = (dispatch) => {
	return {
		// AddActiveIncomeAC: (value) => {
		// 	dispatch(AddActiveIncomeThunks(value));
		// },
		// DeleteActiveIncomeAC: (index) => {
		// 	dispatch(DeleteActiveIncomeThunks(index));
		// },
	};
};

const ExpenseFormConteiner = connect(mapStatetoProps, mapDispatchToProps)(ExpenseForm);

export default ExpenseFormConteiner;
