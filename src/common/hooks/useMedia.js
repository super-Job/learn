import { useState, useEffect } from 'react';
import Wands from 'wands';

function useMedia(props) {
  const { videoRef, } = props;
  const [media, setMedia] = useState(null);
  const [playing, setPlaying] = useState(false);
  const [videoInfo, setVideoInfo] = useState({ currentTime: 0, duration: NaN });

  useEffect(
    () => {
      const video = videoRef.current;
      if (!video) return;
      const media = new Wands(video);
      setMedia(media);

      // media.loop = true;

      // media.startTime = 3000;
      media.endTime = 10000;

      media.on('playstatus', onPlayStatus);
      media.on('timeupdate', onTimeUpdate);
      media.on('loadeddata', (ev) => { });
      return () => {
        media.destory();
      }
    },
    []
  )

  function onPlayStatus(ev) {
    const { playing } = ev;
    setPlaying(playing);
  }

  function onTimeUpdate(ev) {
    console.log(ev,'????')
  }

  return {
    media,
    playing,
  }

}

export default useMedia;