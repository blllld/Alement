import React from 'react';
import classNames from 'classnames';
import { useContext } from "react"
import { ConfigContext } from '../config-provider/context';
import * as icons from '../../packages-extra/icons'


const renderIcon = ({ getPrefixCls }: ConfigConsumerProps, props: IconProps) => {
  const {
    prefixCls: customizePrefixCls,
    children,
    className,
    style,
    type,
    spin,
    ...others } = props;

  const prefixCls = getPrefixCls('icon', customizePrefixCls);

  const classes = classNames(
    prefixCls,
    className,
    {
      [`${prefixCls}-spin`]:spin
    }
  );
  const icon = type && icons[type];

  if (!icon) {
    return ""
  }

  return <i className={classes} {...others}>{icon()}</i>
}

const Icon = (props: IconProps) => {
  return (
    <>{renderIcon(useContext(ConfigContext), props)}</>
  )
}

export default Icon;