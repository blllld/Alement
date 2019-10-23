import { useContext, useEffect, useState, useMemo } from "react"
import { ConfigContext } from "../config-provider/context"
import LayoutContext from './LayoutContext'
import classNames from 'classnames';


/**
 * 为当前的aside生成可回收的id号
 */
const generatorId = (() => {
  let id = 0;
  return (prefixCls: string) => {
    id = id + 1;

    return `${prefixCls}-${id}`
  }
})();


const getCollapsedAble = ({ collapsedWidth = 80, collapsible = false, collapsed = false, width = 200 }: AsideProps) => {
  let flexWidth = width;
  if (collapsible !== false) {
    if (collapsed) {
      flexWidth = collapsedWidth;
    }
  }
  return {
    flex: `0 0 ${flexWidth}px`,
    maxWidth: flexWidth,
    minWidth: flexWidth,
    width: flexWidth,
  }
}

const closeEl = (prefixCls: string, width: number | string, collapsed: boolean, onCollapse) => {
  const cls = `${prefixCls}-trigger`
  return (
    <div className={cls} style={{ width }} onClick={
      () => {
        onCollapse && onCollapse(!collapsed)
      }
    }>关闭</div>
  )
}

const renderAside = ({ getPrefixCls }: ConfigConsumerProps, props: AsideProps) => {
  const [collapsed, triggerSider] = useState(false);
  const {
    children,
    prefixCls: customPrefixCls,
    style,
    collapsed: customCollapsed,
    onCollapse,
    trigger,
    ...others
  } = props;
  const layoutContextConsumer: LayoutConsumerProps = useContext(LayoutContext);
  const prefixCls = getPrefixCls('layout-aside', customPrefixCls);
  const [asideId] = useState(generatorId(prefixCls));

  if (customCollapsed !== undefined && customCollapsed !== collapsed) {
    triggerSider(customCollapsed);
  }

  const asideStyle = {
    ...getCollapsedAble({ collapsed, ...others }),
    ...style
  }

  let triggerEl: JSX.Element;
  let hasTrigger = false;
  if (trigger) {
    triggerEl = trigger;
  } else if (trigger !== null) {
    triggerEl = closeEl(prefixCls, asideStyle.width, collapsed, onCollapse);
    hasTrigger = true;
  }

  const classes = classNames(
    prefixCls,
    { [`${prefixCls}-has-trigger`]: hasTrigger }
  );

  const component = useMemo(() => {
    delete others['collapsible'];
    delete others['collapsed'];
    delete others['collapsedWidth'];
    return (
      <aside style={asideStyle} {...others} className={classes}>
        <div className={`${prefixCls}-children`}>{children}</div>
        {triggerEl}
      </aside>
    );
  }, [others]);


  useEffect(() => {

    //TODO: 此处不知道写的对不对

    layoutContextConsumer.setAside(asideId);
    return () => {
      layoutContextConsumer.removeAside(asideId);
    }
  }, []);

  return <>{component}</>
}

const Aside = (props: AsideProps) => {
  return (
    <>{renderAside(useContext(ConfigContext), props)}</>
  )
}

export default Aside;