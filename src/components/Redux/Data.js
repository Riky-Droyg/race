let State = {
	cash_on_hand: 0,
	total_income: 0,
	passive_income: {
		total: 0,
		list: [],
	},
	active_income: {
		total: 0,
		salary: 0,
		to_restore: 0,
	},
	expenses: {
		total: 0,
		list: [],
	},
	stocks: {
		ykt: {
			averagePrice: 0,
			list: [],
			totalCount: 0,
		},
		krs: {
			averagePrice: 0,
			list: [],
			totalCount: 0,
		},
		dr: {
			averagePrice: 0,
			list: [],
			totalCount: 0,
		},
		kchg: {
			averagePrice: 0,
			list: [],
			totalCount: 0,
		},
		yakhz: {
			averagePrice: 0,
			list: [],
			totalCount: 0,
		},
	},
	debts: {
		total: 0,
		list: [],
	},
	apartments: [],
	plots: {
		count: 0,
		average_price: 0,
	},
};
export default State;

// let test = { number: 1 , midlValue:1}

// let sum = середнє значення * кількість;
// let newNumber = кількість + Куплена кількість;
// let newMidlValue = (sum + newSum) / newNumber

// MainMenu: {
//     cash_on_hand: 0,
//     total_income: 0,
//     salary: 0,
//     activeInputNumber: "",
//     activeInputText: "",
//     activeCheckBox: "Малий",
//     debets: {
//         debets_sum: 0,
//         debets_data: [
//             { id: 1, nameDebets: "Кредит", sumDebets: "123" },
//             { id: 2, nameDebets: "Саші", sumDebets: "123" },
//             { id: 3, nameDebets: "Льоші", sumDebets: "123" },
//         ],
//     },
//     shares: {
//         activeInputNumber: "",
//         activeInputPrice: "",
//         activeInputSum: "",
//         selectStocks: "YKT",
//         ykt: {
//             number: 0,
//             averangePrice: 0,
//         },
//         krs: {
//             number: 0,
//             averangePrice: 0,
//         },
//         dr: {
//             number: 0,
//             averangePrice: 0,
//         },
//         kchg: {
//             number: 0,
//             averangePrice: 0,
//         },
//         yakhz: {
//             number: 0,
//             averangePrice: 0,
//         },
//     },
//     active_income: {
//         active_income_sum: 0,
//         active_income_data: [
//             {
//                 id: 1,
//                 nameSalary: "Зарплата",
//                 sumSalary: "500",
//             },
//         ],
//     },
//     expenses: {
//         expenses_sum: 0,
//         expenses_data: [
//             { id: 1, nameExpenses: "Комуналка", sumExpenses: "123" },
//             { id: 2, nameExpenses: "Комуналка", sumExpenses: "123" },
//             { id: 3, nameExpenses: "Комуналка", sumExpenses: "123" },
//         ],
//     },
//     passive_income: {
//         passive_income_sum: 0,
//         passive_income_data: [
//             { id: "1", buisnessSize: "Малий", incomeBuisnes: "123" },
//             { id: "2", buisnessSize: "Малий", incomeBuisnes: "123" },
//             { id: "3", buisnessSize: "Малий", incomeBuisnes: "321" },
//             { id: "4", buisnessSize: "Малий", incomeBuisnes: "321" },
//         ],
//     },
// },
