import React, { PureComponent } from 'react';
import Upload from '@/components/lib/Upload';
import styles from './index.module.scss';

class VideoMark extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }


  render() {

    return (
      <div className={styles['motu-video-mark']}>
        <div className={styles.left}>
          <div className={styles.upload}>
            <Upload />
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