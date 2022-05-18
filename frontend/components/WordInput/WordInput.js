import styles from './WordInput.module.scss';
import { useState } from 'react';

const WordInput = ({ text, input }) => {
  return (
    <div className={styles.container}>
      <div className={styles.inputContainer}>
        {input.map((s, i) =>
          s === '\n' ? (
            <br key={i} />
          ) : (
            <span className={styles.input} key={i}>
              {s}
            </span>
          )
        )}
        {text.map((s, i) =>
          s === '\n' ? (
            <br key={input.length + i} />
          ) : (
            <span className={styles.text} key={input.length + i}>
              {s}
            </span>
          )
        )}
        {/* <span className={styles.input}>{text}</span> */}
      </div>
      {/* <div
        className={styles.wordInput}
        value={input}
        onChange={(e) => setInput(e.target.value)}
      /> */}
    </div>
  );
};

export default WordInput;
