import React from "react";
import s from "./MainMenu.module.css";
import { NavLink } from "react-router-dom";

function MainMenu(props) {
	return (
		<div className={s.financialOverview}>
			<div className={s.cashOnHand}>
				<div className={s.amount}>{props.state.cash_on_hand}</div>
				<div className={s.label}>Готівки на руках</div>
			</div>
			<div className={s.incomeOverview}>
				<div className={s.totalIncome}>
					<div className={s.amount}>{props.state.total_income}</div>
					<div className={s.label}>Загальний дохід</div>
				</div>

				<div className={s.salary}>
					<div className={s.amount}>{props.state.salary}</div>
					<div className={s.label}>Получка</div>
				</div>

				<NavLink to="/PassiveIncome">
					<div className={s.passiveIncome}>
						<div className={s.amount}>
							{
								props.state.passive_income.total
							}
						</div>
						<div className={s.label}>Пасивний дохід</div>
					</div>
				</NavLink>
				<NavLink to="/Expenses">
					<div className={s.expenses}>
						<div className={s.amount}>{props.state.expenses.total} </div>
						<div className={s.label}>Витрати</div>
					</div>
				</NavLink>

				<NavLink to="/ActiveIncome">
					<div className={s.activeIncome}>
						<div className={s.amount}>{props.state.active_income}</div>
						<div className={s.label}>Активний дохід</div>
					</div>
				</NavLink>
				<NavLink to="/Debets">
					<div className={s.debts}>
						<div className={s.amount}> {props.state.debts.total}</div>
						<div className={s.label}>Борги</div>
					</div>
				</NavLink>
			</div>

			{/* Акції  */}
			<NavLink to="/Shares">
				<div className={s.stocksOverview}>
					<div className={s.headerRow}>
						<div className={s.headerItem}>Акції</div>
						<div className={s.headerItem}>К-ть</div>
						<div className={s.headerItem}>Ціна</div>
					</div>
					<div className={s.dataRow}>
						<div className={s.dataItem}>УКТ</div>
						<div className={s.dataItem}>1.000</div>
						<div className={s.dataItem}>1.000</div>
					</div>
					<div className={s.dataRow}>
						<div className={s.dataItem}>УКТ</div>
						<div className={s.dataItem}>1.000</div>
						<div className={s.dataItem}>1.000</div>
					</div>
					<div className={s.dataRow}>
						<div className={s.dataItem}>УКТ</div>
						<div className={s.dataItem}>1.000</div>
						<div className={s.dataItem}>1.000</div>
					</div>
					<div className={s.dataRow}>
						<div className={s.dataItem}>УКТ</div>
						<div className={s.dataItem}>1.000</div>
						<div className={s.dataItem}>1.000</div>
					</div>
				</div>
			</NavLink>
			<div className={s.purse}>Гаманець</div>
		</div>
	);
}

export default MainMenu;
