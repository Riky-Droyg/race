import { AddExpensesAC } from "./ExpensesReduser";
import { AddBuisnesAC, DeleteBuisnesAC, GetTestThunks, UpdateStateAC, АuthorizationAC } from "./MainReduser";

export const getThunks = () => (dispatch) => {
	fetch("https://patsuk-6e89a0c8f358.herokuapp.com/get/recJCksG0BD2ak11D")
		.then((response) => {
			return response.json();
		})
		.then((data) => {
			dispatch(GetTestThunks(data));
		})
		.catch((error) => {
			console.error("Помилка завантаження:", error);
		});
		
};
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
// export const АuthorizationThunks = (name, navigate) => (dispatch) => {
// 	fetch(`https://patsuk-6e89a0c8f358.herokuapp.com/new_user/${name}`)
// 		.then((response) => {
// 			return response.json();
// 		})
// 		.then((data) => {
// 			console.log(data);
// 			localStorage.setItem(name, data.user._id);

// 			dispatch(АuthorizationAC(data.user));
// 			return data;
// 		})
// 		.catch((error) => {
// 			console.error("Помилка завантаження:", error);
// 		});
// };
export const AddDataThunks = (sizeBuisnes, value) => (dispatch, getState) => {
	dispatch(AddBuisnesAC(sizeBuisnes, value));
	let state = getState().MainReduser;
	console.log(state)
	fetch(`https://patsuk-6e89a0c8f358.herokuapp.com/put/${state._id}`, {
		method: "PUT",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(
			state
	),
	});
};
export const DeleteDataThunks = (index) => (dispatch, getState) => {
	dispatch(DeleteBuisnesAC(index));
	let state = getState().MainReduser;
	console.log(state)
	
	fetch(`https://patsuk-6e89a0c8f358.herokuapp.com/put/${state._id}`, {
		method: "PUT",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(
			state
	),
	});
};

export const putTestThunks = (key, value) => (dispatch) => {
	let test = {
		_id: "673e2d52f483d0437ef1ebd8",
		cash_on_hand: 0,
		total_income: 0,
		passive_income: {
			total: 0,
			list: [
				{
					name: "Кіоск",
					sum: 500,
					type: "Малий Бізнес",
				},
			],
		},
		active_income: 0,
		salary: 0,
		expenses: {
			total: 0,
			list: [
				{
					name: "Кіоск",
					sum: 500,
				},
			],
		},
		stocks: {
			ykt: {
				totalCount: 0,
				averagePrice: 0,
				list: [
					{
						count: 500,
						price: 20,
					},
				],
			},
			krs: {
				totalCount: 0,
				averagePrice: 0,
				list: null,
			},
			dr: {
				totalCount: 0,
				averagePrice: 0,
				list: null,
			},
			kchg: {
				totalCount: 0,
				averagePrice: 0,
				list: null,
			},
			yakhz: {
				totalCount: 0,
				averagePrice: 0,
				list: null,
			},
		},
		debts: {
			total: 0,
			list: null,
		},
		nick: "Test",
	};
	test[key] = value;
	dispatch(AddExpensesAC()); // Виклик синхронного екшену
	debugger;
	fetch(`https://patsuk-6e89a0c8f358.herokuapp.com/put/recJCksG0BD2ak11D`, {
		method: "PUT",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(test),
	})
		.then((response) => {
			return response.json();
		})
		.then((data) => {
			console.log(data);
			dispatch(UpdateStateAC(data));
		});
};
