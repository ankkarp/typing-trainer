import styles from './Key.module.scss';
import { useState } from 'react';
import classNames from 'classnames';

var cx = classNames.bind(styles);

const Key = ({ syl, active }) => {
  return (
    <div className={cx({ [styles.outer]: true, [styles.space]: syl === ' ' })}>
      <div
        className={cx({
          [styles.inner]: true,
          [styles.active]: active,
          [styles.space]: syl === ' ',
        })}
      >
        {syl}
      </div>
    </div>
  );
};

export default Key;
