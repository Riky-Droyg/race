import State from "./Data";

let ADD_EXPENSES = "ADD_EXPENSES";
let CHANGE_BUISNES_SIZE = "CHANGE_BUISNES_SIZE";
let UPDATE_ONE_CHANGE_ACTIVE_INPUT = "UPDATE_ONE_CHANGE_ACTIVE_INPUT";
let UPDATE_ONE_CHANGE_ACTIVE_INPUT_NAME = "UPDATE_ONE_CHANGE_ACTIVE_INPUT_NAME";
let DELETE_EXPENSES = "DELETE_EXPENSES";

const ActiveIncomeReduser = (state = State, action) => {
    switch (action.type) {
        case ADD_EXPENSES: {
            const newExpenses = {
                id: state.MainMenu.active_income.active_income_data.length + 1,
                nameSalary: "Зарплата",
                sumSalary: state.MainMenu.activeInputNumber,
            };
            const updatedBuisnes = [
                ...state.MainMenu.active_income.active_income_data,
                newExpenses,
            ];
            const totallExpenses = () => {
                return updatedBuisnes.reduce((sum, el) => {
                    return sum + Number(el.sumSalary);
                }, 0);
            };
            if (state.MainMenu.active_income.active_income_data.length === 1) {
                return state;
            } else {
                return {
                    ...state,
                    MainMenu: {
                        ...state.MainMenu,
                        active_income: {
                            active_income_data: [
                                ...state.MainMenu.active_income
                                    .active_income_data,
                                newExpenses,
                            ],
                            active_income_sum: totallExpenses(),
                        },
                        activeInputNumber: "",
                    },
                };
            }
        }
        case DELETE_EXPENSES: {
            let deleleExpenses = [
                ...state.MainMenu.active_income.active_income_data.slice(
                    0,
                    action.index
                ),
                ...state.MainMenu.active_income.active_income_data.slice(
                    action.index + 1
                ),
            ];

            const totallExpenses = () => {
                return deleleExpenses.reduce((sum, el) => {
                    return sum + Number(el.sumSalary);
                }, 0);
            };
            return {
                ...state,
                MainMenu: {
                    ...state.MainMenu,
                    active_income: {
                        active_income_data: [
                            ...(state.MainMenu.expenses = deleleExpenses),
                        ],
                        active_income_sum: totallExpenses(),
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

        default:
            return state;
    }
};

export default ActiveIncomeReduser;

export let ChangeBisnesSizeAC = (buisnesSize) => {
    return {
        type: CHANGE_BUISNES_SIZE,
        buisnesSize: buisnesSize,
    };
};
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
