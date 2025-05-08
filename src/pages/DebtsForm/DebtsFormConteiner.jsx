import { connect } from "react-redux";
import DebtsForm from "./DebtsForm";
import { AddDebtsThunks } from "../../components/Redux/Redux-Thunk";

let mapStatetoProps = (state) => {
	return {
		state: state.MainReduser,
	};
};

let mapDispatchToProps = (dispatch) => {
	return {
		AddDebtsThunks: (name, number) => {
			dispatch(AddDebtsThunks(name, number));
		},
		// DeleteActiveIncomeAC: (index) => {
		// 	dispatch(DeleteActiveIncomeThunks(index));
		// },
	};
};

const DebtsFormConteiner = connect(mapStatetoProps, mapDispatchToProps)(DebtsForm);

export default DebtsFormConteiner;
