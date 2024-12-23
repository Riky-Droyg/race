import React from "react";
import s from "./LineShares.module.scss";

const LineShares = ({ nameShares, totalCount, averagePrice }) => {
	return (
		<div className={s.dataRow}>
			<div
				style={{ fontSize: "16px"}}
				className={`${s.dataItem} ${s.borderName}`}
			>
				{nameShares}
			</div>
			<div className={s.dataItem}>{totalCount.toLocaleString("en-US")}</div>
			<div
				style={{ fontSize: "12px", color: "#454E57" }}
				className={s.dataItem}
			>
				${averagePrice.toLocaleString("en-US")}
			</div>
		</div>
	);
};

export default LineShares;
