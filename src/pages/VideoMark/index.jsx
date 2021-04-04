import React, { PureComponent } from 'react';
import { FileType } from '@/components/biz';
import { UploadFile, FileList } from '@/components/biz';
import { Icon } from '@/components/lib';
import styles from './index.module.scss';

class VideoMark extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      fileList: [],
    };
  }

  uploadChange = (curFiles) => {
    this.setState({ fileList: [...curFiles] });
  }

  render() {
    const { fileList } = this.state;

    return (
      <div className={styles.container}>
        <FileList files={fileList} />
        <div className={styles['motu-video-mark']}>
          <div className={styles.left}>
            <div className={styles.videoArea}>
              {/* <Icon type="iconxiala" /> */}
            </div>
            <UploadFile
              onChange={(curFiles, prevFiles, file) => this.uploadChange(curFiles, prevFiles, file)}
              files={fileList}
              type={FileType.Video}
              buttonProps={{ style: { width: 160 } }}
            />

          </div>
          <div className={styles.right}>
            <div className={styles.preview}></div>
            <div className={styles.timeline}></div>
          </div>
        </div>
      </div>

    )
  }
}

export default VideoMark;