import React from "react";
import { connect } from "react-redux";
import {
    AddBuisnesAC,
    ChangeBisnesSizeAC,
    DeleleBuisnesAC,
} from "../Redux/PassiveIncomeReduser";
import Expenses from "./Expenses";
// import { AddExpensesAC, DeleleExpensesAC, UpdateOneChangeActiveInputAC, UpdateOneChangeActiveInputNameAC } from "../Redux/ExpensesReduser";
import { getTestThunks, putTestThunks } from "../Redux/Redux-Thunk";

let mapStatetoProps = (state) => {
    return {
        Expenses: state.ExpensesReduser,
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

const ExpensesConteiner = connect(
    mapStatetoProps,
    mapDispatchToProps
)(Expenses);

export default ExpensesConteiner;
