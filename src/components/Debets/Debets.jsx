import React, { useState } from "react";
import s from "./Debets.module.css";
import daggerImg from "../../img/dagger.png";
import ButtonReturn from "../ButtonReturn/ButtonReturn";

function Debts(props) {
	let [nameDebts, setNameDebts] = useState("");
	let [value, setValue] = useState(""); // Початкове значення — пустий рядок

	const nameDebtsChange = (event) => {
		setNameDebts(event.target.value);
        console.log(nameDebts) // Оновлення стану при зміні значення
	};
	const valueChange = (event) => {
		setValue(event.target.value); // Оновлення стану при зміні значення
	};



    let AddDebts = () => {
        props.AddDebts(nameDebts, +value);
        setNameDebts("")
        setValue("")
    };

    let DeleteDebts = (index) => {
        props.DeleteDebts(index);
    };
    let content = props.state.debts.list.map((el, index) => (
        <div
            onClick={() => DeleteDebts(index)}
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
                    {props.state.debts.total}
                </div>
                <div className={s.label}>Борги</div>
            </div>

            <div className={s.optionSection}>
                <div className={s.wrapperInpun}>
                    <input
                        onChange={nameDebtsChange}
                        value={nameDebts}
                        type="text"
                        className={s.numberInput}
                        placeholder="Назва"

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

            <div onClick={AddDebts} className={s.purse}>
                Додати 
            </div>
            {content}
        </div>
	);
}

export default Debts;
