import { connect } from "react-redux";
import BuyBuisnes from "./BuyBuisnes";

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

const BuyBuisneConteiner = connect(mapStatetoProps, mapDispatchToProps)(BuyBuisnes);

export default BuyBuisneConteiner;
