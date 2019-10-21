import createReactContext from './createReactContext'

export const DEFAULT_PREFIX_CLASS_OF_STYLE = "al";

export const ConfigContext = createReactContext({
  // 当没有消费者时，使用默认的消费者
  getPrefixCls: (suffixCls: string, custoizePrefixCls?: string) => {
    if (custoizePrefixCls) {
      return custoizePrefixCls;
    }
    return `${DEFAULT_PREFIX_CLASS_OF_STYLE}-${suffixCls}`
  }

});

export const ConfigConsumer = ConfigContext.Consumer;


