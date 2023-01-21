import React, {useState} from 'react'
import Helmet from '../components/Helmet/Helmet'
import { Container, Row, Col, Form, FormGroup} from 'reactstrap'
import { Link, useNavigate } from 'react-router-dom'
import '../styles/login.css'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase.config'
import { toast } from 'react-toastify'


const Login = () => {

  const [email, setEmail] = useState ('')
  const [password, setPassword] = useState ('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate

  const signIn = async(e)=>{
    e.preventDefault()
    setLoading(true)

    try{
      const userCredential = await signInWithEmailAndPassword(auth, email, password)

      const user = userCredential.user
      console.log(user)
      setLoading(false)
      toast.success('Ingresaste Correctamente')
      navigate('/checkout')



    }catch(error){
      setLoading(false)
      toast.error(error.message)
    }
  }

  return <Helmet title='Login'>
    <section>
      <Container>
        <Row>
          {
            loading ? <Col lg='12'><h5>Cargando...</h5></Col> : <Col lg='6'className='m-auto text-center'>
            <h3 className='fw-bold fs-4'>Login</h3>

            <Form className='auth__form'onSubmit={signIn}>
              <FormGroup className='form_group'>
                <input type="email" placeholder='Email'value={email} onChange={e=> setEmail(e.target.value)} />
              </FormGroup>
              <FormGroup className='form_group'>
                <input type="password" placeholder='Contraseña' value={password} onChange={e=> setPassword(e.target.value)} />
              </FormGroup>


              <button type='submit' className="buy__btn auth__btn">Login</button>
              <p>No tenes cuenta?{" "} <Link to="/signup">Crear Cuenta</Link></p>
            </Form>
          </Col>
          }
        </Row>
      </Container>
    </section>
  </Helmet>
}

export default Login