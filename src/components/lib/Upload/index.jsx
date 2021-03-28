import React, { useRef } from 'react';
import Button from '../Button';
import styles from './index.module.scss';

function Upload(props) {
  const { } = props;
  const input = useRef(null);

  return (
    <div className={styles.input}>
      <Button
        className={styles.button}
        onClick={() => !!input.current && input.current.click()}
      >
        上传文件
      </Button>
      <input ref={input} type="file" />
    </div>
  )
}

Upload.DragUpload = () => {


  return (
    <div></div>
  )
}

export default Upload;