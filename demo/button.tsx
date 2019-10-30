import { Button } from '../packages'
export default () => {
  return (
    <>
      <Button type="primary" disabled>primary</Button>
      <Button type="danger" disabled>danger</Button>
      <Button type="warning" disabled>warning</Button>
      <Button type="success" disabled>success</Button>
      <Button type="link" disabled >success</Button>
      <Button disabled>normal</Button>
      <div></div>
      <Button type="primary" >primary</Button>
      <Button type="danger" >danger</Button>
      <Button type="warning" >warning</Button>
      <Button type="success" >success</Button>
      <Button type="link"  >success</Button>
      <Button >normal</Button>
    </>
  )
}