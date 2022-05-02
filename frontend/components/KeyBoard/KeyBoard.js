import Key from '../Key/Key';
import styles from './KeyBoard.module.scss';

const KeyBoard = () => {
  const topKeys = ['QWERTYUIOP', 'ASDFGHJKL', 'ZXCVBNM'];

  return (
    <div className={styles.keyboard}>
      {topKeys.map((keyrow, index) => (
        <div key={index} className={styles.line}>
          {keyrow.split('').map((syl, index) => (
            <Key syl={syl} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default KeyBoard;
