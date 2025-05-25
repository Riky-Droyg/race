import { AddExpensesAC, AddBuisnesAC, DeleteBuisnesAC, DeleteExpensesAC, AddActiveIncomeAC, DeleteActiveIncomeAC, AddDebtsAC, DeleteDebtsAC, AddSharesAC, sellingSharesAC, PurseAC, PaycheckAC, AddEarnkAC, addRealtyCashAC, sellSharesAC, sellEarnThunksAC, SellRealtyAC, addRealtyCreditAC } from "./ActionCreators";

export const AddBuisnesThunks = (sizeBuisnes, investment, income) => async (dispatch, getState) => {
	try {
		dispatch(AddBuisnesAC(sizeBuisnes, investment, income));
		let state = getState().MainReduser;
		console.log(state);
		const response = await fetch(`https://patsuk-6e89a0c8f358.herokuapp.com/put/${state._id}`, {
			method: "PUT",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(state),
		});
		if (!response.ok) {
			throw new Error(`HTTP error! Status: ${response.status}`);
		}
	} catch (error) {
		console.error("Помилка:", error);
		alert("❌ Помилка при збереженні даних. Спробуйте ще раз.");
	}
};
export const DeleteBuisnesThunks = (index) => async (dispatch, getState) => {
	try {
		dispatch(DeleteBuisnesAC(index));
		let state = getState().MainReduser;
		console.log(state);

		const response = await fetch(`https://patsuk-6e89a0c8f358.herokuapp.com/put/${state._id}`, {
			method: "PUT",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(state),
		});
		if (!response.ok) {
			throw new Error(`HTTP error! Status: ${response.status}`);
		}
	} catch (error) {
		console.error("Помилка:", error);
		alert("❌ Помилка при збереженні даних. Спробуйте ще раз.");
	}
};
export const AddExpensesThunks = (name, number) => async (dispatch, getState) => {
	try {
		dispatch(AddExpensesAC(name, number));
		let state = getState().MainReduser;
		console.log(state);
		const response = await fetch(`https://patsuk-6e89a0c8f358.herokuapp.com/put/${state._id}`, {
			method: "PUT",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(state),
		});
		if (!response.ok) {
			throw new Error(`HTTP error! Status: ${response.status}`);
		}
	} catch (error) {
		console.error("Помилка:", error);
		alert("❌ Помилка при збереженні даних. Спробуйте ще раз.");
	}
};
export const DeleteExpensesThunks = (index) => async (dispatch, getState) => {
	try {
		dispatch(DeleteExpensesAC(index));
		let state = getState().MainReduser;
		console.log(state);

		const response = await fetch(`https://patsuk-6e89a0c8f358.herokuapp.com/put/${state._id}`, {
			method: "PUT",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(state),
		});
		if (!response.ok) {
			throw new Error(`HTTP error! Status: ${response.status}`);
		}
	} catch (error) {
		console.error("Помилка:", error);
		alert("❌ Помилка при збереженні даних. Спробуйте ще раз.");
	}
};
export const AddActiveIncomeThunks = (value) => async (dispatch, getState) => {
	try {
		dispatch(AddActiveIncomeAC(value));
		let state = getState().MainReduser;
		console.log(state);
		const response = await fetch(`https://patsuk-6e89a0c8f358.herokuapp.com/put/${state._id}`, {
			method: "PUT",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(state),
		});
		if (!response.ok) {
			throw new Error(`HTTP error! Status: ${response.status}`);
		}
	} catch (error) {
		console.error("Помилка:", error);
		alert("❌ Помилка при збереженні даних. Спробуйте ще раз.");
	}
};
export const DeleteActiveIncomeThunks = () => async (dispatch, getState) => {
	try {
		dispatch(DeleteActiveIncomeAC());
		let state = getState().MainReduser;
		console.log(state);
		const response = await fetch(`https://patsuk-6e89a0c8f358.herokuapp.com/put/${state._id}`, {
			method: "PUT",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(state),
		});
		if (!response.ok) {
			throw new Error(`HTTP error! Status: ${response.status}`);
		}
	} catch (error) {
		console.error("Помилка:", error);
		alert("❌ Помилка при збереженні даних. Спробуйте ще раз.");
	}
};

