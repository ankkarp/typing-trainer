import styles from './SideBar.module.scss';

/**
 * Боковая панель
 */
const SideBar = () => {
  const modes = ['Стихи', 'Код', 'Слова', 'Символы'];

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
