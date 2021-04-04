import React, { PureComponent } from 'react';
import { UploadFile, FileType } from '@/components/biz';
import styles from './index.module.scss';

class VideoMark extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      fileList: [],
    };
  }

  uploadChange = (f, curFiles) => {
    this.setState({ fileList: curFiles });
  }


  render() {
    const { fileList } = this.state;

    return (
      <div className={styles['motu-video-mark']}>
        <div className={styles.left}>
          <div className={styles.videoArea}>
            <UploadFile
              onChange={(file, curFiles, prevFiles) => this.uploadChange(file, curFiles, prevFiles)}
              files={fileList}
              type={FileType.Video}
              buttonProps={{ style: { width: 200 } }}
            />
          </div>

        </div>
        <div className={styles.right}>
          <div className={styles.preview}></div>
          <div className={styles.timeline}></div>
        </div>
      </div>
    )
  }
}

export default VideoMark;