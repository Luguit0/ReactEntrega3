import React from 'react'
import { Container, Row, Col, Form, FormGroup} from 'reactstrap'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/CommonSection'
import '../styles/checkout.css'
import { useSelector } from 'react-redux'

const Checkout = () => {

  const totalQty = useSelector(state=>state.cart.totalQuantity)
  const totalAmount = useSelector(state=>state.cart.totalAmount)


  return (
    <Helmet title='Checkout'>
      <CommonSection title='Checkout' />
      <section>
        <Container>
          <Row>
            <Col lg='8'>
              <h6 className='mb-4 fw-bold'>Datos de Facturacion</h6>
              <Form className='billing__form'>
                <FormGroup className='form__group'>
                  <input type="text" placeholder='Ingresa tu Nombre' />
                </FormGroup>
                <FormGroup className='form__group'>
                  <input type="email" placeholder='Ingresa tu Email' />
                </FormGroup>
                <FormGroup className='form__group'>
                  <input type="number" placeholder='Ingresa tu Num de Tel' />
                </FormGroup>
                <FormGroup className='form__group'>
                  <input type="text" placeholder='Ingresa tu Direccion' />
                </FormGroup>
                <FormGroup className='form__group'>
                  <input type="text" placeholder='Ingresa tu Ciudad' />
                </FormGroup>
                <FormGroup className='form__group'>
                  <input type="text" placeholder='Ingresa tu Cod Postal' />
                </FormGroup>
                <FormGroup className='form__group'>
                  <input type="text" placeholder='Ingresa tu Pais' />
                </FormGroup>
              </Form>
            </Col>
            <Col lg='4'>
              <div className='checkout__cart'>
                <h6>Total Cantidad: <span>{totalQty} items</span></h6>
                <h6>Subtotal<span>${totalAmount}</span></h6>
                <h6>Envios <span>$0</span></h6>
                <h6>Envios Gratis <span>$0</span></h6>
                <h4>Costo Total <span>${totalAmount}</span></h4>
              </div>
              <button className="buy__btn auth__btn w-100">Concluir Orden</button>
            </Col>
          </Row>
        </Container>
      </section>
      
    </Helmet>
  )
}

export default Checkout