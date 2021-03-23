import React, { PureComponent } from 'react';
import styles from './index.module.scss';

class AudioMark extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {};
  }

  render() {
    return (
      <div className={styles['motu-audio-mark-container']}>
        audiomark
      </div>
    )
  }
}

export default AudioMark;