export const AddDebtsThunks = (text, value) => async (dispatch, getState) => {
	try {
		dispatch(AddDebtsAC(text, value));
		let state = getState().MainReduser;
		console.log(state);
		const response = await fetch(`https://patsuk-6e89a0c8f358.herokuapp.com/put/${state._id}`, {
			method: "PUT",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(state),
		});
		if (!response.ok) {
			throw new Error(`HTTP error! Status: ${response.status}`);
		}
	} catch (error) {
		console.error("Помилка:", error);
		alert("❌ Помилка при збереженні даних. Спробуйте ще раз.");
	}
};

export const DeleteDebtsThunks = (index) => async (dispatch, getState) => {
	try {
		dispatch(DeleteDebtsAC(index));
		let state = getState().MainReduser;
		console.log(state);
		const response = await fetch(`https://patsuk-6e89a0c8f358.herokuapp.com/put/${state._id}`, {
			method: "PUT",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(state),
		});
		if (!response.ok) {
			throw new Error(`HTTP error! Status: ${response.status}`);
		}
	} catch (error) {
		console.error("Помилка:", error);
		alert("❌ Помилка при збереженні даних. Спробуйте ще раз.");
	}
};

export const addSharesThunks = (selectedButton,wantToBuy,valueVoucher,totalCost) => async (dispatch, getState) => {
	try {
		let transformNameShares = () => {
			switch (selectedButton) {
				case "УКТ": {
					return "ykt";
				}
				case "КРС": {
					return "krs";
				}
				case "ДР": {
					return "dr";
				}
				case "КЧГ": {
					return "kchg";
				}
				case "ЯКХЗ": {
					return "yakhz";
				}
				default:
					console.log('error "addSharesThunks"');
			}
		};
		let challengeTransformNameShares = transformNameShares();
		dispatch(AddSharesAC(challengeTransformNameShares,wantToBuy,valueVoucher,totalCost));
		let state = getState().MainReduser;
		console.log(state);
		const response = await fetch(`https://patsuk-6e89a0c8f358.herokuapp.com/put/${state._id}`, {
			method: "PUT",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(state),
		});
		if (!response.ok) {
			throw new Error(`HTTP error! Status: ${response.status}`);
		}
	} catch (error) {
		console.error("Помилка:", error);
		alert("❌ Помилка при збереженні даних. Спробуйте ще раз.");
	}
};

export const sellSharesThunks = (selectedButton, wantToSale, valueVoucher, totalCost) => async (dispatch, getState) => {
	try {
		let transformNameShares = () => {
			switch (selectedButton) {
				case "УКТ": {
					return "ykt";
				}
				case "КРС": {
					return "krs";
				}
				case "ДР": {
					return "dr";
				}
				case "КЧГ": {
					return "kchg";
				}
				case "ЯКХЗ": {
					return "yakhz";
				}
				default:
					console.log('error "addSharesThunks"');
			}
		};
		dispatch(sellSharesAC(transformNameShares(), wantToSale, valueVoucher, totalCost));
		let state = getState().MainReduser;
		console.log(state);
		const response = await fetch(`https://patsuk-6e89a0c8f358.herokuapp.com/put/${state._id}`, {
			method: "PUT",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(state),
		});
		if (!response.ok) {
			throw new Error(`HTTP error! Status: ${response.status}`);
		}
	} catch (error) {
		console.error("Помилка:", error);
		alert("❌ Помилка при збереженні даних. Спробуйте ще раз.");
	}
};

