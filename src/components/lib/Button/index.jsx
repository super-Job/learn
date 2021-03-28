import React from 'react';
import cls from 'classnames';
import styles from './index.module.scss';

function Button(props) {
  const { children, className, onClick } = props;


  return (
    <button className={cls(styles.button, className)} onClick={onClick}>
      <span>{children}</span>
    </button>
  )
}

export default Button;