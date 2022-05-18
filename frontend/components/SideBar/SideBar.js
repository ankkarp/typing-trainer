import styles from "./SideBar.module.scss";

/**
 * Боковая панель
 */
const SideBar = () => {
  const modes = ["Poems", "Code", "Words", "Symbols"];

  return (
    <nav className={styles.sidebar}>
      <ul>
        {modes.map((m, i) => (
          <li>{m}</li>
        ))}
      </ul>
    </nav>
  );
};

export default SideBar;
