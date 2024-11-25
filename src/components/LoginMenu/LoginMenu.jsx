import React, { useState } from "react";
import s from "./LoginMenu.module.css";
import { useNavigate } from "react-router-dom";

function LoginMenu(props) {
	let navigate = useNavigate();
	const [text, setText] = useState(""); // Стан для збереження тексту

	const handleChange = (e) => {
		setText(e.target.value); // Оновлюємо стан при зміні тексту
	};
	const АuthorizationThunks = () => {
		props.АuthorizationThunks(text, navigate("/MainMenu"));
	};
	return (
		<div className={s.loginMenu}>
			<div>Nick name</div>
			<input onChange={handleChange} value={text} type="text" className={s.numberInput} placeholder="Сума" />
			<button onClick={АuthorizationThunks}>Увійти</button>
		</div>
	);
}

export default LoginMenu;
