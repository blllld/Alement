
type Breakpoints = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

type BoundaryMap = Partial<Record<Breakpoints, string>>;

interface AlElement<T> extends React.HTMLAttributes<T> {
  prefixCls?: string;
}

interface ConfigConsumerProps {
  getPrefixCls: (suffixCls: string, custoizePrefixCls?: string) => string;
}
type gutter = number | Partial<Record<Breakpoints, number>> | [number, number];
interface RowProps extends AlElement<HTMLDivElement> {
  gutter?: gutter
  type?: 'flex',
  justify?: string;
  align?: string;
}
type RowJustify = 'start' | 'end' | 'center' | 'space-around' | 'space-between';

type RowAlign = 'top' | 'middle' | 'bottom';

interface RowContextConsumerProps {
  gutter?: gutter;
}

type ColSpanType = number | string;

interface ColSize {
  span?: ColSpanType;
  order?: ColSpanType;
  offset?: ColSpanType;
  push?: ColSpanType;
  pull?: ColSpanType;
}

interface ColProps extends AlElement<HTMLDivElement> {
  span?: ColSpanType;

  offset?: ColSpanType;
  order?: ColSpanType;
  pull?: ColSpanType;
  push?: ColSpanType;

  xs?: ColSpanType | ColSize;
  sm?: ColSpanType | ColSize;
  md?: ColSpanType | ColSize;
  lg?: ColSpanType | ColSize;
  xl?: ColSpanType | ColSize;
  xxl?: ColSpanType | ColSize;

}

interface LayoutProps extends AlElement<HTMLDivElement> {

}
interface AsideProps extends AlElement<HTMLDivElement> {
  /**
   * 收缩宽度，默认80
   */
  collapsedWidth?: number;
  /**
   * 开启/关闭 收缩功能
   */
  collapsible?: boolean;
  /**
   * 当前收缩状态
   */
  collapsed?: boolean;

  /**
   * 展开宽度 默认200
   */
  width?: number;

  trigger?: JSX.Element;

  /**
   * 当点击trigger时触发
   */
  onCollapse?: (collapsed) => void;
}

interface LayoutConsumerProps {
  setAside: (asideName: string) => void;
  removeAside: (asideName: string) => void;
}