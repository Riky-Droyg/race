import { connect } from "react-redux";
// import { AddExpensesAC, DeleleExpensesAC, UpdateOneChangeActiveInputAC, UpdateOneChangeActiveInputNameAC } from "../Redux/ExpensesReduser";
import Debets from "./Debets";
import { AddDebtsThunks, DeleteDebtsThunks } from "../../components/Redux/Redux-Thunk";
// import { AddDebtsThunks, DeleteDebtsThunks } from "../Redux/Redux-Thunk";

let mapStatetoProps = (state) => {
	return {
		state: state.MainReduser,
	};
};

let mapDispatchToProps = (dispatch) => {
	return {
		// ChangeBisnesSize: (buisnesSize) => {
		//     dispatch(ChangeBisnesSizeAC(buisnesSize));
		// },
		// UpdateOneChangeActiveInput: (text) => {
		//     dispatch(UpdateOneChangeActiveInputAC(text));
		// },
		// UpdateOneChangeActiveInputName: (text) => {
		//     dispatch(UpdateOneChangeActiveInputNameAC(text));
		// },
		AddDebts: (text, value) => {
			dispatch(AddDebtsThunks(text, value));
		},
		DeleteDebts: (index) => {
		    dispatch(DeleteDebtsThunks(index))
		},
	};
};

const DebetsConteiner = connect(mapStatetoProps, mapDispatchToProps)(Debets);

export default DebetsConteiner;
