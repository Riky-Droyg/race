import React from "react";
import { connect } from "react-redux";
import {
    ChangeBisnesSizeAC,
} from "../Redux/PassiveIncomeReduser";
// import { AddExpensesAC, DeleleExpensesAC, UpdateOneChangeActiveInputAC, UpdateOneChangeActiveInputNameAC } from "../Redux/ExpensesReduser";
import Debets from "./Debets";

let mapStatetoProps = (state) => {
    return {
        Debets: state.DebtsReduser,
    };
};

let mapDispatchToProps = (dispatch) => {
    return {
        // ChangeBisnesSize: (buisnesSize) => {
        //     dispatch(ChangeBisnesSizeAC(buisnesSize));
        // },
        // UpdateOneChangeActiveInput: (text) => {
        //     dispatch(UpdateOneChangeActiveInputAC(text));
        // },
        // UpdateOneChangeActiveInputName: (text) => {
        //     dispatch(UpdateOneChangeActiveInputNameAC(text));
        // },
        // AddExpenses: () => {
        //     dispatch(AddExpensesAC());
        // },
        // DeleleExpenses: (index) => {
        //     dispatch(DeleleExpensesAC(index))
        // },
    };
};

const DebetsConteiner = connect(
    mapStatetoProps,
    mapDispatchToProps
)(Debets);

export default DebetsConteiner;
