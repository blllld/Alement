import classNames from 'classnames';
import { useContext } from "react"
import { ConfigContext } from "../config-provider/context"
import RowContext from './RowContext'
import { responsiveSizes } from "../row/responsive";

const getGutter = ({ gutter }: RowContextConsumerProps) => {
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
      paddingLeft: gutter! / 2,
      paddingRight: gutter! / 2,
    }
  } else if (isArray) {
    const [horizontalGutter, VerticalGutter] = gutter as number[];
    return {
      padding: `${horizontalGutter / 2}px ${VerticalGutter / 2}px`
    }
  }
}

/**
 * 获取响应式的class
 * @param prefixCls 
 * @param sizeName 
 * @param param2 
 */
const getResponsiveSizesCls = (prefixCls: string, sizeName: string, { span, order, offset, pull, push }: ColSize) => {
  let prefix = `${prefixCls}${sizeName ? ('-' + sizeName) : ""}`;
  return {
    [`${prefix}-${span}`]: span || span === 0,
    [`${prefix}-order-${order}`]: order || order === 0,
    [`${prefix}-offset-${offset}`]: offset || offset === 0,
    [`${prefix}-push-${push}`]: push || push === 0,
    [`${prefix}-pull-${pull}`]: pull || pull === 0,
  }
}

/**
 * 将列的属性转为class
 * @param prefixCls 
 * @param props 
 */
const getColCls = (prefixCls: string, props: ColProps) => {
  let sizeClass = {};

  responsiveSizes.forEach(size => {

    let sizeProps: ColSize = {}
    const colSize = props[size];

    if (colSize) {
      if (typeof colSize === 'number') {
        sizeProps.span = colSize;
      } else if (typeof colSize === 'object') {
        sizeProps = colSize || {};
      }

      delete (props as any)[size];
      sizeClass = {
        ...sizeClass,
        ...getResponsiveSizesCls(prefixCls, size, sizeProps)
      }
    }
  });

  sizeClass = {
    ...sizeClass,
    ...getResponsiveSizesCls(prefixCls, "", props)
  }

  return sizeClass;
}

const renderCol = ({ getPrefixCls }: ConfigConsumerProps, props: ColProps) => {
  const rowContext = useContext(RowContext);

  const {
    prefixCls: customizePrefixCls,
    children,
    className,
    style,
    ...others } = props;
  const prefixCls = getPrefixCls('col', customizePrefixCls);

  const classes = classNames(
    prefixCls,
    className,
    getColCls(prefixCls, others)
  );

  const gutter = getGutter(rowContext);

  const colStyle = {
    ...useGutterStyle(gutter),
    ...style
  }

  return (
    <div {...others} className={classes} style={colStyle}>
      {children}
    </div>
  )
}

const Col = (props: ColProps) => {
  return (
    <>{renderCol(useContext(ConfigContext), props)}</>
  )
}

export default Col;