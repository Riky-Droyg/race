import { useState, useEffect } from "react";
import s from "./Input.module.scss";

const Input = ({
  text,
  value,
  onChange,
  placeholder = "0",
  newClass,
  disabled = false,
  symbolOnChange,
  displaySymbol = "$",
  displaySymbolRight = "",
  signs = ""
}) => {
  const [internalValue, setInternalValue] = useState("");

  useEffect(() => {
    if (value === "") {
      setInternalValue("");
    }
  }, [value]);

  // Функція форматування числа з комами
  const formatNumberWithCommas = (num) => {
    if (!num) return "";
    return Number(num).toLocaleString("en-US");
  };

  const handleChange = (e) => {
    // Залишаємо тільки цифри
    let inputValue = e.target.value.replace(/[^0-9]/g, "");
    setInternalValue(inputValue);

    if (onChange) {
      onChange(inputValue, symbolOnChange ?? undefined); // Передаємо "чисті" цифри
    }
  };

  // Формуємо рядок для відображення: символ + відформатоване число або internalValue
  const displayValue =
  
    value !== undefined && value !== ""
      ? `${signs}${displaySymbol}${formatNumberWithCommas(value)}${displaySymbolRight}`
      : internalValue !== ""
      ? `${signs}${displaySymbol}${formatNumberWithCommas(internalValue)}${displaySymbolRight}`
      : "";
  return (
    <div className={`${s.info} ${newClass || ""}`}>
      <div className={s.infoText}>{text}</div>
      <input
        className={s.infoNumber}
        type="text"
        value={displayValue}
        onChange={handleChange}
        maxLength={11}
        inputMode="numeric"
        pattern="[0-9]*"
        placeholder={`${signs}${displaySymbol}${placeholder}${displaySymbolRight}`}
        autoComplete="off"
        readOnly={disabled}
      />
    </div>
  );
};

export default Input;