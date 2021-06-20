import React, { useRef } from 'react';
import { Icon } from '@/components/lib';
import { useMedia } from '@/common/hooks';
import styles from './index.module.scss';

function VideoCard(props) {
  const { data = {} } = props;
  const { previewUrl } = data || {};
  const videoRef = useRef(null);
  const { media, playing } = useMedia({ videoRef });

  function onToggle() {
    media.toggle();
  }

  return (
    <div className={styles.card}>
      <video
        ref={videoRef}
        className={styles.video}
        src={previewUrl}
      />

      <div className={styles.play} onClick={onToggle}>
        <Icon type={playing ? "iconpause-full" : "iconbofang2"} size="large" color="black" />
      </div>
    </div>
  )
}

export default VideoCard;