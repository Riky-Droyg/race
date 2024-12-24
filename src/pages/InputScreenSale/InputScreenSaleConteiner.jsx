import { connect } from "react-redux";
import InputScreenSale from "./InputScreenSale";

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

const InputScreenSaleConteiner = connect(mapStatetoProps, mapDispatchToProps)(InputScreenSale);

export default InputScreenSaleConteiner;
