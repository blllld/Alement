import '../demo/style.scss';

import { Layout } from '../packages'
import { useState } from 'react';
const { Aside, Content, Header, Footer } = Layout;
export default () => {
  const [collapsedWidth, setSize] = useState(80)
  const [collapsed, setcollapsed] = useState(false);
  return (
    <Layout >
      <Aside collapsible
        collapsed={collapsed}
        collapsedWidth={collapsedWidth}
        onCollapse={collstate => setcollapsed(collstate)}
      >
        {
          new Array(1000).fill("").map((val, i) => <div key={i}>Aside</div>)
        }
        <div>END</div>

      </Aside>
      <Layout>
        <Layout>

          <Header>Header</Header>
          <Content onClick={() => {
            setcollapsed(!collapsed);
          }}>
            setcollapsed
        </Content>
          <Content onClick={() => {

          }}>
            collapsed
         </Content>
        </Layout>
        <Aside collapsible
          collapsed={collapsed}
          collapsedWidth={collapsedWidth}
          onCollapse={collstate => setcollapsed(collstate)}
        >
          {
            new Array(1000).fill("").map((val, i) => <div key={i}>Aside</div>)
          }
          <div>END</div>

        </Aside>
      </Layout>
    </Layout >
  )
}