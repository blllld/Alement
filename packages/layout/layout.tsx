import { useContext, useState, useEffect } from "react"
import { ConfigContext } from "../config-provider/context"
import LayoutContext from './LayoutContext'
import classNames from 'classnames';
import './style/layout.scss';

import Header from './header'
import Aside from './aside'
import Content from './content'
import Footer from './footer'

const hasAside = (prefixCls: string, asides: string[]): string => {
  if (asides.length > 0) {
    return `${prefixCls}-has-aside`;
  }
  return ""
}

const renderLayout = ({ getPrefixCls }: ConfigConsumerProps, props: LayoutProps) => {
  const [asides, putAside] = useState<string[]>([]);

  const {
    children,
    className,
    prefixCls: customPrefixCls
  } = props;

  const prefixCls = getPrefixCls('layout', customPrefixCls);

  const classes = classNames(
    prefixCls,
    hasAside(prefixCls, asides),
    className
  );
  
  return (
    <LayoutContext.Provider value={{
      setAside(asideName) {
        asides.push(asideName)
        putAside([...asides]);
      },
      removeAside(asideName) {
        asides.splice(asides.indexOf(asideName), 1);
        putAside([...asides]);
      }
    }}>
      <div className={classes}>
        {children}
      </div>
    </LayoutContext.Provider>
  )
}


const Layout = (props) => {
  return (
    <>{renderLayout(useContext(ConfigContext), props)}</>
  )
}

Layout.Header = Header;
Layout.Aside = Aside;
Layout.Content = Content;
Layout.Footer = Footer;

export default Layout;