import React from "react";
import s from "./Shares.module.css";
import daggerImg from "../../img/dagger.png";
import ButtonReturn from "../ButtonReturn/ButtonReturn";

function Shares(props) {
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
    let AddShares = () => {
        props.AddShares();
    };
    let DeleteShares = () => {
        props.DeleteShares();
    };

    let DeleleExpenses = (index) => {
        props.DeleleExpenses(index);
    };
    let ChangeSelectStocksYkt = () => {
        props.ChangeSelectStocks("YKT");
    };
    let ChangeSelectStocksKrs = () => {
        props.ChangeSelectStocks("KRS");
    };
    let ChangeSelectStocksDr = () => {
        props.ChangeSelectStocks("DR");
    };
    let ChangeSelectStocksKchg = () => {
        props.ChangeSelectStocks("KCHG");
    };
    let ChangeSelectStocksYakhz = () => {
        props.ChangeSelectStocks("YAKHZ");
    };

    let waysYKT = {
        number: props.Shares.MainMenu.shares.ykt.number,
        averangePrice: props.Shares.MainMenu.shares.ykt.averangePrice,
    };
    let waysKRS = {
        number: props.Shares.MainMenu.shares.krs.number,
        averangePrice: props.Shares.MainMenu.shares.krs.averangePrice,
    };
    let waysDR = {
        number: props.Shares.MainMenu.shares.dr.number,
        averangePrice: props.Shares.MainMenu.shares.dr.averangePrice,
    };
    let waysKCHG = {
        number: props.Shares.MainMenu.shares.kchg.number,
        averangePrice: props.Shares.MainMenu.shares.kchg.averangePrice,
    };
    let waysYAKHZ = {
        number: props.Shares.MainMenu.shares.yakhz.number,
        averangePrice: props.Shares.MainMenu.shares.yakhz.averangePrice,
    };

    return (
        <div className={s.financialOverview}>
            <ButtonReturn />

            <div className={s.stocksOverview}>
                <div className={s.headerRow}>
                    <div className={s.headerItem}>Акції</div>
                    <div className={s.headerItem}>К-ть</div>
                    <div className={s.headerItem}>Ціна</div>
                </div>
                <div onClick={ChangeSelectStocksYkt} className={s.dataRow}>
                    <div className={s.dataItem}>УКТ</div>
                    <div className={s.dataItem}>{waysYKT.number}</div>
                    <div className={s.dataItem}>{waysYKT.averangePrice}</div>
                </div>
                <div onClick={ChangeSelectStocksKrs} className={s.dataRow}>
                    <div className={s.dataItem}>КРС</div>
                    <div className={s.dataItem}>{waysKRS.number}</div>
                    <div className={s.dataItem}>{waysKRS.averangePrice}</div>
                </div>
                <div onClick={ChangeSelectStocksDr} className={s.dataRow}>
                    <div className={s.dataItem}>ДР</div>
                    <div className={s.dataItem}>{waysDR.number}</div>
                    <div className={s.dataItem}>{waysDR.averangePrice}</div>
                </div>
                <div onClick={ChangeSelectStocksKchg} className={s.dataRow}>
                    <div className={s.dataItem}>КЧХЗ</div>
                    <div className={s.dataItem}>{waysKCHG.number}</div>
                    <div className={s.dataItem}>{waysKCHG.averangePrice}</div>
                </div>
                <div onClick={ChangeSelectStocksYakhz} className={s.dataRow}>
                    <div className={s.dataItem}>ЯКХЗ</div>
                    <div className={s.dataItem}>{waysYAKHZ.number}</div>
                    <div className={s.dataItem}>{waysYAKHZ.averangePrice}</div>
                </div>
            </div>

            <div className={s.optionSection}>
                <div className={s.wrapperInpun}>
                    <input
                        onChange={onChangeActiveInputName}
                        ref={referenceInputName}
                        value={props.Shares.MainMenu.shares.activeInputNumber}
                        type="text"
                        className={s.numberInput}
                        placeholder={`Кількість акцій ${props.Shares.MainMenu.shares.selectStocks}`}
                    />
                </div>
                <div className={s.wrapperInpun}>
                    <input
                        onChange={onChangeActiveInput}
                        ref={referenceInput}
                        value={props.Shares.MainMenu.shares.activeInputPrice}
                        type="number"
                        className={s.numberInput}
                        placeholder={`Ціна акцій ${props.Shares.MainMenu.shares.selectStocks}`}
                    />
                </div>
            </div>
            <div className={s.wrapper_buttons}>
                <div onClick={AddShares} className={s.purse}>
                    Купити
                </div>
                <div onClick={DeleteShares} className={s.purse}>
                    Продати
                </div>
            </div>
            <div className={s.wrapperSum}>
            <input
                        value={props.Shares.MainMenu.shares.activeInputSum}
                        type="number"
                        className={s.sum}
                        placeholder={`Ціна акцій ${props.Shares.MainMenu.shares.selectStocks}`}
                    />
            </div>
        </div>
    );
}

export default Shares;
