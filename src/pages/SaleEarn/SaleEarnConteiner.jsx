import { connect } from "react-redux";
import SaleEarn from "./SaleEarn";

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

const SaleEarnConteiner = connect(mapStatetoProps, mapDispatchToProps)(SaleEarn);

export default SaleEarnConteiner;
