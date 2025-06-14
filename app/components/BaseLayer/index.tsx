import React from 'react';
import styles from './index.module.css';

interface BaseLayerProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}
const BaseLayer: React.FC<BaseLayerProps> = ({ className, children, style = {} }) => {
  return (
    <div className={`${styles.wrapper} ${className || ''}`} style={style}>
      {children}
    </div>
  );
}

export default BaseLayer;
