import styles from './Key.module.scss';
import { useState } from 'react';
import classNames from 'classnames';

var cx = classNames.bind(styles);

const Key = ({ syl, active }) => {
  return (
    <div className={styles.outer}>
      <div className={cx({ [styles.inner]: true, [styles.active]: active })}>
        {syl}
      </div>
    </div>
  );
};

export default Key;
