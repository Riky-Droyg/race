import { connect } from "react-redux";
// import { AddDebetsAC, DeleleDebetsAC, UpdateOneChangeActiveInputAC, UpdateOneChangeActiveInputNameAC } from "../Redux/DebetsReduser";
import Debts from "./Debts";
import { AddDebtsThunks, DeleteDebtsThunks } from "../../components/Redux/Redux-Thunk";
// import { AddDebtsThunks, DeleteDebtsThunks } from "../Redux/Redux-Thunk";

let mapStatetoProps = (state) => {
	return {
		state: state.MainReduser,
	};
};

let mapDispatchToProps = (dispatch) => {
	return {
		AddDebets: (text, value) => {
			dispatch(AddDebtsThunks(text, value));
		},
		DeleteDebts: (index) => {
			dispatch(DeleteDebtsThunks(index));
		},
	};
};

const DebtsConteiner = connect(mapStatetoProps, mapDispatchToProps)(Debts);

export default DebtsConteiner;
