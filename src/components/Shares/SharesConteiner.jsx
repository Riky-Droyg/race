import React from "react";
import { connect } from "react-redux";
import Shares from "./Shares";
import { addSharesThunks, deleteSharesThunks, sellingSharesThunks } from "../Redux/Redux-Thunk";

let mapStatetoProps = (state) => {
    return {
        state: state.MainReduser,
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
        
        AddShares: (nameShares, count, price) => {
            dispatch(addSharesThunks(nameShares, count, price))
        },
        DeleteShares: (nameShares, count, price) => {
            dispatch(sellingSharesThunks(nameShares, count, price))
        },
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
