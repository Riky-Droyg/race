import React, { useState } from "react";
import s from "./PassiveIncome.module.scss";
import HeaderBar from "../../components/HeaderBar/HeaderBar";
import ListItems from "../../components/ListItem/ListItems";
import ButtonReturnConteiner from "../../components/ButtonReturn/ButtonReturnConteiner";

function PassiveIncome(props) {
	// debugger;
	let totalRent = props.state.apartments.reduce((sum, apartment) => {
		return sum + apartment.rent_price;
	}, 0);
	let deleteBuisnes = (index) => {
		props.DeleteBuisnes(index);
	};

	return (
		<div className={s.financialOverview}>
			<ButtonReturnConteiner />
			<div>
				<HeaderBar
					number={props.state.passive_income.total}
					text={"Пасивний дохід"}
					style={{
						background: "#B7E5C1",
						color: "black",
					}}
					styleFontNumber={{
						fontSize: "32px",
					}}
					styleFontText={{
						fontSize: "16px",
					}}
				/>
				{totalRent} 
			</div>

			<ListItems
				del={deleteBuisnes}
				list={props.state.passive_income.list}
				wrapperStyle={{ height: "75%" }}
			/>
		</div>
	);
}

export default PassiveIncome;
