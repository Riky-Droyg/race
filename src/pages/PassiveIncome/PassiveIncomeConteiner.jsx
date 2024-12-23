import React from "react";
import { connect } from "react-redux";
import PassiveIncome from "./PassiveIncome";

let mapStatetoProps = (state) => {
	return {
		state: state.MainReduser,
	};
};

let mapDispatchToProps = (dispatch) => {
	return {
		// addBuisnes: (sizeBuisnes, value) => {
		// 	dispatch(AddBuisnesThunks(sizeBuisnes, value));
		// },
		// DeleteBuisnes: (index) => {
		// 	dispatch(DeleteBuisnesThunks(index));
		// },
	};
};

const PassiveIncomeConteiner = connect(mapStatetoProps, mapDispatchToProps)(PassiveIncome);

export default PassiveIncomeConteiner;
