import Home from '@/pages/Home';
import VideoMark from '@/pages/VideoMark';
import AudioMark from '@/pages/AudioMark';

const routes = [
  {
    Comp: Home,
    path: '/',
    exact: true,
  },
  {
    Comp: Home,
    path: '/home',
    exact: true,
  },
  {
    Comp: VideoMark,
    path: '/videoMark',
    exact: true,
  },
  {
    Comp: AudioMark,
    path: '/audioMark',
    exact: true,
  },
]

export default routes;
