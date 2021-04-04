import React from 'react';
import cls from 'classnames';
import styles from './index.module.scss';

function Button(props) {
  const { children, className, onClick, style = {} } = props;

  function proxyClick(e) {
    if (typeof onClick === 'function') {
      onClick(e);
    }

    e.nativeEvent.stopImmediatePropagation();
    e.stopPropagation();

  }

  return (
    <button className={cls(styles.button, className)} onClick={proxyClick} style={{ ...style }}>
      <span>{children}</span>
    </button>
  )
}

export default Button;