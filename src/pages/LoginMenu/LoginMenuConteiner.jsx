import React from "react";
import { connect } from "react-redux";
import { АuthorizationThunks } from "./LoginMenuThunk";
import LoginMenu from "./LoginMenu";

let mapStateToProps = (state) => {
	return {
		state: state.MainReduser,
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
