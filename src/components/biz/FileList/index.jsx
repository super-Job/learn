import React, { useEffect, useState, useRef } from 'react';
import VideoCard from './VideoCard';
import { FileType } from '@/common/enum';
import { Icon } from '@/components/lib';
import cls from 'classnames';
import styles from './index.module.scss';

function FileList(props) {
  const { files, type, className } = props;
  const [active, setActive] = useState(false);

  useEffect(
    () => {
      if (!files?.length || active) return;
      setActive(true);
    },
    [files?.length]
  )

  // 下拉事件
  function onDrag(e) {
    setActive(!active);
    e.stopPropagation();
  }

  // 卡片渲染函数
  function cardRender(data) {
    switch (type) {
      case FileType.Video: {
        return (
          <VideoCard data={data} />
        )
      }

      default: return null;
    }
  }

  return (
    <div className={cls(styles.container, className)}>
      <div className={cls(styles.fileList, {
        [styles.active]: active,
        [styles.default]: !active,
      })}>
        {
          !!files?.length && files.map(f => {
            return (
              <div className={styles.video} key={f.uuid}>
                {cardRender(f)}
              </div>
            )
          })
        }
      </div>
      <div className={styles.drag} onClick={onDrag}>
        {!active && <Icon className={styles.dragIcon} type="iconshuangjiantouxia" size="small" color="#fff" />}
        {active && <Icon className={styles.dragIcon} type="iconshuangjiantoushang" size="small" color="#fff" />}
      </div>
    </div>
  )
}

FileList.VideoCard = VideoCard;
export default FileList;