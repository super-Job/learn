import React from 'react';
import styles from './index.module.scss';

function BaseLayout(props) {
  const { children } = props;


  return (
    <div className={styles['motu-base-layout']}>
      <div className={styles['motu-nav']}>

      </div>
      <div className={styles['motu-contaienr']}>
        <div className={styles['motu-menu']}></div>
      </div>
    </div>
  )

}

export default BaseLayout;