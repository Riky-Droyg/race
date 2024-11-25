import State from "./Data";

export let ADD_EXPENSES = "ADD_EXPENSES";
export let UPDATE_ONE_CHANGE_ACTIVE_INPUT = "UPDATE_ONE_CHANGE_ACTIVE_INPUT";
export let UPDATE_ONE_CHANGE_ACTIVE_INPUT_NAME = "UPDATE_ONE_CHANGE_ACTIVE_INPUT_NAME";
export let DELETE_EXPENSES = "DELETE_EXPENSES";
export let UPADE_STATE = "UPADE_STATE";

let initialState = {
	data: {}, // Масив для збереження отриманих даних
	isLoading: false, // Стан завантаження
	error: null, // Помилки
};

const ExpensesReduser = (state = State, action) => {
	switch (action.type) {
		case ADD_EXPENSES: {
			const newExpenses = {
				id: state.MainMenu.expenses.expenses_data.length + 1,
				nameExpenses: state.MainMenu.activeInputText,
				sumExpenses: state.MainMenu.activeInputNumber,
			};
			const updatedBuisnes = [...state.MainMenu.expenses.expenses_data, newExpenses];
			const totallExpenses = () => {
				return updatedBuisnes.reduce((sum, el) => {
					return sum + Number(el.sumExpenses);
				}, 0);
			};
			return {
				...state,
				MainMenu: {
					...state.MainMenu,
					expenses: {
						expenses_data: [...state.MainMenu.expenses.expenses_data, newExpenses],
						expenses_sum: totallExpenses(),
					},
					activeInputNumber: "",
					activeInputText: "",
				},
			};
		}
		case DELETE_EXPENSES: {
			let deleleExpenses = [
				...state.MainMenu.expenses.expenses_data.slice(0, action.index), // Частина масиву до видаленого елемента
				...state.MainMenu.expenses.expenses_data.slice(action.index + 1), // Частина масиву після видаленого елемента
			];

			const totallExpenses = () => {
				return deleleExpenses.reduce((sum, el) => {
					return sum + Number(el.sumExpenses);
				}, 0);
			};
			return {
				...state,
				MainMenu: {
					...state.MainMenu,
					expenses: {
						expenses_data: [...(state.MainMenu.expenses.expenses_data = deleleExpenses)],
						expenses_sum: totallExpenses(),
					},
				},
			};
		}

		case UPDATE_ONE_CHANGE_ACTIVE_INPUT: {
			return {
				...state,
				MainMenu: {
					...state.MainMenu,
					activeInputNumber: action.text,
				},
			};
		}
		case UPDATE_ONE_CHANGE_ACTIVE_INPUT_NAME: {
			return {
				...state,
				MainMenu: {
					...state.MainMenu,
					activeInputText: action.text,
				},
			};
		}

		default:
			return state;
	}
};

export default ExpensesReduser;

export let UpdateOneChangeActiveInputAC = (text) => {
	return {
		type: UPDATE_ONE_CHANGE_ACTIVE_INPUT,
		text: text,
	};
};
export let UpdateOneChangeActiveInputNameAC = (text) => {
	return {
		type: UPDATE_ONE_CHANGE_ACTIVE_INPUT_NAME,
		text: text,
	};
};
export let AddExpensesAC = () => {
	return {
		type: ADD_EXPENSES,
	};
};
export let DeleleExpensesAC = (index) => {
	return {
		type: DELETE_EXPENSES,
		index: index,
	};
};
