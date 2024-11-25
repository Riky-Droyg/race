import React from "react";
import { connect } from "react-redux";
import { АuthorizationThunks } from "../Redux/Redux-Thunk";
import LoginMenu from "./LoginMenu";

let mapStateToProps = (state) => {
	return {
		state: state.MainMenuReduser,
	};
};

let mapDispatchToProps = (dispatch) => {
	return {
		АuthorizationThunks: (name) => {
			dispatch(АuthorizationThunks(name));
		},
	};
};

const LoginMenuContainer = connect(mapStateToProps, mapDispatchToProps)(LoginMenu);

export default LoginMenuContainer;
