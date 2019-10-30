import './style/index.scss'
import React, { useRef, useEffect, useContext, useState } from 'react';
import { ConfigContext } from '../config-provider/context';
let wavePesudoStyle: HTMLStyleElement;

const RGBAmatch = /^rgba?\((\d+), (\d+), (\d+)(, ([\.\d]*))?\)$/g;

const getWaveColor = (currentColor) => {
  let matchColor = RGBAmatch.exec(currentColor);
  if (matchColor !== null) {
    let [, R, G, B, , A] = matchColor;

    if ([R, G, B].join(",") === '255,255,255') {
      // 纯白
      return "";
    }
    if (R == G && G == B) {
      // 灰度色
      return "";
    }
    if (A === '0') {
      // 纯透明
      return "";
    }
  }
  if (currentColor === "transparent") {
    // 纯透明
    return ""
  }
  return currentColor;
}

const wavedByClickNode = (current: HTMLElement, cls) => {
  let currentStyle = getComputedStyle(current);

  
  const getColor = () => {
    return currentStyle.getPropertyValue('border-top-color') ||
      currentStyle.getPropertyValue('border-color') ||
      currentStyle.getPropertyValue('background-color')
  }
  let animationTimerID: any = null;
  current.addEventListener('click', e => {
    let waveColor = getWaveColor(getColor());
    if (waveColor) {
      animationTimerID = setEffect(current, cls, waveColor, animationTimerID);
    }
  })
}

const setEffect = (current, attr, waveColor, timer) => {
  wavePesudoStyle.innerHTML = "[al-click-animation-without-extra-node='true']::after {--current-color:" + waveColor + "}";
  current.setAttribute(attr, "false");
  clearTimeout(timer);
  setTimeout(() => current.setAttribute(attr, "true"), 20);
  return setTimeout(() => {
    current.setAttribute(attr, "false");
    wavePesudoStyle.innerHTML = "";
  }, 4e3);
}


const renderWave = ({ getPrefixCls, csp }: ConfigConsumerProps, { children }) => {
  let cls = getPrefixCls('click-animation-without-extra-node')
  let ref = useRef<HTMLElement>();

  useEffect(() => {
    if (!wavePesudoStyle) {
      document.body.appendChild((wavePesudoStyle = document.createElement('style')))
    }
    let current = ref.current!;
    wavedByClickNode(current, cls);
  }, []);

  return React.cloneElement(children, { ref, });
}


export default (props) => {
  return renderWave(useContext(ConfigContext), props)
}