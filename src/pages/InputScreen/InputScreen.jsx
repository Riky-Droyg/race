import React, { useState } from "react";
import s from "./ActiveIncome.module.css";
import daggerImg from "../../img/dagger.png";
import ButtonReturn from "../../components/ButtonReturn/ButtonReturn";
import HeaderBar from "../../components/HeaderBar/HeaderBar";

function ActiveIncome(props) {

	return (
		<div className={s.financialOverview}>
			<ButtonReturn />
			{/* <div className={s.cashOnHand}>
				<div className={s.amount}>{props.state.active_income.total}</div>
				<div className={s.label}>Активний дохід</div>
			</div> */}
			<h1>Введи витрату</h1>

			
			
			<div onClick={AddActiveIncome} className={s.purse}>
				Додати
			</div>
		</div>
	);
}

export default ActiveIncome;
