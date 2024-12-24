import { connect } from "react-redux";
import InputScreenBuy from "./InputScreenBuy";

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

const InputScreenBuyConteiner = connect(mapStatetoProps, mapDispatchToProps)(InputScreenBuy);

export default InputScreenBuyConteiner;
