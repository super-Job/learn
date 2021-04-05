import { useState, useEffect } from 'react';
import { Media } from '@/common/lib';

function useMedia(props) {
  const { video, } = props;
  const [media, setMedia] = useState(null);
  const [playStatus, setPlayStatus] = useState(false);
  const [videoInfo, setVideoInfo] = useState({ currentTime, duration });

  useEffect(
    () => {
      if (!video) return;
      const media = new Media(video);
      setMedia(media);
    },
    [video]
  )


  return {
    media,
    playStatus,
    setPlayStatus,


  }

}

export default useMedia;