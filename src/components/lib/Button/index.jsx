import React from 'react';
import cls from 'classnames';
import styles from './index.module.scss';

function Button(props) {
  const { children, className, onClick, style = {} } = props;


  return (
    <button className={cls(styles.button, className)} onClick={onClick} style={{ ...style }}>
      <span>{children}</span>
    </button>
  )
}

export default Button;