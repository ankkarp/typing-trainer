import styles from './Key.module.scss';

const Key = ({ syl }) => {
  return (
    <div className={styles.outer}>
      <div className={styles.inner}>{syl}</div>
    </div>
  );
};

export default Key;