export const PurseThunks = (action, value) => async (dispatch, getState) => {
	try {
		dispatch(PurseAC(action, value));
		let state = getState().MainReduser;
		console.log(state);
		const response = await fetch(`https://patsuk-6e89a0c8f358.herokuapp.com/put/${state._id}`, {
			method: "PUT",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(state),
		});
		if (!response.ok) {
			throw new Error(`HTTP error! Status: ${response.status}`);
		}
	} catch (error) {
		console.error("Помилка:", error);
		alert("❌ Помилка при збереженні даних. Спробуйте ще раз.");
	}
};
export const PaycheckThunks = () => async (dispatch, getState) => {
	try {
		dispatch(PaycheckAC());
		let state = getState().MainReduser;
		console.log(state);
		const response = await fetch(`https://patsuk-6e89a0c8f358.herokuapp.com/put/${state._id}`, {
			method: "PUT",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(state),
		});
		if (!response.ok) {
			throw new Error(`HTTP error! Status: ${response.status}`);
		}
	} catch (error) {
		console.error("Помилка:", error);
		alert("❌ Помилка при збереженні даних. Спробуйте ще раз.");
	}
};

export const AddEarnThunks = (count,average_price,total_price) => async (dispatch, getState) => {
	try {
		dispatch(AddEarnkAC(count,average_price,total_price));
		let state = getState().MainReduser;
		console.log(state);
		const response = await fetch(`https://patsuk-6e89a0c8f358.herokuapp.com/put/${state._id}`, {
			method: "PUT",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(state),
		});
		if (!response.ok) {
			throw new Error(`HTTP error! Status: ${response.status}`);
		}
	} catch (error) {
		console.error("Помилка:", error);
		alert("❌ Помилка при збереженні даних. Спробуйте ще раз.");
	}
};
export const sellEarnThunks = (wantToSale, valueVoucher, totalCost) => async (dispatch, getState) => {
	try {
		
		dispatch(sellEarnThunksAC(wantToSale, valueVoucher, totalCost));
		let state = getState().MainReduser;
		console.log(state);
		const response = await fetch(`https://patsuk-6e89a0c8f358.herokuapp.com/put/${state._id}`, {
			method: "PUT",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(state),
		});
		if (!response.ok) {
			throw new Error(`HTTP error! Status: ${response.status}`);
		}
	} catch (error) {
		console.error("Помилка:", error);
		alert("❌ Помилка при збереженні даних. Спробуйте ще раз.");
	}
};
export const addRealtyCashThunks = (property_type, total_price, credit, deposit, rent_price, real_price, monthly_interest) => async (dispatch, getState) => {
	try {
		dispatch(addRealtyCashAC(property_type, total_price, credit, deposit, rent_price, real_price, monthly_interest));
		let state = getState().MainReduser;
		console.log(state);
		const response = await fetch(`https://patsuk-6e89a0c8f358.herokuapp.com/put/${state._id}`, {
			method: "PUT",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(state),
		});
		if (!response.ok) {
			throw new Error(`HTTP error! Status: ${response.status}`);
		}
	} catch (error) {
		console.error("Помилка:", error);
		alert("❌ Помилка при збереженні даних. Спробуйте ще раз.");
	}
};
export const SellRealtyThunks = (salePrice, selectedID) => async (dispatch, getState) => {
	try {
		dispatch(SellRealtyAC(salePrice, selectedID));
		let state = getState().MainReduser;
		console.log(state);
		const response = await fetch(`https://patsuk-6e89a0c8f358.herokuapp.com/put/${state._id}`, {
			method: "PUT",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(state),
		});
		if (!response.ok) {
			throw new Error(`HTTP error! Status: ${response.status}`);
		}
	} catch (error) {
		console.error("Помилка:", error);
		alert("❌ Помилка при збереженні даних. Спробуйте ще раз.");
	}
};

export const addRealtyCreditThunks = (property_type, total_price, credit, deposit, rent_price, real_price, monthly_interest) => async (dispatch, getState) => {
	try {
		dispatch(addRealtyCreditAC(property_type, total_price, credit, deposit, rent_price, real_price, monthly_interest));
		let state = getState().MainReduser;
		console.log(state);
		const response = await fetch(`https://patsuk-6e89a0c8f358.herokuapp.com/put/${state._id}`, {
			method: "PUT",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(state),
		});
		if (!response.ok) {
			throw new Error(`HTTP error! Status: ${response.status}`);
		}
	} catch (error) {
		console.error("Помилка:", error);
		alert("❌ Помилка при збереженні даних. Спробуйте ще раз.");
	}
};