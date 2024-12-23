import { connect } from "react-redux";
import DebetsForm from "./DebetsForm";

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

const DebetsFormConteiner = connect(mapStatetoProps, mapDispatchToProps)(DebetsForm);

export default DebetsFormConteiner;
