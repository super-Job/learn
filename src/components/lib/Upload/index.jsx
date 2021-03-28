import React, { useRef, Children, cloneElement, isValidElemnt, isValidElement } from 'react';
import Button from '../Button';
import cls from 'classnames';
import styles from './index.module.scss';

function Upload(props) {
  const { className, children } = props;
  const input = useRef(null);

  const childrenRender = () => {
    return Children.map(children, (child => {
      const { props: childProps = {} } = child;
      const { onClick } = childProps;

      if (isValidElement(children)) {
        return cloneElement(child, {
          ...childProps,
          onClick: () => {
            !!input.current && input.current.click();
            if (typeof onClick === 'function') {
              onClick();
            }
          },
        })
      } else return child;
    }))
  }

  return (
    <div className={cls(styles.input, className)}>
      {childrenRender()}
      <input ref={input} type="file" />
    </div>
  )
}

Upload.DragUpload = (props) => {
  const { children } = props;
  return (
    <div className={styles['drag-upload']}>
      <Upload className={styles.upload}>
        {children}
      </Upload>
    </div>
  )
}

export default Upload;