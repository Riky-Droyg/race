import initialState from "./Data";
import { AddDataThunks } from "./Redux-Thunk";

let UPADE_STATE = "UPADE_STATE";
let GET_STATE = "GET_STATE";
let ADD_BUISNES = "ADD_BUISNES";
let AUTORIZATION = "AUTORIZATION";
let DELETE_BUISNES = "DELETE_BUISNES";

const MainReduser = (state = initialState, action) => {
	switch (action.type) {
		case GET_STATE: {
			console.log({ action });
			return {
				...initialState,
				data: action.data,
			};
		}
		case AUTORIZATION: {
			return action.data;
		}
		case ADD_BUISNES: {
			let newInem = {
				name: "Кіоск",
				sum: action.value,
				type: action.sizeBuisnes,
			};
			const updatedList = [...state.passive_income.list, newInem];
			// Підсумовуємо всі значення sum в масиві list
			const totalSum = updatedList.reduce((total, item) => {
				return total + item.sum; // Додаємо sum кожного елемента до total
			}, 0); // Початкове значення для total - 0
			const updatedState = {
				...state,
				passive_income: {
					...state.passive_income,
					total: totalSum,
					list: updatedList,
				},
			};

			return updatedState; // Повертаємо новий стан
		}
		case DELETE_BUISNES: {
			const updatedList = state.passive_income.list.filter((_, index) => index !== action.index);
			const totalSum = updatedList.reduce((total, item) => {
				return total + item.sum; // Додаємо sum кожного елемента до total
			}, 0); // Початкове значення для total - 0

			const updatedState = {
				...state,
				passive_income: {
					...state.passive_income,
					total: totalSum,
					list: updatedList,
				},
			};
			return updatedState; // Повертаємо новий стан
		}
		default:
			return state;
	}
};

export let UpdateStateAC = (key, value) => {
	return {
		type: UPADE_STATE,
		key: key,
		value: value,
	};
};
export let AddBuisnesAC = (sizeBuisnes, value) => {
	return {
		type: ADD_BUISNES,
		sizeBuisnes,
		value,
	};
};
export let GetTestThunks = (data) => {
	return {
		type: GET_STATE,
		data: data,
	};
};
export let АuthorizationAC = (data) => {
	return {
		type: AUTORIZATION,
		data,
	};
};
export let DeleteBuisnesAC = (index) => {
	return {
		type: DELETE_BUISNES,
		index,
	};
};

export default MainReduser;
