import { connect } from "react-redux";
import BuyShares from "./BuyShares";
import { addSharesThunks } from "../../components/Redux/Redux-Thunk";

let mapStatetoProps = (state) => {
	return {
		state: state.MainReduser,
	};
};

let mapDispatchToProps = (dispatch) => {
	return {
		addSharesThunks: (selectedButton,wantToBuy,valueVoucher,totalCost) => {
			dispatch(addSharesThunks(selectedButton,wantToBuy,valueVoucher,totalCost));
		},
		
	};
};

const BuySharesConteiner = connect(mapStatetoProps, mapDispatchToProps)(BuyShares);

export default BuySharesConteiner;
