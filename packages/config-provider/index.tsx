import { ConfigContext, DEFAULT_PREFIX_CLASS_OF_STYLE } from './context'
import { useContext } from 'react';

const getPrefixCls = (prefixCls = DEFAULT_PREFIX_CLASS_OF_STYLE) => (suffixCls: string, customizePrefixCls?: string) => {
  if (customizePrefixCls) {
    return customizePrefixCls;
  }
  return suffixCls ? `${prefixCls}-${suffixCls}` : prefixCls;
}

const renderProvider = (props, context) => {
  const { children, prefixCls} = props;
  const config = {
    ...context,
    getPrefixCls: getPrefixCls(prefixCls)
  }

  return (
    <ConfigContext.Provider value={config}>
      {children}
    </ConfigContext.Provider>
  )
}

const ConfigProvier = (props) => {
  let context = useContext(ConfigContext);

  return (
    <>
      {renderProvider(props, context)}
    </>
  );
}
export default ConfigProvier;