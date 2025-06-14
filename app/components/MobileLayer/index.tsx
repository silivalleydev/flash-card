import React from 'react';
import styles from './index.module.css';

interface MobileLayerProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  expand?: boolean;
}

const MobileLayer: React.FC<MobileLayerProps> = ({ children, style = {}, expand = true }) => {
  return (
    <div className={styles.wrapper} style={{ flex: expand ? 1 : 0, ...style }}>
      {children}
    </div>
  );
}

export default MobileLayer;
