import React from "react";
import s from "./ActiveIncome.module.css";
import daggerImg from "../../img/dagger.png";
import ButtonReturn from "../ButtonReturn/ButtonReturn";

function ActiveIncome(props) {
    // let newIncome = React.createRef();
    let referenceInput = React.createRef();

    let onChange = (text) => {
        let number = referenceInput.current.value;
        props.UpdateOnChangeInput(number);
    };
    let addBuisnes = () => {
        props.addBuisnes();
    };

    let deleteBuisnes = (index) => {
        props.DeleteBuisnes(index);
    };
    let content =
        props.ActiveIncome.MainMenu.active_income.active_income_data.map(
            (el, index) => (
                <div
                    onClick={() => deleteBuisnes(index)}
                    key={index}
                    className={s.businessItem}
                >
                    <img
                        className={s.buisnesDelete}
                        src={daggerImg}
                        alt="dagger"
                    />
                    <div className={s.businessSize}>{el.nameSalary}</div>
                    <div className={s.businessIncome}>{el.sumSalary}</div>
                </div>
            )
        );
    return (
        <div className={s.financialOverview}>
            <ButtonReturn />
            <div className={s.cashOnHand}>
                <div className={s.amount}>
                    {
                        props.ActiveIncome.MainMenu.active_income
                            .active_income_sum
                    }
                </div>
                <div className={s.label}>Активний дохід</div>
            </div>

            {content}
            <div className={s.optionSection}>
                <input
                    onChange={onChange}
                    ref={referenceInput}
                    value={props.ActiveIncome.MainMenu.activeInputNumber}
                    type="number"
                    className={s.numberInput}
                    placeholder="Введи зарплату з картки"
                />
            </div>

            <div onClick={addBuisnes} className={s.purse}>
                Додати
            </div>
        </div>
    );
}

export default ActiveIncome;
