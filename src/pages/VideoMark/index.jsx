import React, { PureComponent } from 'react';
import styles from './index.module.scss';

class VideoMark extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }


  render() {

    return (
      <div className={styles['motu-video-mark']}>
        videomark
      </div>
    )
  }
}

export default VideoMark;