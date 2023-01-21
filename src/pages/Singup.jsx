import React, {useState} from 'react'
import Helmet from '../components/Helmet/Helmet'
import { Container, Row, Col, Form, FormGroup} from 'reactstrap'
import { Link } from 'react-router-dom'
import '../styles/login.css'

const Signup = () => {

  const [email, setEmail] = useState ('')
  const [password, setPassword] = useState ('')

  return <Helmet title='Login'>
    <section>
      <Container>
        <Row>
          <Col lg='6'className='m-auto text-center'>
            <h3 className='fw-bold fs-4'>Signup</h3>

            <Form className='auth__form'>
              <FormGroup className='form_group'>
                <input type="email" placeholder='Email'value={email} onChange={e=> setEmail(e.target.value)} />
              </FormGroup>
              <FormGroup className='form_group'>
                <input type="password" placeholder='Contraseña' value={password} onChange={e=> setPassword(e.target.value)} />
              </FormGroup>


              <button type='submit' className="buy__btn auth__btn">Crear Cuenta</button>
              <p>Ya tenes cuenta?{" "} <Link to="/signup">Inicia Sesion</Link></p>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  </Helmet>
}

export default Signup