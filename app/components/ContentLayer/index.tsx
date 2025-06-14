import CommonPaddingLayer from '../CommonPaddingLayer';
import styles from './index.module.css';

interface ContentLayerProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  withoutCommonPaddingLayout?: boolean;
  expand?: boolean
}

const ContentLayer: React.FC<ContentLayerProps> = ({ children, withoutCommonPaddingLayout = false, style = {}, expand = true }) => {
  return (
    <div className={styles.wrapper} style={{ flex: expand ? 1 : 0, ...style }}>
      {withoutCommonPaddingLayout ? children : <CommonPaddingLayer>{children}</CommonPaddingLayer>}
    </div>
  );
}

export default ContentLayer;
