import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainMenuConteiner from "./pages/MainMenu/MainMenuConteiner";

import LoginMenuContainer from "./pages/LoginMenu/LoginMenuConteiner";
import { useEffect } from "react";
import { АuthorizationThunks } from "../src/pages/LoginMenu/LoginMenuThunk";
import { useDispatch } from "react-redux";
import PurseConteiner from "./pages/Purse/PurseConteiner";
import ExpensesConteiner from "./pages/Expenses/ExpensesConteiner";
import DebtsConteiner from "./pages/Debts/DebtsConteiner";
import ActiveIncomeConteiner from "./pages/ActiveIncome/ActiveIncomeConteiner";
import PassiveIncomeConteiner from "./pages/PassiveIncome/PassiveIncomeConteiner";
import ExpenseFormConteiner from "./pages/ExpenseForm/ExpenseFormConteiner";
import DebtsFormConteiner from "./pages/DebtsForm/DebtsFormConteiner";
import InputScreenBuyConteiner from "./pages/InputScreenBuy/InputScreenBuyConteiner";
import InputScreenSaleConteiner from "./pages/InputScreenSale/InputScreenSaleConteiner";
import BuySharesConteiner from "./pages/BuyShares/BuySharesConteiner";
import BuyBuisnesConteiner from "./pages/BuyBuisnes/BuyBuisnesConteiner";
import BuyEarthConteiner from "./pages/BuyEarth/BuyEarthConteiner";
import BuyRealtyConteiner from "./pages/BuyRealty/BuyRealtyConteiner";
import SaleSharesConteiner from "./pages/SaleShares/SaleSharesConteiner";
import SaleEarnConteiner from "./pages/SaleEarn/SaleEarnConteiner";
import SaleRealtyConteiner from "./pages/SaleRealty/SaleRealtyConteiner";

function App(props) {
	const dispatch = useDispatch();
	useEffect(() => {
		console.log("Use effect");
		// Отримуємо JSON із localStorage
		let stateJson = localStorage.getItem("state");

		if (stateJson) {
			try {
				// Парсимо JSON у об'єкт
				let state = JSON.parse(stateJson);

				// Перевіряємо, чи є необхідні дані
				if (state?.user?.nick) {
					// Викликаємо санку через dispatch
					dispatch(АuthorizationThunks(state.user.nick));
				}
			} catch (error) {
				console.error("Помилка парсингу JSON:", error);
			}
		}
	}, [dispatch]); // Залежність: щоб `dispatch` залишався стабільним

	return (
		<Router>
			<div className="app">
				<div className="wrapper">
					<Routes>
						{/* Меню входу користувача */}
						<Route
							path="/"
							element={<LoginMenuContainer />}
						/>
						{/* END Меню користувача */}

						{/* <Route path="/" element={<MainMenuConteiner />} /> */}
						<Route
							path="/MainMenu"
							element={<MainMenuConteiner />}
						/>
						<Route
							path="/Purse"
							element={<PurseConteiner />}
						/>
						<Route
							path="/PassiveIncome"
							element={<PassiveIncomeConteiner />}
						/>
						<Route
							path="/Expenses"
							element={<ExpensesConteiner />}
						/>

						<Route
							path="/ActiveIncome"
							element={<ActiveIncomeConteiner />}
						/>

						<Route
							path="/Debts"
							element={<DebtsConteiner />}
						/>

						<Route
							path="/ExpensesForm"
							element={<ExpenseFormConteiner />}
						/>
						<Route
							path="/DebtsForm"
							element={<DebtsFormConteiner />}
						/>
						<Route
							path="/InputScreenBuy"
							element={<InputScreenBuyConteiner />}
						/>
						<Route
							path="/InputScreenSale"
							element={<InputScreenSaleConteiner />}
						/>
						<Route
							path="/BuyBuisnes"
							element={<BuyBuisnesConteiner />}
						/>
						<Route
							path="/BuyShares"
							element={<BuySharesConteiner />}
						/>
						<Route
							path="/BuyEarth"
							element={<BuyEarthConteiner />}
						/>
						<Route
							path="/BuyRealty"
							element={<BuyRealtyConteiner />}
						/>
						<Route
							path="/SaleShares"
							element={<SaleSharesConteiner />}
						/>
						<Route
							path="/SaleEarn"
							element={<SaleEarnConteiner />}
						/>
						<Route
							path="/SaleRealty"
							element={<SaleRealtyConteiner />}
						/>
					</Routes>
					{/* CONTENT */}
					{/* <Profile /> */}
					{/* <Dialogs /> */}
				</div>
			</div>
		</Router>
	);
}

export default App;
