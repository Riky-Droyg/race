import initialState from "./Data";
let AUTORIZATION = "AUTORIZATION";
let ADD_BUISNES = "ADD_BUISNES";
let DELETE_BUISNES = "DELETE_BUISNES";
let ADD_EXPENSES = "ADD_EXPENSES";
let DELETE_EXPENSES = "DELETE_EXPENSES";
let ADD_ACTIVE_INCOME = "ADD_ACTIVE_INCOME";
let DELETE_ACTIVE_INCOME = "DELETE_ACTIVE_INCOME";
let ADD_DEBTS = "ADD_DEBTS";
let DELETE_DEBTS = "DELETE_DEBTS";
let ADD_SHARES = "ADD_SHARES";
let SELLING_SHARES = "SELLING_SHARES";
let PURSE = "PURSE";
let PAYCHECK = "PAYCHECK";

const MainReduser = (state = initialState, action) => {
	switch (action.type) {
		case AUTORIZATION: {
			return action.data;
		}
		case ADD_BUISNES: {
			let newInem = {
				name: action.sizeBuisnes,
				sum: +action.income,
				type: "Малий Бізнес",
			};
			const updatedList = [...state.passive_income.list, newInem];
			// Підсумовуємо всі значення sum в масиві list
			const totalSum = updatedList.reduce((total, item) => {
				return total + item.sum; // Додаємо sum кожного елемента до total
			}, 0); // Початкове значення для total - 0
			let newTotalInconme = +totalSum + +state.active_income.total;
			let newPaycheck = +newTotalInconme - +state.expenses.total;
			const updatedState = {
				...state,
				cash_on_hand: state.cash_on_hand - action.investment,
				total_income: newTotalInconme,
				paycheck: +newPaycheck,
				passive_income: {
					...state.passive_income,
					total: +totalSum,
					list: updatedList,
				},
			};

			return updatedState; // Повертаємо новий стан
		}
		case DELETE_BUISNES: {
			const updatedList = state.passive_income.list.filter((_, index) => index !== action.index);
			const totalSum = updatedList.reduce((total, item) => {
				return +total + +item.sum; // Додаємо sum кожного елемента до total
			}, 0); // Початкове значення для total - 0
			let newTotalInconme = +totalSum + +state.active_income.total;
			let newPaycheck = +newTotalInconme - +state.expenses.total;
			const updatedState = {
				...state,
				total_income: newTotalInconme,
				paycheck: +newPaycheck,
				passive_income: {
					...state.passive_income,
					total: totalSum,
					list: updatedList,
				},
			};
			return updatedState; // Повертаємо новий стан
		}

		case ADD_EXPENSES: {
			let newInem = {
				name: action.text,
				sum: action.value,
			};

			const updatedList = [...state.expenses.list, newInem];
			// Підсумовуємо всі значення sum в масиві list
			const totalSum = updatedList.reduce((total, item) => {
				return total + item.sum; // Додаємо sum кожного елемента до total
			}, 0); // Початкове значення для total - 0
			let TotalInconme = +state.total_income;
			let newPaycheck = +TotalInconme - +totalSum;

			const updatedState = {
				...state,
				paycheck: +newPaycheck,
				expenses: {
					...state.expenses,
					total: totalSum,
					list: updatedList,
				},
			};
			return updatedState; // Повертаємо новий стан
		}
		case DELETE_EXPENSES: {
			const updatedList = state.expenses.list.filter((_, index) => index !== action.index);
			const totalSum = updatedList.reduce((total, item) => {
				return total + item.sum; // Додаємо sum кожного елемента до total
			}, 0); // Початкове значення для total - 0
			let TotalInconme = +state.total_income;
			let newPaycheck = +TotalInconme - +totalSum;

			const updatedState = {
				...state,
				paycheck: +newPaycheck,

				expenses: {
					...state.expenses,
					total: totalSum,
					list: updatedList,
				},
			};
			return updatedState; // Повертаємо новий стан
		}
		case ADD_ACTIVE_INCOME: {
			let newTotalInconme = +action.value + +state.passive_income.total;
			let newPaycheck = +newTotalInconme - +state.expenses.total;
			return {
				...state,
				total_income: newTotalInconme,
				paycheck: +newPaycheck,
				active_income: {
					...state.active_income,
					total: action.value,
					salary: action.value,
					to_restore: 0,
				},
			};
		}
		case DELETE_ACTIVE_INCOME: {
			let newTotalInconme = +state.active_income.total + +state.passive_income.total;
			let newPaycheck = +newTotalInconme - +state.expenses.total;

			return {
				...state,
				total_income: newTotalInconme,
				paycheck: newPaycheck,
				active_income: {
					...state.active_income,
					total: 0,
				},
			};
		}

		case ADD_DEBTS: {
			let newInem = {
				name: action.text,
				sum: action.value,
			};
			const updatedList = [...state.debts.list, newInem];
			// Підсумовуємо всі значення sum в масиві list
			const totalSum = updatedList.reduce((total, item) => {
				return total + item.sum; // Додаємо sum кожного елемента до total
			}, 0); // Початкове значення для total - 0
			const updatedState = {
				...state,
				debts: {
					...state.debts,
					total: totalSum,
					list: updatedList,
				},
			};
			return updatedState; // Повертаємо новий стан
		}
		case DELETE_DEBTS: {
			const updatedList = state.debts.list.filter((_, index) => index !== action.index);
			const totalSum = updatedList.reduce((total, item) => {
				return total + item.sum; // Додаємо sum кожного елемента до total
			}, 0); // Початкове значення для total - 0

			const updatedState = {
				...state,
				debts: {
					...state.debts,
					total: totalSum,
					list: updatedList,
				},
			};
			return updatedState; // Повертаємо новий стан
		}
		case ADD_SHARES: {
			let newInem = {
				count: +action.count,
				price: +action.price,
			};
			const updatedList = [...state.stocks[action.nameShares].list, newInem];

			// Підсумовуємо всі значення sum в масиві list
			const totalCount = newInem.count + state.stocks[action.nameShares].totalCount;
			const oldTotalPrice = state.stocks[action.nameShares].totalCount * state.stocks[action.nameShares].averagePrice;
			const addTotalPrice = +action.count * +action.price;
			const newTotalPrice = oldTotalPrice + addTotalPrice;

			const averagePrice = newTotalPrice / totalCount;

			const cashOnHand = state.cash_on_hand - addTotalPrice;
			const updatedState = {
				...state,
				stocks: {
					...state.stocks,
					[action.nameShares]: {
						...state.stocks[action.nameShares],
						list: updatedList,
						averagePrice: Math.round(averagePrice),
						totalCount: Math.round(totalCount),
					},
				},
				cash_on_hand: cashOnHand,
			};
			return updatedState; // Повертаємо новий стан
		}
		case SELLING_SHARES: {
			let newInem = {
				count: +action.count,
				price: +action.price,
			};
			// Підсумовуємо всі значення sum в масиві list
			const totalCount = state.stocks[action.nameShares].totalCount - newInem.count;
			const cashOnHand = state.cash_on_hand + newInem.price;
			// const totalCount = updatedList.reduce((total, item) => total + item.count, 0);
			// const totalPrice = updatedList.reduce((total, item) => total + item.count * item.price, 0);
			// const averagePrice = totalPrice / totalCount;
			// debugger
			let averagePrice = () => {
				if (totalCount <= 0) {
					return 0;
				} else {
					return state.stocks[action.nameShares].averagePrice;
				}
			};

			const updatedState = {
				...state,
				stocks: {
					...state.stocks,
					[action.nameShares]: {
						...state.stocks[action.nameShares],
						totalCount: totalCount,
						// averagePrice: state.stocks[action.nameShares].totalCount,
						averagePrice: averagePrice(),
					},
				},
				cash_on_hand: cashOnHand,
			};
			return updatedState; // Повертаємо новий стан
		}
		case PURSE: {
			let newCashOnHand = "";
			if (action.action === "+") {
				newCashOnHand = +state.cash_on_hand + +action.value;
			} else if (action.action === "-") {
				newCashOnHand = +state.cash_on_hand - +action.value;
			}
			const updatedState = {
				...state,
				cash_on_hand: newCashOnHand,
			};
			return updatedState; // Повертаємо новий стан
		}
		case PAYCHECK: {
			let newCashOnHand;
			if (state.paycheck < state.cash_on_hand) {
				let sumDebts = Math.abs(+state.cash_on_hand + +state.paycheck);

				const newExpense = {
					name: "Получка", // Назва витрати
					sum: sumDebts, // Сума витрати
				};

				// Оновлюємо список витрат
				const updatedList = [...state.debts.list, newExpense];

				// Оновлюємо загальну суму витрат
				const updatedTotal = state.debts.total + sumDebts;

				const updatedState = {
					...state,
					cash_on_hand: 0,
					debts: {
						total: updatedTotal,
						list: updatedList,
					},
				};
				alert(`Додано новий борг в сумі ${sumDebts}`);
				console.log(updatedTotal);
				return updatedState; // Повертаємо новий стан
			} else {
				newCashOnHand = +state.cash_on_hand + +state.paycheck;

				const updatedState = {
					...state,
					cash_on_hand: +newCashOnHand,
				};
				return updatedState; // Повертаємо новий стан
			}
		}
		default:
			return state;
	}
};

export default MainReduser;
