import { Button } from '../packages'
import { useState } from 'react'
export default () => {
  let [loading, setLoading] = useState(false)
  return (
    <div>
      {/* <Button type="primary" icon="error" >错了</Button>
      <Button type="primary" shape="round">没错</Button>
      <Button type="primary" icon="speaker" shape="cricle"></Button>
      <Button type="danger" icon="wifi" shape="cricle"></Button> */}
      <Button type="danger"   loading={loading} onClick={() => {
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
        }, 2e3);
      }}>内容</Button>
      <Button type="danger" loading={loading} cooloading block onClick={() => {
        setLoading(true);
      }}>内容</Button>
      <Button type="danger" loading={loading} cooloading onClick={() => {
        setLoading(true);
      }}>内容</Button>
      <Button type="danger" shape="cricle" icon="wifi" onClick={() => {
        setLoading(false);
      }}></Button>

    </div>
  )
}