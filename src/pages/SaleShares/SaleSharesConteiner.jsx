import { connect } from "react-redux";
import SaleShares from "./SaleShares";
import { sellSharesThunks } from "../../components/Redux/Redux-Thunk";

let mapStatetoProps = (state) => {
	return {
		state: state.MainReduser,
	};
};

// delete
let mapDispatchToProps = (dispatch) => {
	return {
		sellSharesThunks: (selectedButton, wantToSale, valueVoucher, totalCost) => {
			dispatch(sellSharesThunks(selectedButton, wantToSale, valueVoucher, totalCost));
		},
		// DeleteActiveIncomeAC: (index) => {
		// 	dispatch(DeleteActiveIncomeThunks(index));
		// },
	};
};

const SaleSharesConteiner = connect(mapStatetoProps, mapDispatchToProps)(SaleShares);

export default SaleSharesConteiner;
