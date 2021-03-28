import React from 'react';
import { image } from '@/common/setting';
import styles from './index.module.scss';

function Home() {

  return (
    <div className={styles['motu-home']}>
      <div className={styles.center}>
        welcome to <img src={image.home.logo} />!
      </div>
    </div>
  )
}

export default Home;