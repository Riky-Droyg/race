import { connect } from "react-redux";
import ButtonReturn from "./ButtonReturn";

let mapStatetoProps = (state) => {
	return {
		state: state.MainReduser,
	};
};

let mapDispatchToProps = (dispatch) => {
	return {
		// addBuisnes: (sizeBuisnes, value) => {
		// 	dispatch(AddBuisnesThunks(sizeBuisnes, value));
		// },
		// DeleteBuisnes: (index) => {
		// 	dispatch(DeleteBuisnesThunks(index));
		// },
	};
};

const ButtonReturnConteiner = connect(mapStatetoProps, mapDispatchToProps)(ButtonReturn);

export default ButtonReturnConteiner;
