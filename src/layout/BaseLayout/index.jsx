import React from 'react';
import { Link } from 'react-router-dom';
import { image } from '@/common/setting';
import Menu from './components/Menu';
import styles from './index.module.scss';

function BaseLayout(props) {
  const { children } = props;


  return (
    <div className={styles['wotu-base-layout']}>
      <div className={styles['wotu-nav']}>
        <Link to="/" className={styles['wotu-logo']}>
          <img src={image.home.logo} />
        </Link>

        <div className={styles['wotu-menu']}>
          <Menu />
        </div>
      </div>
      <div className={styles['wotu-container']}>
        {children}
      </div>
    </div>
  )

}

export default BaseLayout;