import React from "react";
import s from "./TotalIncome.module.css";
import daggerImg from "../../img/dagger.png";

function TotalIncome(props) {
    
    // let newIncome = React.createRef();
    let referenceInput = React.createRef();
    let activeCheckBox = "Малий";

    let onChange = (text) => {
        let number = referenceInput.current.value;
        props.UpdateOnChangeInput(number);
    };
    // let addValueIncome = (text) => {
    // };
    let changeRadioButtonSmall = () => {
        props.ChangeBisnesSize("Малий");
    };
    let changeRadioButtonBig = () => {
        props.ChangeBisnesSize("Великий");
    };
    let changeRadioButtonExpansion = () => {
        props.ChangeBisnesSize("Розширення");
    };
    let addBuisnes = () => {
        props.addBuisnes();
    };

    let deleteBuisnes = (index) => {
        props.DeleteBuisnes(index);
    };
    let content = props.TotalIncome.MainMenu.buisnes.map((el, index) => (
        <div
            onClick={() => deleteBuisnes(index)}
            key={index}
            className={s.businessItem}
        >
            <img className={s.buisnesDelete} src={daggerImg} alt="dagger" />
            <div className={s.businessSize}>{el.buisnessSize}</div>
            <div className={s.businessIncome}>{el.incomeBuisnes}</div>
        </div>
    ));
    return (
        <div className={s.financialOverview}>
            <div className={s.cashOnHand}>
                <div className={s.amount}>
                    {props.TotalIncome.MainMenu.total_income}
                </div>
                <div className={s.label}>Загальний дохід</div>
            </div>

            <div className={s.optionSection}>
                <div className={s.optionRow}>
                    <label htmlFor="radioButtonSmall" className={s.optionLabel}>
                        Малий
                    </label>
                    <input
                        onChange={changeRadioButtonSmall}
                        type="radio"
                        name="o"
                        id="radioButtonSmall"
                        className={s.optionInput}
                        defaultChecked
                    />
                </div>
                <div className={s.optionRow}>
                    <label htmlFor="radioButtonBig" className={s.optionLabel}>
                        Великий
                    </label>
                    <input
                        onChange={changeRadioButtonBig}
                        type="radio"
                        name="o"
                        id="radioButtonBig"
                        className={s.optionInput}
                    />
                </div>
                <div className={s.optionRow}>
                    <label
                        htmlFor="radioButtonExpansion"
                        className={s.optionLabel}
                    >
                        Розширення
                    </label>
                    <input
                        onChange={changeRadioButtonExpansion}
                        type="radio"
                        name="o"
                        id="radioButtonExpansion"
                        className={s.optionInput}
                    />
                </div>

                <input
                    onChange={onChange}
                    ref={referenceInput}
                    value={props.activeInput}
                    type="number"
                    className={s.numberInput}
                />
            </div>

            <div onClick={addBuisnes} className={s.purse}>
                Новий бізнес
            </div>
            {content}
        </div>
    );
}

export default TotalIncome;
