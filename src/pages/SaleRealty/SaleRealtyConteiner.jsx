import { connect } from "react-redux";
import SaleRealty from "./SaleRealty";

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

const SaleRealtyConteiner = connect(mapStatetoProps, mapDispatchToProps)(SaleRealty);

export default SaleRealtyConteiner;
