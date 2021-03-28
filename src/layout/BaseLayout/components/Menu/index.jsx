import React from 'react';
import { navConfig } from '@/common/setting';
import { Link, NavLink } from 'react-router-dom';
import styles from './index.module.scss';


function Menu() {

  return (
    <div className={styles.container}>
      {
        navConfig.map(nav => {
          const { path, name } = nav;
          return (
            <NavLink
              className={styles.link}
              activeClassName={styles.active}
              key={path}
              to={path}
            >
              {name}
            </NavLink>
          )
        })
      }
    </div>
  )
}

export default Menu;