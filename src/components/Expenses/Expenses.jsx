import React, { useState } from "react";
import s from "./Expenses.module.css";
import daggerImg from "../../img/dagger.png";
import ButtonReturn from "../ButtonReturn/ButtonReturn";

function Expenses(props) {
	let [nameExpenses, setNameExpenses] = useState("");
	let [value, setValue] = useState(""); // Початкове значення — пустий рядок

	const nameExpensesChange = (event) => {
		setNameExpenses(event.target.value);
        console.log(nameExpenses) // Оновлення стану при зміні значення
	};
	const valueChange = (event) => {
		setValue(event.target.value); // Оновлення стану при зміні значення
	};



    let AddExpenses = () => {
        props.AddExpenses(nameExpenses, +value);
        setNameExpenses("")
        setValue("")
    };

    let DeleleExpenses = (index) => {
        props.DeleleExpenses(index);
    };
    let content = props.state.expenses.list.map((el, index) => (
        <div
            onClick={() => DeleleExpenses(index)}
            key={index}
            className={s.businessItem}
        >
            <img className={s.buisnesDelete} src={daggerImg} alt="dagger" />
            <div className={s.businessSize}>{el.name}</div>
            <div className={s.businessIncome}>{el.sum}</div>
        </div>
    ));

    return (
        <div className={s.financialOverview}>
            <ButtonReturn />
            <div className={s.cashOnHand}>
                <div className={s.amount}>
                    {props.state.expenses.total}
                </div>
                <div className={s.label}>Витрати</div>
            </div>

            <div className={s.optionSection}>
                <div className={s.wrapperInpun}>
                    <input
                        onChange={nameExpensesChange}
                        value={nameExpenses}
                        type="text"
                        className={s.numberInput}
                        placeholder="Назва витрати"

                    />
                </div>
                <div className={s.wrapperInpun}>
                    <input
                        onChange={valueChange}
                        value={value}
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

export default Expenses;
