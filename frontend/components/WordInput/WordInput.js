import styles from './WordInput.module.scss';
import { useState } from 'react';

const WordInput = ({ text, input, setInput }) => {
  return (
    <div className={styles.container}>
      <div className={styles.inputContainer}>
        <p>{text}</p>
        <p>{input}</p>
      </div>
      <div
        className={styles.wordInput}
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
    </div>
  );
};

export default WordInput;
