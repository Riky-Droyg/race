import React from "react";
import { connect } from "react-redux";
import TotalIncome from "./TotalIncome";
import {
    AddBuisnesAC,
    ChangeBisnesSizeAC,
    DeleleBuisnesAC,
    UpdateOneChangeAC,
    UpdateTotalIncomeAC,
} from "../Redux/TotalIncomeReduser";

let mapStatetoProps = (state) => {
    return {
        TotalIncome: state.TotalIncomeReduser,
    };
};

let mapDispatchToProps = (dispatch) => {
    return {
        ChangeBisnesSize: (buisnesSize) => {
            dispatch(ChangeBisnesSizeAC(buisnesSize));
        },
        UpdateOnChangeInput: (text) => {
            dispatch(UpdateOneChangeAC(text));
        },
        addBuisnes: () => {
            dispatch(AddBuisnesAC());
        },
        DeleteBuisnes: (index) => {
            dispatch(DeleleBuisnesAC(index))
        },
        UpdateTotalIncome: () => {
            
            dispatch(UpdateTotalIncomeAC())
        }
    };
};

const TotalIncomeConteiner = connect(
    mapStatetoProps,
    mapDispatchToProps
)(TotalIncome);

export default TotalIncomeConteiner;
