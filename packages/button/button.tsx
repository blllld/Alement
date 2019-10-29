import React, { ReactNode, useRef } from 'react';
import classNames from 'classnames';
import { useContext } from "react"
import Wave from '../wave'
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
  const autoInsertSpace = autoInsertSpaceInButton !== false;

  const classes = classNames(
    prefixCls,
    className,
    {
      [`${prefixCls}-${type}`]: type,
      // [`${prefixCls}-auto-insert-space`]: autoInsertSpace && typeof children === 'string' && children.length == 2
    }
  );
  return (
    <Wave>
      <button  {...others} className={classes} style={style}>
        <span>{children}</span>
      </button>
    </Wave>
  )
}

const Button = (props: ButtonProps) => {
  return (
    <>{renderCol(useContext(ConfigContext), props)}</>
  )
}

export default Button;