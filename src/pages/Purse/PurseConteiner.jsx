import { connect } from "react-redux";
import Purse from "./Purse";
import { PaycheckThunks, PurseThunks } from "../../components/Redux/Redux-Thunk";

let mapStatetoProps = (state) => {
	return {
		state: state.MainReduser,
	};
};

let mapDispatchToProps = (dispatch) => {
	return {
		PurseThunks: (action, value) => {
			dispatch(PurseThunks(action, value));
		},
		PaycheckAC: () => {
			dispatch(PaycheckThunks());
		},
	};
};

const PurseConteiner = connect(mapStatetoProps, mapDispatchToProps)(Purse);

export default PurseConteiner;
