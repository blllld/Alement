import classNames from 'classnames';
import { useContext } from "react"
import { ConfigContext } from "../config-provider/context"

const renderLayout = ({ getPrefixCls }: ConfigConsumerProps, props) => {
  const {
    children,
    prefixCls: customizePrefixCls,
    className
  } = props;

  const prefixCls = getPrefixCls('layout-header', customizePrefixCls);

  const classes = classNames(
    prefixCls,
    className,
  );

  return (
    <header className={classes}>{children}</header>
  )
}


const Header = (props) => {
  return (
    <>{renderLayout(useContext(ConfigContext), props)}</>
  )
}

export default Header;