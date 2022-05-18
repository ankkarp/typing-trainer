import Key from '../Key/Key';
import styles from './KeyBoard.module.scss';
import { useEffect, useState } from 'react';

const KeyBoard = ({ pressedKeys }) => {
  const topKeys = [
    '1234567890-=',
    'QWERTYUIOP{}',
    'ASDFGHJKL:"',
    'ZXCVBNM<>?',
    ' ',
  ];

  return (
    <div className={styles.keyboard}>
      {topKeys.map((keyrow, index) => (
        <div key={index} className={styles.line}>
          {keyrow.split('').map((syl, index) => (
            <Key syl={syl} active={pressedKeys.includes(syl.toUpperCase())} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default KeyBoard;
