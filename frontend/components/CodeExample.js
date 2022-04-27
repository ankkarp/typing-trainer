import cl from "../styles/CodeExample.module.css";

/**
 * Окно ввода тренажера / требуемого кода
 */
const CodeExample = ({ exampleCode }) => {
  return (
    <textarea
      className={cl.code}
      type="text"
      value={exampleCode}
      placeholder={exampleCode}
      disabled
    />
  );
};

export default CodeExample;
