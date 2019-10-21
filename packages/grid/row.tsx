import { useContext } from "react"
import classNames from 'classnames';
import { ConfigContext } from "../config-provider/context"
import RowContext from './RowContext'
import { responsiveSizes } from "../row/responsive"


const getGutter = ({ gutter }: RowProps) => {
  if (gutter) {
    if (typeof gutter === 'object') {
      for (let i = 0; i < responsiveSizes.length; i++) {
        const gutterBreak = gutter[responsiveSizes[i]];
        if (gutterBreak !== undefined) {
          return gutterBreak;
        }
      }
    }
  }
  return gutter;
}

/**
 * 应用gutter样式
 * @param gutter 
 */
const useGutterStyle = (gutter: number | number[]) => {
  let isArray = Object.prototype.toString.call(gutter) === '[object Array]';
  if (typeof gutter === 'number') {
    return {
      marginLeft: gutter! / -2,
      marginRight: gutter! / - 2,
    }
  } else if (isArray) {
    const [horizontalGutter, VerticalGutter] = gutter as number[];
    return {
      margin: `${horizontalGutter / -2}px ${VerticalGutter / -2}px`
    }
  }
}

/**
 * 使用flex模式时
 * @param prefixCls 
 * @param  param1 
 */
const flexCls = (prefixCls, { justify, align }: RowProps, type?: "flex") => {
  if (type === 'flex') {
    const flex = `${prefixCls}-${type}`;

    return {
      [flex]: true,
      [`${flex}-${justify}`]: justify,
      [`${flex}-${align}`]: align,
    }
  }
  return ""
}

const renderRow = ({ getPrefixCls }: ConfigConsumerProps, props: RowProps) => {
  const gutter = getGutter(props);
  const {
    prefixCls: customizePrefixCls,
    children,
    type,
    className,
    style,
    ...others
  } = props;
  const prefixCls = getPrefixCls('row', customizePrefixCls);

  const classes = classNames(
    {
      [prefixCls]: !type,
    },
    flexCls(prefixCls, others, type),
    className
  );

  const rowStyle = {
    ...useGutterStyle(gutter),
    ...style
  }

  return (
    <RowContext.Provider value={{ gutter }} >
      <div {...others} className={classes} style={rowStyle}>
        {children}
      </div>
    </RowContext.Provider>
  )
}

const Row = (props: RowProps) => {
  return (
    <>{renderRow(useContext(ConfigContext), props)}</>
  )
}

export default Row;