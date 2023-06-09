import { Modal, Button } from 'react-bootstrap'
import Cart from '@/components/Cart'
import { useRecoilState } from 'recoil'
import cartState from '@/store/atoms/cartAtom'
import Link from 'next/link'

export default function CartModal(props) {
  const [cart] = useRecoilState(cartState)

  return (
    <Modal
      show={props.show}
      size='sm'
      aria-labelledby='contained-modal-title-center'
      centered
      keybord={false}
      onHide={() => props.onHide()}
    >
      <Modal.Header>
        <h5 className='fw-bold mt-2'>Cart</h5>
      </Modal.Header>
      <Modal.Body>
        <Cart show={props.show} />
        {cart.products.length > 0 &&
          <div className='text-center pt-2'>
            <Link href='/orders/new'>
              <Button variant='custom-red' className='text-white' onClick={() => props.onHide()}>
                Fisnish Order
              </Button>
            </Link>
          </div>
        }
      </Modal.Body>
    </Modal>
  )
}