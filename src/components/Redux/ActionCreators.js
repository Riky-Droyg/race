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
let ADD_EARN = "ADD_EARN";
let ADD_REALTY_CASH = "ADD_REALTY_CASH";

export let АuthorizationAC = (data) => {
	return {
		type: AUTORIZATION,
		data,
	};
};
export let AddBuisnesAC = (sizeBuisnes, investment, income) => {
	return {
		type: ADD_BUISNES,
		sizeBuisnes,
		investment,
		income,
	};
};

export let DeleteBuisnesAC = (index) => {
	return {
		type: DELETE_BUISNES,
		index,
	};
};

export let AddExpensesAC = (text, value) => {
	return {
		type: ADD_EXPENSES,
		text,
		value,
	};
};
export let DeleteExpensesAC = (index) => {
	return {
		type: DELETE_EXPENSES,
		index,
	};
};
export let AddActiveIncomeAC = (value) => {
	return {
		type: ADD_ACTIVE_INCOME,
		value,
	};
};
export let DeleteActiveIncomeAC = () => {
	return {
		type: DELETE_ACTIVE_INCOME,
	};
};

export let AddDebtsAC = (text, value) => {
	return {
		type: ADD_DEBTS,
		text,
		value,
	};
};

export let DeleteDebtsAC = (index) => {
	return {
		type: DELETE_DEBTS,
		index,
	};
};

export let AddSharesAC = (nameShares, count, price) => {
	return {
		type: ADD_SHARES,
		nameShares,
		count,
		price,
	};
};
export let sellingSharesAC = (nameShares, count, price) => {
	return {
		type: SELLING_SHARES,
		nameShares,
		count,
		price,
	};
};
export let PurseAC = (action, value) => {
	return {
		type: PURSE,
		action,
		value,
	};
};
export let PaycheckAC = () => {
	return {
		type: PAYCHECK,
	};
};
export let AddEarnkAC = (count, average_price, total_price) => {
	return {
		type: ADD_EARN,
		count,
		average_price,
		total_price,
	};
};
export let addRealtyCashAC = (property_type, total_price, credit, deposit, rent_price, real_price, monthly_interest) => {
	return {
		type: ADD_REALTY_CASH,
		property_type,
		total_price,
		credit,
		deposit,
		rent_price,
		real_price,
		monthly_interest,
	};
};
