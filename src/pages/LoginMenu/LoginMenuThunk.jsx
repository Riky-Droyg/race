import {АuthorizationAC} from "../../components/Redux/ActionCreators"

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