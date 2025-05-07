import { connect } from "react-redux";
import BuyRealty from "./BuyRealty";
import { addRealtyCashThunks } from "../../components/Redux/Redux-Thunk";

let mapStatetoProps = (state) => {
	
	return {
		state: state.MainReduser,
	};
};

let mapDispatchToProps = (dispatch) => {
	return {
		addRealtyCash: (property_type, total_price, credit, deposit, rent_price, real_price, monthly_interest) => {
			dispatch(addRealtyCashThunks(property_type, total_price, credit, deposit, rent_price, real_price, monthly_interest));
		},
	
	};
};

const BuyRealtyConteiner = connect(mapStatetoProps, mapDispatchToProps)(BuyRealty);

export default BuyRealtyConteiner;
