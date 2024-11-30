import React from "react";
import { connect } from "react-redux";
import Expenses from "./Expenses";
import { AddExpensesThunks } from "../Redux/Redux-Thunk";
import { DeleteExpensesAC } from "../Redux/MainReduser";

let mapStatetoProps = (state) => {
    return {
        state: state.MainReduser,
    };
};

let mapDispatchToProps = (dispatch) => {
    return {
        AddExpenses: (text, value) => {
            dispatch(AddExpensesThunks(text, value));
        },
        DeleleExpenses: (index) => {
            dispatch(DeleteExpensesAC(index))
        }, 


    };
};

const ExpensesConteiner = connect(
    mapStatetoProps,
    mapDispatchToProps
)(Expenses);

export default ExpensesConteiner;
