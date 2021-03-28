import React, { PureComponent } from 'react';
import Upload from '@/components/lib/Upload';
import Button from '@/components/lib/Button';
import styles from './index.module.scss';

class VideoMark extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      fileList: [],
    };
  }


  uploadChange = (files) => {
    const { fileList } = this.state;
    this.setState({ fileList: fileList.concat(files) });
  }


  render() {
    console.log(this.state.fileList)


    return (
      <div className={styles['motu-video-mark']}>
        <div className={styles.left}>
          <div className={styles.upload}>
            <Upload
              onChange={this.uploadChange}
            >
              <Button>
                上传视频
              </Button>
            </Upload>
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