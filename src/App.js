import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainMenuConteiner from "./components/MainMenu/MainMenuConteiner";
import PassiveIncomeConteiner from "./components/PassiveIncome/PassiveIncomeConteiner";
import ExpensesConteiner from "./components/Expenses/ExpensesConteiner";
import ActiveIncomeConteiner from "./components/ActiveIncome/ActiveIncomeConteiner";
import DebetsConteiner from "./components/Debets/DebetsConteiner";
import SharesConteiner from "./components/Shares/SharesConteiner";
import LoginMenuContainer from "./components/LoginMenu/LoginMenuConteiner";
import { useEffect } from "react";
import { АuthorizationThunks } from "./components/Redux/Redux-Thunk";
import { useDispatch } from "react-redux";

function App(props) {
	const dispatch = useDispatch();
	useEffect(() => {
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
						<Route path="/" element={<LoginMenuContainer />} />
						{/* END Меню користувача */}

						<Route path="/" element={<MainMenuConteiner />} />
						<Route path="/MainMenu" element={<MainMenuConteiner />} />
						<Route path="/PassiveIncome" element={<PassiveIncomeConteiner />} />
						{/* <Route
              path="/Expenses"
              element={<ExpensesConteiner />}
            />
            <Route
              path="/ActiveIncome"
              element={<ActiveIncomeConteiner/>}
            />
            <Route
              path="/Debets"
              element={<DebetsConteiner/>}
            />
            <Route
              path="/Shares"
              element={<SharesConteiner/>}
            /> */}
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
