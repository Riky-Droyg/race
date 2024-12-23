import React from "react";
import s from "./HeaderText.module.scss";


const HeaderText = ({text}) => {
    return (
            <div className={s.wrapper}>
               
                <div className={s.Text}>{text}</div>
               
            </div>
    );
};
export default HeaderText;
