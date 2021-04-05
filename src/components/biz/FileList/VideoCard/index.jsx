import React, { useState, useRef, useEffect } from 'react';
import { Icon } from '@/components/lib';
import styles from './index.module.scss';


function VideoCard(props) {
  const { data = {} } = props;
  const { previewUrl } = data || {};
  const videoRef = useRef(null);

  function onSwitch() {

  }

  return (
    <div className={styles.card}>
      <video
        ref={videoRef}
        className={styles.video}
        src={previewUrl}
      />

      <div className={styles.play} onClick={onSwitch}>
        <Icon type="iconbofang2" size="large" color="black" />
      </div>
    </div>
  )
}

export default VideoCard;