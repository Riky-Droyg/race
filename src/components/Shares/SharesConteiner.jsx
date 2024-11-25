import React from "react";
import { connect } from "react-redux";
// import {
//     ChangeBisnesSizeAC,
// } from "../Redux/PassiveIncomeReduser";
import { AddExpensesAC, DeleleExpensesAC, UpdateOneChangeActiveInputAC, UpdateOneChangeActiveInputNameAC } from "../Redux/ExpensesReduser";
import Shares from "./Shares";
// import { AddSharesAC, ChangeSelectStocksAC, DeleteSharesAC } from "../Redux/SharesReduser";

let mapStatetoProps = (state) => {
    return {
        Shares: state.SharesReduser,
    };
};

let mapDispatchToProps = (dispatch) => {
    return {
        // ChangeBisnesSize: (buisnesSize) => {
        //     dispatch(ChangeBisnesSizeAC(buisnesSize));
        // },
        UpdateOneChangeActiveInput: (text) => {
            dispatch(UpdateOneChangeActiveInputAC(text));
        },
        UpdateOneChangeActiveInputName: (text) => {
            dispatch(UpdateOneChangeActiveInputNameAC(text));
        },
        AddExpenses: () => {
            dispatch(AddExpensesAC());
        },
        DeleleExpenses: (index) => {
            dispatch(DeleleExpensesAC(index))
        },
        
        // AddShares: (name) => {
        //     dispatch(AddSharesAC(name))
        // },
        // DeleteShares: (name) => {
        //     dispatch(DeleteSharesAC(name))
        // },
        // ChangeSelectStocks:(name) => {
        //     dispatch(ChangeSelectStocksAC(name))
        // },
    };
};

const SharesConteiner = connect(
    mapStatetoProps,
    mapDispatchToProps
)(Shares);

export default SharesConteiner;
