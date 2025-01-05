import { connect } from "react-redux";
import BuyEarth from "./BuyEarth";

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

const BuyEarthConteiner = connect(mapStatetoProps, mapDispatchToProps)(BuyEarth);

export default BuyEarthConteiner;
