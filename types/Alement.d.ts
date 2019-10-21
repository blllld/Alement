
type Breakpoints = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

type BoundaryMap = Partial<Record<Breakpoints, string>>;

interface AlElement<T> extends React.HTMLAttributes<T> { }

interface ConfigConsumerProps {
  getPrefixCls: (suffixCls: string, custoizePrefixCls?: string) => string;
}
type gutter = number | Partial<Record<Breakpoints, number>> | [number, number];
interface RowProps extends AlElement<HTMLDivElement> {
  gutter?: gutter
  prefixCls?: string;
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

  prefixCls?: string;
}