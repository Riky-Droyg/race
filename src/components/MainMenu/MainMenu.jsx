import React from "react";
import s from "./MainMenu.module.css";
import { NavLink } from "react-router-dom";

function MainMenu(props) {
	let totalIncome = +props.state.passive_income.total + +props.state.active_income.total;
	let paycheck = totalIncome - props.state.expenses.total;

	return (
		<div className={s.financialOverview}>
			<NavLink to="/Purse">
				<div className={s.cashOnHand}>
					<div className={s.amount}>{props.state.cash_on_hand}</div>
					<div className={s.label}>Готівки на руках</div>
				</div>
			</NavLink>
			<div className={s.incomeOverview}>
				<div className={s.totalIncome}>
					<div className={s.amount}>{totalIncome}</div>
					<div className={s.label}>Загальний дохід</div>
				</div>

				<div className={s.salary}>
					<div className={s.amount}>{paycheck}</div>
					<div className={s.label}>Получка</div>
				</div>

				<NavLink to="/PassiveIncome">
					<div className={s.passiveIncome}>
						<div className={s.amount}>{props.state.passive_income.total}</div>
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
						<div className={s.amount}>{props.state.active_income.total}</div>
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
						<div className={s.dataItem}>{props.state.stocks.ykt.totalCount}</div>
						<div className={s.dataItem}>{props.state.stocks.ykt.averagePrice}</div>
					</div>
					<div className={s.dataRow}>
						<div className={s.dataItem}>КРС</div>
						<div className={s.dataItem}>{props.state.stocks.krs.totalCount}</div>
						<div className={s.dataItem}>{props.state.stocks.krs.averagePrice}</div>
					</div>
					<div className={s.dataRow}>
						<div className={s.dataItem}>ДР</div>
						<div className={s.dataItem}>{props.state.stocks.dr.totalCount}</div>
						<div className={s.dataItem}>{props.state.stocks.dr.averagePrice}</div>
					</div>
					<div className={s.dataRow}>
						<div className={s.dataItem}>КЧГ</div>
						<div className={s.dataItem}>{props.state.stocks.kchg.totalCount}</div>
						<div className={s.dataItem}>{props.state.stocks.kchg.averagePrice}</div>
					</div>
					<div className={s.dataRow}>
						<div className={s.dataItem}>ЯКХЗ</div>
						<div className={s.dataItem}>{props.state.stocks.yakhz.totalCount}</div>
						<div className={s.dataItem}>{props.state.stocks.yakhz.averagePrice}</div>
					</div>
				</div>
			</NavLink>
		</div>
	);
}

export default MainMenu;
