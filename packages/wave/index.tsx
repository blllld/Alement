import './style/index.scss'
import React, { useRef, useEffect, useContext, useState } from 'react';
import { ConfigContext } from '../config-provider/context';
let currentStyle: HTMLStyleElement;

const renderWave = ({ getPrefixCls }: ConfigConsumerProps, { children }) => {
  let cls = getPrefixCls('click-animation-without-extra-node')
  let ref = useRef<HTMLElement>();

  useEffect(() => {
    let current = ref.current!;

    if (!currentStyle) {
      document.body.appendChild((currentStyle = document.createElement('style')))
    }
    let backgroundColor = getComputedStyle(current).getPropertyValue('background-color')
    console.log(backgroundColor);
    
    let timer: any = null;
    current.addEventListener('click', (e) => {
      currentStyle.innerHTML = ":root{--current-color:" + backgroundColor + "}";

      setTimeout(() => current.setAttribute(cls, "true"), 0);

      current.removeAttribute(cls)
      clearTimeout(timer)

      timer = setTimeout(() => current.setAttribute(cls, "false"), 4e3);
    });
  }, []);

  return React.cloneElement(children, {
    ref,
  });
}


export default (props) => {
  return renderWave(useContext(ConfigContext), props)
}