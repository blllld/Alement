import { useContext } from "react"
import { ConfigContext } from "../config-provider/context"

const renderLayout = ({ getPrefixCls }: ConfigConsumerProps, props) => {
  const {
    children
  } = props;
  return (
    <footer>{children}</footer>
  )
}


const Footer = (props) => {
  return (
    <>{renderLayout(useContext(ConfigContext), props)}</>
  )
}

export default Footer;