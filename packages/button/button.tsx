import React, { ReactNode } from 'react';
import classNames from 'classnames';
import { useContext } from "react"
import Wave from '../wave'
import { ConfigContext } from '../config-provider/context';
import Icon from '../icon';


const insertSpaceInButton = (insert: boolean, children: ReactNode) => {
  return insert && typeof children === 'string' && children.length == 2 && !/^[a-zA-Z0-9]+$/g.test(children)
}

const renderButton = ({ getPrefixCls, autoInsertSpaceInButton }: ConfigConsumerProps, props: ButtonProps) => {
  const {
    prefixCls: customizePrefixCls,
    children,
    className,
    style,
    type,
    shape,
    icon: customIcon,
    cooloading,
    block,
    loading,
    ...others } = props;
  const prefixCls = getPrefixCls('button', customizePrefixCls);
  const autoInsertSpace = autoInsertSpaceInButton !== false;

  const iconType = loading ? "loading" : customIcon;

  const icon = iconType ? <Icon type={iconType} spin={!!loading} /> : ""
  const classes = classNames(
    prefixCls,
    className,
    {
      [`${prefixCls}-${type}`]: type,
      [`${prefixCls}-${shape}`]: shape,
      [`${prefixCls}-auto-insert-space`]: insertSpaceInButton(autoInsertSpace, children),
      [`${prefixCls}-has-icon`]: !!customIcon  && children,
      [`${prefixCls}-has-only-icon`]: !!customIcon && !children,
      [`${prefixCls}-loading`]: !!loading,
      [`${prefixCls}-cool-loading`]: cooloading,
      [`${prefixCls}-block`]: block,
    }
  );

  const { href, ...rest } = others;
  if (href) {
    return (
      <a className={classes} href={href}>{children}{icon}</a>
    )
  }


  const btn = (
    <button  {...others} className={classes} style={style}>
      <span>{children}{icon}</span>
    </button>
  );


  if (type === 'link') {
    return btn;
  }


  return <Wave>{btn}</Wave>
}

const Button = (props: ButtonProps) => {
  return (
    <>{renderButton(useContext(ConfigContext), props)}</>
  )
}

export default Button;