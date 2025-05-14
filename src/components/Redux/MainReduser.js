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
let SELL_SHARES = "SELL_SHARES";
let PURSE = "PURSE";
let PAYCHECK = "PAYCHECK";
let ADD_EARN = "ADD_EARN";
let ADD_REALTY_CASH = "ADD_REALTY_CASH";
let SELL_EARN = "SELL_EARN";
let SELL_REALTY = "SELL_REALTY";
let ADD_REALTY_CREDIT = "ADD_REALTY_CREDIT";

const MainReduser = (state = initialState, action) => {
	switch (action.type) {
		case AUTORIZATION: {
			return action.data;
		}
		case ADD_BUISNES: {
			let newInem = {
				id: 113123,
				sum: +action.income,
				name: action.sizeBuisnes,
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
			function generateNextId(dataArray = state.expenses.list) {
				if (dataArray.length === 0) return 0; // якщо масив порожній, повертає 0
				const lastItem = dataArray[dataArray.length - 1];
				return lastItem.id + 1;
			}

			let newInem = {
				name: action.name,
				sum: +action.number,
				id: generateNextId(),
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
				id: 1,
			};
			const updatedList = [...state.debts.list, newInem];
			// Підсумовуємо всі значення sum в масиві list
			const totalSum = updatedList.reduce((total, item) => {
				return +total + +item.sum; // Додаємо sum кожного елемента до total
			}, 0); // Початкове значення для total - 0
			const updatedState = {
				...state,
				debts: {
					...state.debts,
					total: +totalSum,
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
			debugger;
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
		case SELL_SHARES: {
			debugger;
			let newInem = {
				count: +action.wantToSale,
				price: +action.totalCost,
			};
			// Підсумовуємо всі значення sum в масиві list
			const totalCount = state.stocks[action.selectedButton].totalCount - newInem.count;
			const cashOnHand = state.cash_on_hand + newInem.price;
			let averagePrice = () => {
				if (totalCount <= 0) {
					return 0;
				} else {
					return state.stocks[action.selectedButton].averagePrice;
				}
			};

			const updatedState = {
				...state,
				stocks: {
					...state.stocks,
					[action.selectedButton]: {
						...state.stocks[action.selectedButton],
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
			debugger
			let totalIncome = state.passive_income.total + +state.active_income.total;
			let paycheck = totalIncome - state.expenses.total;
			let cash = +state.cash_on_hand;

			if (paycheck >= 0) {
				// Просто додаємо до готівки
				const newCashOnHand = cash + paycheck;

				return {
					...state,
					cash_on_hand: newCashOnHand,
				};
			} else {
				// Від’ємна получка
				const absolutePaycheck = Math.abs(paycheck);

				if (cash >= absolutePaycheck) {
					// Готівки достатньо — просто зменшуємо
					const newCashOnHand = cash - absolutePaycheck;

					return {
						...state,
						cash_on_hand: newCashOnHand,
					};
				} else {
					// Готівки не вистачає — зменшуємо все, решта в борг
					const debtAmount = absolutePaycheck - cash;

					const newExpense = {
						name: "Получка (борг)", // Назва витрати
						sum: debtAmount,
						id:0,
					};

					const updatedList = [...state.debts.list, newExpense];
					const updatedTotal = state.debts.total + debtAmount;

					alert(`Не вистачає готівки. Додано новий борг: ${debtAmount}`);

					return {
						...state,
						cash_on_hand: 0,
						debts: {
						
							total: updatedTotal,
							list: updatedList,
						},
					};
				}
			}
		}
		case ADD_EARN: {
			let newCount = +state.plots.count + +action.count;

			let oldTotalPrice = state.plots.count * state.plots.average_price;
			let combinedTotalPrice = oldTotalPrice + +action.total_price;

			// Захист від ділення на 0
			let newAveragePrice = newCount > 0 ? combinedTotalPrice / newCount : 0;

			// Округлення до цілого числа
			newAveragePrice = Math.round(newAveragePrice);

			let cashOnHand = state.cash_on_hand - action.total_price;

			return {
				...state,
				plots: {
					...state.plots,
					count: newCount,
					average_price: newAveragePrice,
				},
				cash_on_hand: cashOnHand,
			};
		}

		case SELL_EARN: {
			let totalCount = +state.plots.count - +action.wantToSale;
			let cashOnHand = state.cash_on_hand + action.totalCost;

			const updatedState = {
				...state,
				plots: {
					...state.plots,
					count: totalCount,
				},
				cash_on_hand: cashOnHand,
			};
			return updatedState; // Повертаємо новий стан
		}
		case ADD_REALTY_CASH: {
			function generateNextId(dataArray = state.apartments) {
				if (dataArray.length === 0) return 0; // якщо масив порожній, повертає 0
				const lastItem = dataArray[dataArray.length - 1];
				return lastItem.id + 1;
			}
			let newIdApartments = generateNextId();

			let newInem = {
				name: "Нерухомість",
				sum: +action.monthly_interest,
				id: newIdApartments,
			};

			const updatedList = [...state.expenses.list, newInem];
			// Підсумовуємо всі значення sum в масиві list
			const totalSum = updatedList.reduce((total, item) => {
				return total + item.sum; // Додаємо sum кожного елемента до total
			}, 0); // Початкове значення для total - 0
			let TotalInconme = +state.total_income;
			let newPaycheck = +TotalInconme - +totalSum;

			console.log(state);
			// Перевірка на достатність готівки та коректність суми
			if (+action.total_price > state.cash_on_hand || +action.total_price <= 0) {
				alert("Недостатньо готівки або некоректна сума покупки.");
				return state;
			}
			let newCashOnHand = state.cash_on_hand - action.total_price;
			return {
				...state,
				passive_income: {
					...state.passive_income,
					list: [
						...state.passive_income.list,
						{
							id: newIdApartments,
							sum: +action.rent_price,
							name: "Нерухомість",
						},
					],
					total: +state.passive_income.total + +action.rent_price,
				},

				cash_on_hand: newCashOnHand,
				apartments: [
					...state.apartments, // додаємо всі існуючі об'єкти з масиву plots
					{
						id: newIdApartments,
						property_type: action.property_type,
						total_price: +action.total_price,
						credit: +action.credit,
						deposit: +action.deposit,
						rent_price: +action.rent_price,
						real_price: +action.real_price,
						monthly_interest: +action.monthly_interest,
					}, // додаємо новий об'єкт
				],
				paycheck: +newPaycheck,
			};
		}
		case ADD_REALTY_CREDIT: {
			function generateNextId(dataArray = state.apartments) {
				if (dataArray.length === 0) return 0; // якщо масив порожній, повертає 0
				const lastItem = dataArray[dataArray.length - 1];
				return lastItem.id + 1;
			}
			let newIdApartments = generateNextId();

			let newInemExpenses = {
				name: "Нерухомість",
				sum: +action.monthly_interest,
				id: newIdApartments,
			};
			let newInemDebts = {
				name: "Нерухомість",
				sum: +action.credit,
				id: newIdApartments,
			};

			const updatedListDebts = [...state.expenses.list, newInemDebts];
			// Підсумовуємо всі значення sum в масиві list
			const totalSumDebts = updatedListDebts.reduce((total, item) => {
				return total + item.sum; // Додаємо sum кожного елемента до total
			}, 0); // Початкове значення для total - 0

			const updatedListExpenses = [...state.expenses.list, newInemExpenses];
			// Підсумовуємо всі значення sum в масиві list
			const totalSumExpenses = updatedListExpenses.reduce((total, item) => {
				return total + item.sum; // Додаємо sum кожного елемента до total
			}, 0); // Початкове значення для total - 0

			let newCashOnHand = state.cash_on_hand - action.deposit;
			return {
				...state,
				passive_income: {
					...state.passive_income,
					list: [
						...state.passive_income.list,
						{
							id: newIdApartments,
							sum: +action.rent_price,
							name: "Нерухомість",
						},
					],
					total: +state.passive_income.total + +action.rent_price,
				},

				cash_on_hand: newCashOnHand,
				apartments: [
					...state.apartments, // додаємо всі існуючі об'єкти з масиву plots
					{
						id: newIdApartments,
						property_type: action.property_type,
						total_price: +action.total_price,
						credit: +action.credit,
						deposit: +action.deposit,
						rent_price: +action.rent_price,
						real_price: +action.real_price,
						monthly_interest: +action.monthly_interest,
					}, // додаємо новий об'єкт
				],
				debts: {
					...state.expenses,
					total: totalSumDebts,
					list: updatedListDebts,
				},
				expenses: {
					...state.expenses,
					total: totalSumExpenses,
					list: updatedListExpenses,
				},
			};
		}
		case SELL_REALTY: {
			const updatedPassiveList = state.passive_income.list.filter((item) => item.id !== action.selectedID);
			const updatedApartments = state.apartments.filter((item) => item.id !== action.selectedID);
			const passiveTotal = updatedPassiveList.reduce((total, item) => total + item.sum, 0);
			const totalIncome = +state.active_income.total + passiveTotal;

			// Remove corresponding item from expenses.list using action.selectedID
			const updatedExpensesList = state.expenses.list.filter((item) => item.id !== action.selectedID);
			const updatedExpensesTotal = updatedExpensesList.reduce((total, item) => total + item.sum, 0);

			const newPaycheck = totalIncome - updatedExpensesTotal;

			return {
				...state,
				passive_income: {
					...state.passive_income,
					total: passiveTotal,
					list: updatedPassiveList,
				},
				apartments: updatedApartments,
				cash_on_hand: state.cash_on_hand + +action.salePrice,
				total_income: totalIncome,
				paycheck: newPaycheck,
				expenses: {
					...state.expenses,
					total: updatedExpensesTotal,
					list: updatedExpensesList,
				},
			};
		}
		default:
			return state;
	}
};

export default MainReduser;

// case "DELETE_PASSIVE_INCOME_BY_ID": {
// 	const updatedList = state.passive_income.list.filter((item) => item.id !== action.id);
// 	const totalSum = updatedList.reduce((total, item) => total + item.sum, 0);
// 	let newTotalIncome = +state.active_income.total + totalSum;
// 	let newPaycheck = newTotalIncome - +state.expenses.total;

// 	return {
// 		...state,
// 		total_income: newTotalIncome,
// 		paycheck: newPaycheck,
// 		passive_income: {
// 			...state.passive_income,
// 			total: totalSum,
// 			list: updatedList,
// 		},
// 	};
// }
