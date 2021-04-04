import React, { useEffect, useState, useRef } from 'react';
import VideoCard from './VideoCard';
import { FileType } from '@/common/enum';
import styles from './index.module.scss';

function FileList(props) {
  const { files, type } = props;

  return (
    <div className={styles.container}>
      {
        files.map(f => {
          return (
            <div className={styles.test} key={f.uuid}>
              <video src={f.previewUrl} controls></video>
            </div>
          )
        })
      }
    </div>
  )
}

FileList.VideoCard = VideoCard;
export default FileList;