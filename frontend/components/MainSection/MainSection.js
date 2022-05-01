import KeyBoard from "../KeyBoard/KeyBoard";
import WordInput from "../WordInput/WordInput";
import styles from "./MainSection.module.scss";

const MainSection = () => {
  return (
    <div className={styles.main}>
      <h1>Тренажер печати</h1>
      <WordInput />
      <KeyBoard />
    </div>
  );
};

export default MainSection;
