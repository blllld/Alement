import '../demo/style.scss';

import { Row, Col, ConfigProvier } from '../packages'

export default () => {
  return (
    <>
      <Row type="flex" justify="end" align="bottom">
        <Col span={4}>
          <div className="red" style={{ height: 100 }}>col-4</div>
        </Col>
        <Col span={4}>
          <div className="green" style={{ height: 50 }}>col-4</div>
        </Col>
        <Col span={4}>
          <div className="blue" style={{ height: 80 }}>col-4</div>
        </Col>
        <Col span={4}>
          <div className="yellow" style={{ height: 120 }}>col-4</div>
        </Col>
      </Row>

    </>
  )
}