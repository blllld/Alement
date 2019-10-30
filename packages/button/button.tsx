import React, { ReactNode, useRef } from 'react';
import classNames from 'classnames';
import { useContext } from "react"
import Wave from '../wave'
import { ConfigContext } from '../config-provider/context';


const insertSpaceInButton = (insert: boolean, children: ReactNode) => {
  return insert && typeof children === 'string' && children.length == 2 && !/^[a-zA-Z0-9]+$/g.test(children)
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
      [`${prefixCls}-auto-insert-space`]: insertSpaceInButton(autoInsertSpace, children)
    }
  );
  const btn = (
    <button  {...others} className={classes} style={style}>
      <span>{children}</span>
    </button>
  );
  if (type === 'link') {
    return btn;
  }

  return <Wave>{btn}</Wave>
}

const Button = (props: ButtonProps) => {
  return (
    <>{renderCol(useContext(ConfigContext), props)}</>
  )
}

export default Button;