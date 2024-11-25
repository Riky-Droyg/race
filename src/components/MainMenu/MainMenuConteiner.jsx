import React from "react";
import { connect } from "react-redux";
import MainMenu from "./MainMenu";

let mapStateToProps = (state) => {
	console.log(state)
	return {
		state: state.MainReduser,
	};
};

let mapDispatchToProps = (dispatch) => {
	return {
	};
};

const MainMenuContainer = connect(mapStateToProps, mapDispatchToProps)(MainMenu);

export default MainMenuContainer;
