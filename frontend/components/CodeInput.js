import { useState } from "react";
import cl from "../styles/CodeInput.module.css";
import { useEffect } from "react";

/**
 * Окно ввода тренажера / требуемого кода
 */
const CodeInput = ({ defaultCode, exampleCode, disabled }) => {
  const [code, setCode] = useState(defaultCode);

  useEffect(() => {
    setCode(defaultCode);
  }, [defaultCode]);

  return (
    <textarea
      className={cl.code}
      type="text"
      value={code}
      placeholder={exampleCode}
      onChange={(e) => setCode(e.target.value)}
      disabled={disabled}
    />
  );
};

export default CodeInput;
