import { connect } from "react-redux";
import SaleRealty from "./SaleRealty";
import { SaleRealtyThunks, SellRealtyThunks } from "../../components/Redux/Redux-Thunk";

let mapStatetoProps = (state) => {
	return {
		state: state.MainReduser,
	};
};

let mapDispatchToProps = (dispatch) => {
	return {
		SellRealtyThunks: (salePrice, selectedID) => {
			dispatch(SellRealtyThunks(salePrice, selectedID));
		},
		// DeleteActiveIncomeAC: (index) => {
		// 	dispatch(DeleteActiveIncomeThunks(index));
		// },
	};
};

const SaleRealtyConteiner = connect(mapStatetoProps, mapDispatchToProps)(SaleRealty);

export default SaleRealtyConteiner;
