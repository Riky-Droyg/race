import { connect } from "react-redux";
import SaleShares from "./SaleShares";

let mapStatetoProps = (state) => {
	return {
		state: state.MainReduser,
	};
};

// delete
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

const SaleSharesConteiner = connect(mapStatetoProps, mapDispatchToProps)(SaleShares);

export default SaleSharesConteiner;
