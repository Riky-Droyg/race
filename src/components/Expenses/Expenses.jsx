import React from "react";
import s from "./Expenses.module.css";
import daggerImg from "../../img/dagger.png";
import ButtonReturn from "../ButtonReturn/ButtonReturn";
import { getTestThunks } from "../Redux/Redux-Thunk";

function Expenses(props) {
    // let newIncome = React.createRef();
    let referenceInput = React.createRef();
    let referenceInputName = React.createRef();

    let onChangeActiveInput = () => {
        let number = referenceInput.current.value;
        props.UpdateOneChangeActiveInput(number);
    };
    let onChangeActiveInputName = () => {
        let text = referenceInputName.current.value;
        props.UpdateOneChangeActiveInputName(text);
    };
    let AddExpenses = () => {
        props.AddExpenses();
    };

    let DeleleExpenses = (index) => {
        props.DeleleExpenses(index);
    };
    let content = props.Expenses.MainMenu.expenses.expenses_data.map((el, index) => (
        <div
            onClick={() => DeleleExpenses(index)}
            key={index}
            className={s.businessItem}
        >
            <img className={s.buisnesDelete} src={daggerImg} alt="dagger" />
            <div className={s.businessSize}>{el.nameExpenses}</div>
            <div className={s.businessIncome}>{el.sumExpenses}</div>
        </div>
    ));
let putTestThunks = () =>{
    props.putTestThunks("active_income", 999)
}
    return (
        <div className={s.financialOverview}>
            <ButtonReturn />
            <div className={s.cashOnHand}>
                <div className={s.amount}>
                    {props.Expenses.MainMenu.expenses.expenses_sum}
                </div>
                <div className={s.label}>Витрати</div>
            </div>

            <div className={s.optionSection}>
                <div className={s.wrapperInpun}>
                    <input
                        onChange={onChangeActiveInputName}
                        ref={referenceInputName}
                        value={props.Expenses.MainMenu.activeInputText}
                        type="text"
                        className={s.numberInput}
                        placeholder="Назва витрати"

                    />
                </div>
                <div className={s.wrapperInpun}>
                    <input
                        onChange={onChangeActiveInput}
                        ref={referenceInput}
                        value={props.Expenses.MainMenu.activeInputNumber}
                        type="number"
                        className={s.numberInput}
                        placeholder="Сума"
                    />
                </div>
            </div>

            <div onClick={putTestThunks} className={s.purse}>
                Додати 
            </div>
            {content}
        </div>
    );
}

export default Expenses;
