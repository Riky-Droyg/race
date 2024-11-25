import React from "react";
import { connect } from "react-redux";
import PassiveIncome from "./PassiveIncome";
import { AddBuisnesAC, ChangeBisnesSizeAC, DeleleBuisnesAC, UpdateOneChangeAC } from "../Redux/PassiveIncomeReduser";
import { UpdateStateAC } from "../Redux/MainReduser";
import { AddDataThunks, DeleteDataThunks } from "../Redux/Redux-Thunk";

let mapStatetoProps = (state) => {
	return {
		state: state.MainReduser,
	};
};

let mapDispatchToProps = (dispatch) => {
	return {
		UpdateOnChangeInput: (text) => {
			dispatch(UpdateOneChangeAC(text));
		},
		addBuisnes: (sizeBuisnes, value) => {
			dispatch(AddDataThunks(sizeBuisnes, value));
		},
		DeleteBuisnes: (index) => {
			dispatch(DeleteDataThunks(index));
		},
	};
};

const PassiveIncomeConteiner = connect(mapStatetoProps, mapDispatchToProps)(PassiveIncome);

export default PassiveIncomeConteiner;
