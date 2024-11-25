import React from "react";
import s from "./Debets.module.css";
import daggerImg from "../../img/dagger.png";
import ButtonReturn from "../ButtonReturn/ButtonReturn";

function Debets(props) {
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
    let content = props.Debets.MainMenu.debets.debets_data.map((el, index) => (
        <div
            onClick={() => DeleleExpenses(index)}
            key={index}
            className={s.businessItem}
        >
            <img className={s.buisnesDelete} src={daggerImg} alt="dagger" />
            <div className={s.businessSize}>{el.nameDebets}</div>
            <div className={s.businessIncome}>{el.sumDebets}</div>
        </div>
    ));
    return (
        <div className={s.financialOverview}>
            <ButtonReturn />
            <div className={s.cashOnHand}>
                <div className={s.amount}>
                    {props.Debets.MainMenu.debets.debets_sum}
                </div>
                <div className={s.label}>Борги</div>
            </div>

            <div className={s.optionSection}>
                <div className={s.wrapperInpun}>
                    <input
                        onChange={onChangeActiveInputName}
                        ref={referenceInputName}
                        value={props.Debets.MainMenu.activeInputText}
                        type="text"
                        className={s.numberInput}
                        placeholder="Назва боргу"

                    />
                </div>
                <div className={s.wrapperInpun}>
                    <input
                        onChange={onChangeActiveInput}
                        ref={referenceInput}
                        value={props.Debets.MainMenu.activeInputNumber}
                        type="number"
                        className={s.numberInput}
                        placeholder="Сума"
                    />
                </div>
            </div>

            <div onClick={AddExpenses} className={s.purse}>
                Додати 
            </div>
            {content}
        </div>
    );
}

export default Debets;
