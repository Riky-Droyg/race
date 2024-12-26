import { connect } from "react-redux";
import BuyShares from "./BuyShares";

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

const BuySharesConteiner = connect(mapStatetoProps, mapDispatchToProps)(BuyShares);

export default BuySharesConteiner;
