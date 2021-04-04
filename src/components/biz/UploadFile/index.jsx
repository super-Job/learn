import React, { useEffect, useRef } from 'react';
import { Upload, Button } from '@/components/lib';
import { FileType } from '@/common/enum';
import cls from 'classnames';
import styles from './index.module.scss';

const UploadFile = (props) => {
  const { onChange, files, type, className, buttonProps = {}, uploadType = 'default', ...rest } = props;
  const fileList = useRef([]);

  useEffect(
    () => {
      if (!files || !Array.isArray(files)) return;
      if (fileList.current.length !== files.length) {
        fileList.current = [...files];
      }
    },
    [files]
  )

  // 获取不同文件类型的默认配置项目
  function getOptions() {
    switch (type) {
      case FileType.Video: {
        return {
          name: "上传视频",
          desc: "支持上传mp4、avi、wmv、mov格式的视频",
          limit: '视频最大不能超过100M',
          accept: ['video/mp4', 'video/avi', '.wmv', '.mov'],
          maxFileSize: 300 * 1024 * 1024,
        }
      };

      case FileType.Audio: {
        return {
          name: "上传音频",
          accept: ['audio/mp3', 'audio/wav', 'audio/x-m4a'],
          maxFileSize: 10 * 1024 * 1024,
        }
      }

      case FileType.Image: {
        return {
          name: "上传图片",
          accept: ['image/png', 'image/jpg', 'image/jpeg'],
          maxFileSize: 10 * 1024 * 1024,
        }
      };

      default: return {};

    }
  }

  // 上传的文件列表发生变化
  function onFileChange(files) {
    const curFile = files[0];
    const prevFileList = [...fileList.current];
    const currentFileList = prevFileList.concat(files);
    fileList.current = [...currentFileList];
    if (typeof onChange === 'function') {
      onChange(currentFileList, prevFileList, curFile);
    }
  }

  const options = getOptions();


  if (uploadType === 'default') return (
    <div className={cls(styles.upload, className)}>
      <Upload
        onChange={onFileChange}
        {...options}
        {...rest}
      >
        <Button {...(buttonProps || {})}>
          上传视频
        </Button>
      </Upload>
    </div>
  )

  if (uploadType === 'drag') {
    return (
      <div className={cls(styles.dragUpload, className)}>
        <Upload.DragUpload
          onChange={onFileChange}
          {...options}
          {...rest}
        >
          <div className={styles.box}>
            <span>{options?.name}</span>
            <span>{options?.desc}</span>
            <span>{options?.limit}</span>
          </div>
        </Upload.DragUpload>
      </div>
    )
  }

  return null;
}

export default UploadFile;
export { FileType }