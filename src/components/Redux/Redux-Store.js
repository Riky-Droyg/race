import { applyMiddleware, combineReducers, createStore,  } from "redux";
import MainMenuReduser from "./MainMenuReduser";
import PassiveIncomeReduser from "./PassiveIncomeReduser";
import ExpensesReduser from "./ExpensesReduser";
import ActiveIncomeReduser from "./ActiveIncomeReduser";
import DebtsReduser from "./DebetsReduser";
import SharesReduser from "./SharesReduser";
import MainReduser from "./MainReduser";
import { thunk } from "redux-thunk";
import { getTestThunks, getThunks, putTestThunks,  } from "./Redux-Thunk";


let redusers = combineReducers({
   
    MainReduser,
    
});

let store = createStore(redusers, applyMiddleware(thunk)); 
export default store;