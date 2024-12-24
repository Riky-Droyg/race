import { connect } from "react-redux";
import SelectionButtom from "./SelectionButtom";
import { PaycheckThunks, PurseThunks } from "../Redux/Redux-Thunk";

let mapStatetoProps = (state) => {
	return {
		state: state.MainReduser,
	};
};

let mapDispatchToProps = (dispatch) => {
	return {
		// PurseThunks: (action, value) => {
		// 	dispatch(PurseThunks(action, value));
		// },
		// PaycheckAC: () => {
		// 	dispatch(PaycheckThunks());
		// },
	};
};

const SelectionButtomConteiner = connect(mapStatetoProps, mapDispatchToProps)(SelectionButtom);

export default SelectionButtomConteiner;
