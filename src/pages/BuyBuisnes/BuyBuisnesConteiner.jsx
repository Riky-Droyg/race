import { connect } from "react-redux";
import BuyBuisnes from "./BuyBuisnes";
import { AddBuisnesAC } from "../../components/Redux/ActionCreators";
import { AddBuisnesThunks } from "../../components/Redux/Redux-Thunk";

let mapStatetoProps = (state) => {
	return {
		state: state.MainReduser,
	};
};

let mapDispatchToProps = (dispatch) => {
	return {
		AddBuisnesThunks: (sizeBuisnes, investment, income) => {
			dispatch(AddBuisnesThunks(sizeBuisnes, investment, income));
		},
	};
};

const BuyBuisnesConteiner = connect(mapStatetoProps, mapDispatchToProps)(BuyBuisnes);

export default BuyBuisnesConteiner;
