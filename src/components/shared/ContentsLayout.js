import styles from './ContentsLayout.module.css';
import React from 'react';

function ContentsLayout({children}) {
  return (
      <div className={styles.layout}>
          <div className={styles.container}>{children}</div>
      </div>
  );
}

export default ContentsLayout;
