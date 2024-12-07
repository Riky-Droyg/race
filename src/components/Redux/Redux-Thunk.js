import { AddExpensesAC, AddBuisnesAC, DeleteBuisnesAC, АuthorizationAC, DeleteExpensesAC, AddActiveIncomeAC, DeleteActiveIncomeAC, AddDebetsAC, AddDebtsAC, DeleteDebtsAC, AddSharesAC, sellingSharesAC, PurseAC, PaycheckAC } from "./MainReduser";

export const АuthorizationThunks = (name, navigate) => (dispatch) => {
	fetch(`https://patsuk-6e89a0c8f358.herokuapp.com/new_user/${name}`)
		.then((response) => {
			return response.json();
		})
		.then((data) => {
			console.log(data);
			localStorage.setItem("state", JSON.stringify(data));

			dispatch(АuthorizationAC(data.user));
			return data;
		})
		.catch((error) => {
			console.error("Помилка завантаження:", error);
		});
};

export const AddBuisnesThunks = (text, value) => (dispatch, getState) => {
	dispatch(AddBuisnesAC(text, value));
	let state = getState().MainReduser;
	console.log(state);
	fetch(`https://patsuk-6e89a0c8f358.herokuapp.com/put/${state._id}`, {
		method: "PUT",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(state),
	});
};
export const DeleteBuisnesThunks = (index) => (dispatch, getState) => {
	dispatch(DeleteBuisnesAC(index));
	let state = getState().MainReduser;
	console.log(state);

	fetch(`https://patsuk-6e89a0c8f358.herokuapp.com/put/${state._id}`, {
		method: "PUT",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(state),
	});
};
export const AddExpensesThunks = (text, value) => (dispatch, getState) => {
	dispatch(AddExpensesAC(text, value));
	let state = getState().MainReduser;
	console.log(state);
	fetch(`https://patsuk-6e89a0c8f358.herokuapp.com/put/${state._id}`, {
		method: "PUT",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(state),
	});
};
export const DeleteExpensesThunks = (index) => (dispatch, getState) => {
	dispatch(DeleteExpensesAC(index));
	let state = getState().MainReduser;
	console.log(state);

	fetch(`https://patsuk-6e89a0c8f358.herokuapp.com/put/${state._id}`, {
		method: "PUT",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(state),
	});
};
export const AddActiveIncomeThunks = (value) => (dispatch, getState) => {
	dispatch(AddActiveIncomeAC(value));
	let state = getState().MainReduser;
	console.log(state);
	fetch(`https://patsuk-6e89a0c8f358.herokuapp.com/put/${state._id}`, {
		method: "PUT",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(state),
	});
};
export const DeleteActiveIncomeThunks = () => (dispatch, getState) => {
	dispatch(DeleteActiveIncomeAC());
	let state = getState().MainReduser;
	console.log(state);
	fetch(`https://patsuk-6e89a0c8f358.herokuapp.com/put/${state._id}`, {
		method: "PUT",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(state),
	});
};

export const AddDebtsThunks = (text, value) => (dispatch, getState) => {
	dispatch(AddDebtsAC(text, value));
	let state = getState().MainReduser;
	console.log(state);
	fetch(`https://patsuk-6e89a0c8f358.herokuapp.com/put/${state._id}`, {
		method: "PUT",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(state),
	});
};

export const DeleteDebtsThunks = (index) => (dispatch, getState) => {
	dispatch(DeleteDebtsAC(index));
	let state = getState().MainReduser;
	console.log(state);
	fetch(`https://patsuk-6e89a0c8f358.herokuapp.com/put/${state._id}`, {
		method: "PUT",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(state),
	});
};

export const addSharesThunks = (nameShares, count, price) => (dispatch, getState) => {
	let transformNameShares = () => {
		switch (nameShares) {
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
	dispatch(AddSharesAC(challengeTransformNameShares, count, price));
	let state = getState().MainReduser;
	console.log(state);
	fetch(`https://patsuk-6e89a0c8f358.herokuapp.com/put/${state._id}`, {
		method: "PUT",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(state),
	});
};

export const sellingSharesThunks = (nameShares, count, price) => (dispatch, getState) => {
	let transformNameShares = () => {
		switch (nameShares) {
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
	dispatch(sellingSharesAC(challengeTransformNameShares, count, price));
	let state = getState().MainReduser;
	console.log(state);
	fetch(`https://patsuk-6e89a0c8f358.herokuapp.com/put/${state._id}`, {
		method: "PUT",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(state),
	});
};

export const PurseThunks = (action, value) => (dispatch, getState) => {
	dispatch(PurseAC(action, value));
	let state = getState().MainReduser;
	console.log(state);
	fetch(`https://patsuk-6e89a0c8f358.herokuapp.com/put/${state._id}`, {
		method: "PUT",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(state),
	});
};
export const PaycheckThunks = () => (dispatch, getState) => {
	dispatch(PaycheckAC());
	let state = getState().MainReduser;
	console.log(state);
	fetch(`https://patsuk-6e89a0c8f358.herokuapp.com/put/${state._id}`, {
		method: "PUT",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(state),
	});
};
