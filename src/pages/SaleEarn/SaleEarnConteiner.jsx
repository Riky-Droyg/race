import { connect } from "react-redux";
import SaleEarn from "./SaleEarn";
import { sellEarnThunks } from "../../components/Redux/Redux-Thunk";

let mapStatetoProps = (state) => {
	return {
		state: state.MainReduser,
	};
};

let mapDispatchToProps = (dispatch) => {
	return {
		sellEarnThunks: ( wantToSale, valueVoucher, totalCost) => {
			dispatch(sellEarnThunks( wantToSale, valueVoucher, totalCost));
		},
		// DeleteActiveIncomeAC: (index) => {
		// 	dispatch(DeleteActiveIncomeThunks(index));
		// },
	};
};

const SaleEarnConteiner = connect(mapStatetoProps, mapDispatchToProps)(SaleEarn);

export default SaleEarnConteiner;
