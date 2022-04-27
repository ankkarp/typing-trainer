import { useState } from "react";
import cl from "../styles/CodeInput.module.css";
import { useEffect } from "react";

/**
 * Окно ввода тренажера / требуемого кода
 */
const CodeInput = ({ initCode, desiredCode, disabled }) => {
  const [code, setCode] = useState(initCode);

  useEffect(() => {
    setCode(initCode);
  }, [initCode]);

  // console.log(initCode);

  return (
    <textarea
      id={cl.code}
      type="text"
      value={code}
      placeholder={desiredCode}
      onChange={(e) => setCode(e.target.value)}
      disabled={disabled}
    />
  );
};

export default CodeInput;
