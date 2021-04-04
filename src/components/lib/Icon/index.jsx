import React, { useEffect } from 'react';
import { _defaultScriptUrl } from '@/common/setting';
import cls from 'classnames';
import styles from './index.module.scss';

const scriptCache = new Set();

function createScriptIcon({ scriptUrl }) {
  // 创建script
  function createScript(index) {
    const curUrl = [...scriptCache][index];
    if (!curUrl) return;
    const script = document.createElement('script');
    script.setAttribute('src', curUrl);
    script.setAttribute('data-namesapce', scriptUrl);
    document.body.appendChild(script);
    script.onload = () => {
      createScript(index + 1);
    }

    script.onerror = () => {
      createScript(index + 1);
    }
  }

  // scriptUrl存在且缓存中没有时
  if (!!scriptUrl && !scriptCache.has(scriptUrl)) {
    scriptCache.add(scriptUrl);
    createScript(0);
  }

  // scriptUrl不存在且缓存中没有默认脚本时
  if (!scriptUrl && !scriptCache.has(_defaultScriptUrl)) {
    scriptCache.add(_defaultScriptUrl);
    createScript(0);
  }
}


function Icon(props) {
  const {
    type,
    size = 'middle',
    color,
    className,
  } = props;

  useEffect(
    () => {
      // 初始化默认脚本
      createScriptIcon({});
    },
    []
  )

  return (
    <span className={cls(className)}>
      <svg
        className={cls(styles.svg, {
          [styles[`size-${size}`]]: typeof size === 'string'
        })}
        fill={color}
      >
        <use xlinkHref={`#${type}`}></use>
      </svg>
    </span>
  )
}

Icon.createScriptIcon = createScriptIcon;
export default Icon;