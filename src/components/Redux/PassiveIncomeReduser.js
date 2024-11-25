let ADD_BUISNES = "ADD_BUISNES";
let CHANGE_BUISNES_SIZE = "CHANGE_BUISNES_SIZE";
let UPDATE_ONE_CHANGE = "UPDATE_ONE_CHANGE";
let DELETE_BUISNES = "DELETE_BUISNES";

let InitialState = { buisnesSize: "Малий", };

const PassiveIncome = (state = InitialState, action) => {
	switch (action.type) {
		case ADD_BUISNES: {
			const newBusiness = {
				id: state.MainMenu.passive_income.passive_income_data.length + 1,
				buisnessSize: state.MainMenu.activeCheckBox,
				incomeBuisnes: state.MainMenu.activeInputNumber,
			};
            
			const updatedBuisnes = [...state.MainMenu.passive_income.passive_income_data, newBusiness];
			const totallIncome = () => {
				return updatedBuisnes.reduce((sum, el) => {
					return sum + Number(el.incomeBuisnes);
				}, 0);
			};
			return {
				...state,
				MainMenu: {
					...state.MainMenu,
					passive_income: {
						passive_income_data: [...state.MainMenu.passive_income.passive_income_data, newBusiness],
						passive_income_sum: totallIncome(),
					},
					activeInputNumber: "",
				},
			};
		}
		case DELETE_BUISNES: {
			let deleleBuisnes = [
				...state.MainMenu.passive_income.passive_income_data.slice(0, action.index), // Частина масиву до видаленого елемента
				...state.MainMenu.passive_income.passive_income_data.slice(action.index + 1), // Частина масиву після видаленого елемента
			];

			const totallIncome = () => {
				return deleleBuisnes.reduce((sum, el) => {
					return sum + Number(el.incomeBuisnes);
				}, 0);
			};
			return {
				...state,
				MainMenu: {
					...state.MainMenu,
					passive_income: {
						passive_income_data: [...(state.MainMenu.passive_income.passive_income_data = deleleBuisnes)],
						passive_income_sum: totallIncome(),
					},
				},
			};
		}

		case UPDATE_ONE_CHANGE: {
			return {
				...state,
				MainMenu: {
					...state.MainMenu,
					activeInputNumber: action.text,
				},
			};
		}

		default:
			return state;
	}
};

export default PassiveIncome;

export let UpdateOneChangeAC = (text) => {
	return {
		type: UPDATE_ONE_CHANGE,
		text: text,
	};
};
export let AddBuisnesAC = () => {
	return {
		type: ADD_BUISNES,
	};
};
export let DeleleBuisnesAC = (index) => {
	return {
		type: DELETE_BUISNES,
		index: index,
	};
};
