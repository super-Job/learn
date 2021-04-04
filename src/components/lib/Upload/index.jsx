import React, { useRef, Children, cloneElement, isValidElement, useState, useEffect } from 'react';
import { file } from '@/common/utils';
import { getUuid } from '@/common/utils';
import cls from 'classnames';
import styles from './index.module.scss';


// 普通上传组件
function Upload(props) {
  const { className, children, onChange, accept } = props;
  const input = useRef(null);

  // 打开上传文件对话框
  const openUploadDialog = () => {
    if (!input.current) return;
    input.current.click();
  }

  // 上传文件
  const onUploadChange = (e) => {
    // 获取文件
    const files = e.target.files;
    // 文件对象转数组
    const fileList = Object.entries(files).map(([_, f]) => f);
    // 给文件添加uuid,以及上传时间戳
    const resFiles = fileList.map(fileItem => {
      return {
        file: fileItem,
        uuid: getUuid(),
        uploadTimeStamp: Date.now(),
        previewUrl: file.getSingleFileUrl(fileItem).previewUrl,
      };
    });

    if (typeof onChange === 'function') {
      onChange(resFiles);
    }
  }

  // children渲染函数
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

  // 获取文件上传限制
  function getAccept() {
    if (Array.isArray(accept)) {
      return accept.join(',');
    } else {
      return accept;
    }
  }

  return (
    <div className={cls(styles.input, className)}>
      {childrenRender()}
      <input ref={input} type="file" onChange={onUploadChange} accept={getAccept()} />
    </div>
  )
}


// 拖拽上传组件
const DragUpload = (props) => {
  const { children, onChange, ...rest } = props;
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

    // 获取文件
    const { files } = e.dataTransfer;
    // 文件对象转数组
    const fileList = Object.entries(files).map(([_, f]) => f);
    // 给文件添加uuid,以及上传时间戳
    const resFiles = fileList.map(fileItem => {
      return {
        file: fileItem,
        uuid: getUuid(),
        uploadTimeStamp: Date.now(),
        previewUrl: file.getSingleFileUrl(fileItem).previewUrl,
      };
    });

    if (typeof onChange === 'function') {
      onChange(resFiles)
    }

  }


  function uploadChange(files) {
    if (typeof onChange === 'function') {
      onChange(files);
    }
  }


  return (
    <div ref={dropBox} className={styles['drag-upload']} >
      <Upload className={styles.upload} onChange={uploadChange} {...rest}>
        {children}
      </Upload>
    </div>
  )
}

Upload.DragUpload = DragUpload;
export default Upload;