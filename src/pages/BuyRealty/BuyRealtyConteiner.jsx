import { connect } from "react-redux";
import BuyRealty from "./BuyRealty";

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

const BuyRealtyConteiner = connect(mapStatetoProps, mapDispatchToProps)(BuyRealty);

export default BuyRealtyConteiner;
