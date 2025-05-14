import React from "react";
import s from "./MainMenu.module.scss";
import { NavLink, useNavigate } from "react-router-dom";
import HeaderBar from "../../components/HeaderBar/HeaderBar";
import LineShares from "../../components/LineShares/LineShares";
import Button from "../../components/Button/Button";

function MainMenu(props) {
	let totalIncome = +props.state.passive_income.total + +props.state.active_income.total;
	let paycheck = totalIncome - props.state.expenses.total;

	return (
		<div className={s.financialOverview}>
			<div className={s.marquee}>
				<div className={s.marqueeText}>Мрія</div>
			</div>
			<div className={s.paddingTop}></div>
			<NavLink to="/Purse">
				<HeaderBar
					number={props.state.cash_on_hand}
					text={"Готівки на руках"}
					styleFontText={{ fontSize: "15px" }}
					style={{
						height: "12.69%",
					}}
				/>
			</NavLink>
			<div className={s.incomeOverview}>
				<HeaderBar
					number={totalIncome}
					styleFontNumber={{ fontSize: "22px" }}
					text="Загальний дохід"
					styleFontText={{ fontSize: "15px" }}
					style={{
						minHeight: "60px",
						marginBottom: "0px",
						padding: "7.5px 11.5px",
						height: "100%",
						backgroundColor: "white",
						color: "black",
						border: "3px solid black",
					}}
				/>

				<HeaderBar
					number={paycheck}
					styleFontNumber={{ fontSize: "22px" }}
					text="Получка"
					styleFontText={{ fontSize: "15px" }}
					style={{
						minHeight: "60px",
						marginBottom: "0px",
						padding: "7.5px 11.5px",
						height: "100%",
						backgroundColor: "white",
						color: "black",
						border: "3px solid black",
					}}
				/>

				<NavLink to="/PassiveIncome">
					<HeaderBar
						number={props.state.passive_income.total}
						styleFontNumber={{ fontSize: "22px" }}
						text="Пасивний дохід"
						styleFontText={{ fontSize: "15px" }}
						style={{
							minHeight: "60px",
							marginBottom: "0px",
							padding: "7.5px 11.5px",
							height: "100%",
							backgroundColor: "#B7E5C1",
							color: "black",
						}}
					/>
				</NavLink>
				<NavLink to="/Expenses">
					<HeaderBar
						number={props.state.expenses.total}
						styleFontNumber={{ fontSize: "22px" }}
						text="Витрати"
						styleFontText={{ fontSize: "15px" }}
						style={{
							minHeight: "60px",
							marginBottom: "0px",
							padding: "7.5px 11.5px",
							height: "100%",
							backgroundColor: "#E5B7B7",
							color: "black",
						}}
					/>
				</NavLink>

				<NavLink to="/ActiveIncome">
					<HeaderBar
						number={props.state.active_income.total}
						styleFontNumber={{ fontSize: "22px" }}
						text="Активний дохід"
						styleFontText={{ fontSize: "15px" }}
						style={{
							minHeight: "60px",
							marginBottom: "0px",
							padding: "7.5px 11.5px",
							height: "100%",
							backgroundColor: "#B7E5C1",
							color: "black",
						}}
					/>
				</NavLink>
				<NavLink to="/Debts">
					<HeaderBar
						number={props.state.debts.total}
						styleFontNumber={{ fontSize: "22px" }}
						text="Борги"
						styleFontText={{ fontSize: "15px" }}
						style={{
							minHeight: "60px",
							marginBottom: "0px",
							padding: "7.5px 11.5px",
							height: "100%",
							backgroundColor: "#E5B7B7",
							color: "black",
						}}
					/>
				</NavLink>
			</div>

			<div className={s.stocksOverview}>
				<NavLink to="/SaleShares">
					<LineShares
						nameShares={"УКТ"}
						totalCount={props.state.stocks.ykt.totalCount}
						averagePrice={props.state.stocks.ykt.averagePrice}
						onClick={"/BuyEarth"}
					/>
				</NavLink>
				<NavLink to="/SaleShares">
					<LineShares
						nameShares={"КРС"}
						totalCount={props.state.stocks.krs.totalCount}
						averagePrice={props.state.stocks.krs.averagePrice}
					/>
				</NavLink>
				<NavLink to="/SaleShares">
					<LineShares
						nameShares={"ДР"}
						totalCount={props.state.stocks.dr.totalCount}
						averagePrice={props.state.stocks.dr.averagePrice}
					/>{" "}
				</NavLink>{" "}
				<NavLink to="/SaleShares">
					<LineShares
						nameShares={"КЧГ"}
						totalCount={props.state.stocks.kchg.totalCount}
						averagePrice={props.state.stocks.kchg.averagePrice}
					/>{" "}
				</NavLink>{" "}
				<NavLink to="/SaleShares">
					<LineShares
						nameShares={"ЯКХЗ"}
						totalCount={props.state.stocks.yakhz.totalCount}
						averagePrice={props.state.stocks.yakhz.averagePrice}
					/>{" "}
				</NavLink>{" "}
				<NavLink to="/SaleEarn">
					<LineShares
						color="#009F23"
						nameShares={"Земля"}
						totalCount={props.state.plots.count}
						averagePrice={props.state.plots.average_price}
					/>
				</NavLink>
			</div>

			<div className={s.buttonContainer}>
				<NavLink to={"/InputScreenBuy"}>
					<Button
						height={"100%"}
						name="Купити"
						background="#B7E5C1"
						color="black"
						fontSize="24px"
					/>
				</NavLink>
				<NavLink to={"/InputScreenSale"}>
					<Button
						height={"100%"}
						name="Продати"
						background="#E5B7B7"
						color="black"
						fontSize="24px"
					/>
				</NavLink>
			</div>
		</div>
	);
}

export default MainMenu;
