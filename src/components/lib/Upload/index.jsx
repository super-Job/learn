import React, { useRef } from 'react';
import Button from '../Button';
import styles from './index.module.scss';

function Upload(props) {
  const { } = props;

  return (
    <div className={styles.input}>
      <input type="file" />
      <Button className={styles.upload}>上传文件</Button>
    </div>
  )
}

Upload.DragUpload = () => {


  return (
    <div></div>
  )
}

export default Upload;