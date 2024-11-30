import React from "react";
import { connect } from "react-redux";
import ActiveIncome from "./Purse";
import { AddActiveIncomeAC, DeleteActiveIncomeAC, PurseAC } from "../Redux/MainReduser";
import Purse from "./Purse";

let mapStatetoProps = (state) => {
	return {
		state: state.MainReduser,
	};
};

let mapDispatchToProps = (dispatch) => {
	return {
		PurseAC: (action, value) => {
			dispatch(PurseAC(action, value));
		},
	};
};

const PurseConteiner = connect(mapStatetoProps, mapDispatchToProps)(Purse);

export default PurseConteiner;
