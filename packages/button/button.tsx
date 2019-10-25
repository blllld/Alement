import React, { ReactNode } from 'react';
import classNames from 'classnames';
import { useContext } from "react"
import { ConfigContext } from '../config-provider/context';


const insertSpaceInButton = (insert: boolean, children: ReactNode) => {

}

const renderCol = ({ getPrefixCls, autoInsertSpaceInButton }: ConfigConsumerProps, props: ButtonProps) => {

  const {
    prefixCls: customizePrefixCls,
    children,
    className,
    style,
    type,
    ...others } = props;
  const prefixCls = getPrefixCls('button', customizePrefixCls);

  const classes = classNames(
    prefixCls,
    className,
    {
      [`${prefixCls}-${type}`]: type
    }
  );

  return (
    <button {...others} className={classes} style={style}>
      <span>{children}</span>
    </button>
  )
}

const Button = (props: ButtonProps) => {
  return (
    <>{renderCol(useContext(ConfigContext), props)}</>
  )
}

export default Button;