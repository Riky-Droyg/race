import State from "./Data";

let ADD_EXPENSES = "ADD_EXPENSES";
let UPDATE_ONE_CHANGE_ACTIVE_INPUT = "UPDATE_ONE_CHANGE_ACTIVE_INPUT";
let UPDATE_ONE_CHANGE_ACTIVE_INPUT_NAME = "UPDATE_ONE_CHANGE_ACTIVE_INPUT_NAME";
let DELETE_EXPENSES = "DELETE_EXPENSES";
let ADD_SHARES_YKT = "ADD_SHARES_YKT";
let ADD_SHARES_KRS = "ADD_SHARES_KRS";
let ADD_SHARES = "ADD_SHARES";
let DELETE_SHARES = "DELETE_SHARES";

let CHANGE_SELECT_STOCKS = "CHANGE_SELECT_STOCKS";

const SharesReduser = (state = State, action) => {
    switch (action.type) {
        case ADD_EXPENSES: {
            const newExpenses = {
                id: state.MainMenu.expenses.expenses_data.length + 1,
                nameExpenses: state.MainMenu.activeInputText,
                sumExpenses: state.MainMenu.activeInputNumber,
            };
            const updatedBuisnes = [
                ...state.MainMenu.expenses.expenses_data,
                newExpenses,
            ];
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
                        expenses_data: [
                            ...state.MainMenu.expenses.expenses_data,
                            newExpenses,
                        ],
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
                ...state.MainMenu.expenses.expenses_data.slice(
                    action.index + 1
                ), // Частина масиву після видаленого елемента
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
                        expenses_data: [
                            ...(state.MainMenu.expenses.expenses_data =
                                deleleExpenses),
                        ],
                        expenses_sum: totallExpenses(),
                    },
                },
            };
        }

        case UPDATE_ONE_CHANGE_ACTIVE_INPUT: {
            // введена кількість
            let activeInputNumber = state.MainMenu.shares.activeInputNumber;
            // введена ціна/шт 
            let priceEntered = action.text;

            let activeInputSum = activeInputNumber * priceEntered;
            return {
                ...state,
                MainMenu: {
                    ...state.MainMenu,
                    shares: {
                        ...state.MainMenu.shares,
                        activeInputPrice: priceEntered,
                        activeInputSum: +activeInputSum,
                    },
                },
            };
        }
        case UPDATE_ONE_CHANGE_ACTIVE_INPUT_NAME: {
            // введена кількість
            let activeInputPrice = state.MainMenu.shares.activeInputPrice;
            // введена ціна/шт 
            let priceEntered = action.text;

            let activeInputSum = activeInputPrice * priceEntered;
            return {
                ...state,
                MainMenu: {
                    ...state.MainMenu,
                    shares: {
                        ...state.MainMenu.shares,
                        activeInputNumber: priceEntered,
                        activeInputSum: +activeInputSum,
                    },
                },
            };
        }
        case CHANGE_SELECT_STOCKS: {
            switch (action.name) {
                case "YKT": {
                    return {
                        ...state,
                        MainMenu: {
                            ...state.MainMenu,
                            shares: {
                                ...state.MainMenu.shares,
                                selectStocks: "YKT",
                            },
                        },
                    };
                }
                case "KRS": {
                    return {
                        ...state,
                        MainMenu: {
                            ...state.MainMenu,
                            shares: {
                                ...state.MainMenu.shares,
                                selectStocks: "KRS",
                            },
                        },
                    };
                }
                case "DR": {
                    return {
                        ...state,
                        MainMenu: {
                            ...state.MainMenu,
                            shares: {
                                ...state.MainMenu.shares,
                                selectStocks: "DR",
                            },
                        },
                    };
                }
                case "KCHG": {
                    return {
                        ...state,
                        MainMenu: {
                            ...state.MainMenu,
                            shares: {
                                ...state.MainMenu.shares,
                                selectStocks: "KCHG",
                            },
                        },
                    };
                }
                case "YAKHZ": {
                    return {
                        ...state,
                        MainMenu: {
                            ...state.MainMenu,
                            shares: {
                                ...state.MainMenu.shares,
                                selectStocks: "YAKHZ",
                            },
                        },
                    };
                }

                default: {
                    return state;
                }
            }
        }
        case ADD_SHARES: {
            let stockTypeShares = () => {
                switch (state.MainMenu.shares.selectStocks) {
                    case "YKT": {
                        return "ykt";
                    }
                    case "KRS": {
                        return "krs";
                    }
                    case "DR": {
                        return "dr";
                    }
                    case "KCHG": {
                        return "kchg";
                    }
                    case "YAKHZ": {
                        return "yakhz";
                    }

                    default:
                        break;
                }
            };
            // Отримуємо нову кількість
            // теперішня кількість
            let number = state.MainMenu.shares[stockTypeShares()].number;
            // ведена кількість
            let addedQuantity = state.MainMenu.shares.activeInputNumber;
            // теперішня + введена кількість
            let newNumber = +number + +addedQuantity;

            // Отримуємо нову середню вартість
            // введена вартість куплених акцій
            let addetValue = state.MainMenu.shares.activeInputPrice;
            // середня вартість
            let averangePrice =
                state.MainMenu.shares[stockTypeShares()].averangePrice;

            // вартість наявних активів
            let assetValue = averangePrice * number;

            // вартість наявних та доданих активів
            let totalAssetValue = assetValue + +addetValue;

            // нова середня вартість активів
            let newAverangePrice = () => {
                if (newNumber <= 0) {
                    return 0;
                } else {
                    return (totalAssetValue / newNumber).toFixed(3);
                }
            };
            let newObj = {
                number: newNumber,
                averangePrice: newAverangePrice(),
            };
            return {
                ...state,
                MainMenu: {
                    ...state.MainMenu,
                    shares: {
                        ...state.MainMenu.shares,
                        [stockTypeShares()]: newObj,
                        activeInputNumber: "",
                        activeInputPrice: "",
                    },
                },
            };
        }
        case DELETE_SHARES: {
            let stockTypeShares = () => {
                switch (state.MainMenu.shares.selectStocks) {
                    case "YKT": {
                        return "ykt";
                    }
                    case "KRS": {
                        return "krs";
                    }
                    case "DR": {
                        return "dr";
                    }
                    case "KCHG": {
                        return "kchg";
                    }
                    case "YAKHZ": {
                        return "yakhz";
                    }

                    default:
                        break;
                }
            };

            // Отримуємо нову кількість
            // стара кількість
            let number = state.MainMenu.shares[stockTypeShares()].number;
            // кількість яку необхадно відняти
            let addedQuantity = state.MainMenu.shares.activeInputNumber;

            let newNumber = () => {
                let sum = +number - +addedQuantity;
                if (sum <= 0) {
                    return "0";
                } else {
                    return sum;
                }
            };

            // Отримуємо нову середню вартість
            // стара  середня вартість
            let averangePrice =
                state.MainMenu.shares[stockTypeShares()].averangePrice;
            // перевірка на нуль
            let newAverangePrice = () => {
                if (newNumber() <= 0) {
                    return "0";
                } else {
                    return averangePrice;
                }
            };

            let newObj = {
                number: newNumber(),
                averangePrice: newAverangePrice(),
            };
            return {
                ...state,
                MainMenu: {
                    ...state.MainMenu,
                    shares: {
                        ...state.MainMenu.shares,
                        [stockTypeShares()]: newObj,
                        activeInputNumber: "",
                        activeInputPrice: "",
                    },
                },
            };
        }

        default:
            return state;
    }
};

export default SharesReduser;

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

export let ChangeSelectStocksAC = (name) => {
    return {
        type: CHANGE_SELECT_STOCKS,
        name: name,
    };
};

export let AddSharesAC = (number, sum) => {
    return {
        type: ADD_SHARES,
    };
};
export let DeleteSharesAC = (number, sum) => {
    return {
        type: DELETE_SHARES,
    };
};
