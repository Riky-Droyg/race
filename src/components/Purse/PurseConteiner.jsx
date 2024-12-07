import React from "react";
import { connect } from "react-redux";
import ActiveIncome from "./Purse";
import { AddActiveIncomeAC, DeleteActiveIncomeAC, PurseAC } from "../Redux/MainReduser";
import Purse from "./Purse";
import { PaycheckThunks, PurseThunks } from "../Redux/Redux-Thunk";

let mapStatetoProps = (state) => {
	return {
		state: state.MainReduser,
	};
};

let mapDispatchToProps = (dispatch) => {
	return {
		PurseThunks: (action, value) => {
			dispatch(PurseThunks(action, value));
		},
		PaycheckAC: () => {
			dispatch(PaycheckThunks());
		},
	};
};

const PurseConteiner = connect(mapStatetoProps, mapDispatchToProps)(Purse);

export default PurseConteiner;
