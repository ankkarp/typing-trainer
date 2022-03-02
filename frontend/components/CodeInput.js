import { useState } from "react";
import cl from "../styles/CodeInput.module.css";

const CodeInput = ({ desiredCode }) => {
  const [enteredText, setEnteredText] = useState("");

  return (
    <textarea
      id={cl.code}
      type="text"
      value={enteredText}
      placeholder={desiredCode}
      onChange={(e) => setEnteredText(e.target.value)}
    />
  );
};

export default CodeInput;
