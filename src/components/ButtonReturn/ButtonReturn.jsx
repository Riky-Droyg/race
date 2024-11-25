import React from "react";
import ImgArrow from "../../img/arrow.png";
import s from "./ButtonReturn.module.css";
import { NavLink } from "react-router-dom";

const ButtonReturn = () => {
    return (
        <NavLink to="/MainMenu">
            <div className={s.buttonReturn}>
                <img
                    className={s.buttomReturnImgArrow}
                    src={ImgArrow}
                    alt="Arrow"
                />
                <div className={s.buttonReturnText}> Головне меню</div>
            </div>
        </NavLink>
    );
};
export default ButtonReturn;
