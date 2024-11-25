import React from "react";
import { connect } from "react-redux";
import ActiveIncome from "./ActiveIncome";
import {
    AddExpensesAC,
    ChangeBisnesSizeAC,
    DeleleExpensesAC,
    UpdateOneChangeActiveInputAC,
} from "../Redux/ActiveIncomeReduser";

let mapStatetoProps = (state) => {
    return {
        ActiveIncome: state.ActiveIncomeReduser,
    };
};

let mapDispatchToProps = (dispatch) => {
    return {
        ChangeBisnesSize: (buisnesSize) => {
            dispatch(ChangeBisnesSizeAC(buisnesSize));
        },
        UpdateOnChangeInput: (text) => {
            dispatch(UpdateOneChangeActiveInputAC(text));
        },
        addBuisnes: () => {
            dispatch(AddExpensesAC());
        },
        DeleteBuisnes: (index) => {
            dispatch(DeleleExpensesAC(index))
        },
    };
};

const ActiveIncomeConteiner = connect(
    mapStatetoProps,
    mapDispatchToProps
)(ActiveIncome);

export default ActiveIncomeConteiner;
