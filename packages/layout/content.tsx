import { useContext, useState, useEffect } from "react"
import { ConfigContext } from "../config-provider/context"

const renderLayout = ({ getPrefixCls }: ConfigConsumerProps, props) => {
  const [name, setName] = useState('');
  const {
    children,
    ...others
  } = props;


  return (
    <main {...others}>{children}</main>
  )
}


const Content = (props) => {
  return (
    <>{renderLayout(useContext(ConfigContext), props)}</>
  )
}

export default Content;