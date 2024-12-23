import React from "react";
import s from "./HeaderShares.module.scss";

const HeaderShares = ({ nameShares, totalCount, averagePrice }) => {
	return (
		<div className={s.dataRow}>
			<div className={s.headerItem}>Назва</div>
			<div className={s.headerItem}>К-ть</div>
			<div className={s.headerItem}>Ціна</div>
		</div>
	);
};

export default HeaderShares;
