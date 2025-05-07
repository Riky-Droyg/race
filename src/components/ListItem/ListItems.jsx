import React, { useEffect, useRef } from "react";
import s from "./ListItems.module.scss";
import daggerImg from "../../img/dagger.png";

const ListItems = ({ list = [], del, style, wrapperStyle }) => {
	const containerRef = useRef(null);
	useEffect(() => {
		const container = containerRef.current;
		if (container) {
			container.scrollTop = container.scrollHeight; // Прокручування до кінця
		}
	}, [list]); // Викликається кожен раз, коли список змінюється
	let content = list.map((el, index) => (
		<div
			onClick={() => del(index)}
			key={index}
			className={s.businessItem}
			style={style}
		>
			<img
				className={s.buisnesDelete}
				src={daggerImg}
				alt="dagger"
			/>

			<div className={s.businessSize}>{el.type}</div>
			<div className={s.businessIncome}>+{el.sum}</div>
		</div>
	));
	if (list === null) {
		return console.log("error 'total_income.input'");
	} else {
		return (
			<div
				ref={containerRef}
				className={s.wrapper}
				style={wrapperStyle}
			>
				{content}
			</div>
		);
	}
};
export default ListItems;

