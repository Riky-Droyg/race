import { connect } from "react-redux";
import BuyEarth from "./BuyEarth";
import { AddEarnThunks } from "../../components/Redux/Redux-Thunk";

let mapStatetoProps = (state) => {
	return {
		state: state.MainReduser,
	};
};

let mapDispatchToProps = (dispatch) => {
	return {
		AddEarnThunks: (count,average_price,total_price) => {
			dispatch(AddEarnThunks(count,average_price,total_price));
		},
		
	};
};

const BuyEarthConteiner = connect(mapStatetoProps, mapDispatchToProps)(BuyEarth);

export default BuyEarthConteiner;
