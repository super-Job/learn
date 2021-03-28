import React, { useRef, Children, cloneElement, isValidElement, useState, useEffect } from 'react';
import { file } from '@/common/utils';
import cls from 'classnames';
import styles from './index.module.scss';

function Upload(props) {
  const { className, children, onChange } = props;
  const input = useRef(null);



  const openUploadDialog = () => {
    if (!input.current) return;
    input.current.click();
  }

  const onUploadChange = (e) => {
    // 获取文件
    const files = e.target.files;
    const fileList = Object.entries(files).map(([_, f]) => f);
    const responseList = file.getFileURL(fileList);
    if (typeof onChange === 'function') {
      onChange(responseList);
    }
  }

  const childrenRender = () => {
    return Children.map(children, (child => {
      const { props: childProps = {} } = child;
      const { onClick } = childProps;

      if (isValidElement(children)) {
        return cloneElement(child, {
          ...childProps,
          onClick: () => {
            openUploadDialog();
            if (typeof onClick === 'function') {
              onClick();
            }
          },
        })
      } else return child;
    }))
  }

  return (
    <div className={cls(styles.input, className)} onClick={openUploadDialog}>
      {childrenRender()}
      <input ref={input} type="file" onChange={onUploadChange} />
    </div>
  )
}

const DragUpload = (props) => {
  const { children, onChange } = props;
  const dropBox = useRef(null);

  useEffect(
    () => {
      if (!dropBox.current) return;
      const box = dropBox.current;
      box.addEventListener("dragenter", onDragEnter, false);
      box.addEventListener('dragover', onDragOver, false);
      box.addEventListener('drop', onDrop, false);

      return () => {
        box.removeEventListener("dragenter", onDragEnter, false);
        box.removeEventListener('dragover', onDragOver, false);
        box.removeEventListener('drop', onDrop, false);
      }
    },
    [dropBox]
  )

  function onDragEnter(e) {
    e.stopPropagation();
    e.preventDefault();
  }

  function onDragOver(e) {
    e.stopPropagation();
    e.preventDefault();
  }

  function onDrop(e) {
    e.stopPropagation();
    e.preventDefault();
    const { files } = e.dataTransfer;
    const fileList = Object.entries(files).map(([_, f]) => f);
    const responseList = file.getFileURL(fileList);

    if (typeof onChange === 'function') {
      onChange(responseList)
    }

  }


  function uploadChange(files) {
    if (typeof onChange === 'function') {
      onChange(files);
    }
  }


  return (
    <div ref={dropBox} className={styles['drag-upload']} >
      <Upload className={styles.upload} onChange={uploadChange}>
        {children}
      </Upload>
    </div>
  )
}

Upload.DragUpload = DragUpload;
export default Upload;