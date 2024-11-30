import React from "react";
import { connect } from "react-redux";
import ActiveIncome from "./ActiveIncome";
import { AddActiveIncomeAC, DeleteActiveIncomeAC } from "../Redux/MainReduser";

let mapStatetoProps = (state) => {
    return {
        state: state.MainReduser,
    };
};

let mapDispatchToProps = (dispatch) => {
    return {
        AddActiveIncomeAC: (value) => {
            dispatch(AddActiveIncomeAC(value));
        },
        DeleteActiveIncomeAC: (index) => {
            dispatch(DeleteActiveIncomeAC(index))
        },
    };
};

const ActiveIncomeConteiner = connect(
    mapStatetoProps,
    mapDispatchToProps
)(ActiveIncome);

export default ActiveIncomeConteiner;
