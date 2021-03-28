import React from 'react';
import styles from './index.module.scss';

function Button(props) {
  const { children, icon, } = props;


  return (
    <button className={styles.button}>
      <span>{children}</span>
    </button>
  )
}

export default Button;