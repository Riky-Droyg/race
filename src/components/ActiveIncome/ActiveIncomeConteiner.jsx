import React from "react";
import { connect } from "react-redux";
import ActiveIncome from "./ActiveIncome";
import { AddActiveIncomeAC, DeleteActiveIncomeAC } from "../Redux/MainReduser";
import { AddActiveIncomeThunks, DeleteActiveIncomeThunks } from "../Redux/Redux-Thunk";

let mapStatetoProps = (state) => {
	return {
		state: state.MainReduser,
	};
};

let mapDispatchToProps = (dispatch) => {
	return {
		AddActiveIncomeAC: (value) => {
			dispatch(AddActiveIncomeThunks(value));
		},
		DeleteActiveIncomeAC: (index) => {
			dispatch(DeleteActiveIncomeThunks(index));
		},
	};
};

const ActiveIncomeConteiner = connect(mapStatetoProps, mapDispatchToProps)(ActiveIncome);

export default ActiveIncomeConteiner;
