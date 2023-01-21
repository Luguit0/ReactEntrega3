import React, { useState } from 'react'
import Helmet from '../components/Helmet/Helmet'
import { Container, Row, Col, Form, FormGroup } from 'reactstrap'
import { Link } from 'react-router-dom'
import '../styles/login.css'
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../firebase.config'
import { ref, uploadBytesResumable, getDownloadURL} from 'firebase/storage'
import { storage}  from '../firebase.config'
import { toast } from 'react-toastify'
import { setDoc, doc} from 'firebase/firestore'
import { db } from '../firebase.config'
import { useNavigate } from 'react-router-dom'


const Signup = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const signup = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      const userCredential = await createUserWithEmailAndPassword (auth, email, password)

      const user = userCredential.user;

      const storageRef = ref(storage,`images/${Date.now()}`)
      const uploadTask = uploadBytesResumable(storageRef)

      uploadTask.on((error)=>{
        toast.error(error.message)
      }, ()=>{
        getDownloadURL(uploadTask.snapshot.ref).then(async(downloadURL)=>{
          //update usuario Perfil
          await updateProfile(user,{
            photoURL: downloadURL,
          });
          // store data usuario firestore
          await setDoc(doc(db,'users',user.uid),{
            uid: user.uid,
            email,
            photoURL: downloadURL,
          })


        });
      })

      setLoading(false)
      toast.success('Cuenta Creada')
      navigate('/login')

    } catch (error) {
      setLoading(false)
      toast.error ("Algo salio mal");
    }
  }

  return <Helmet title='Signup'>
    <section>
      <Container>
        <Row>
          {
            loading? <Col lg='12'><h6>Cargando..?</h6></Col> :           <Col lg='6' className='m-auto text-center'>
            <h3 className='fw-bold fs-4'>Signup</h3>

            <Form className='auth__form' onSubmit={signup}>
              <FormGroup className='form_group'>
                <input type="email" placeholder='Email' value={email} onChange={e => setEmail(e.target.value)} />
              </FormGroup>
              <FormGroup className='form_group'>
                <input type="password" placeholder='Contraseña' value={password} onChange={e => setPassword(e.target.value)} />
              </FormGroup>


              <button type='submit' className="buy__btn auth__btn">Crear Cuenta</button>
              <p>Ya tenes cuenta?{" "} <Link to="/signup">Inicia Sesion</Link></p>
            </Form>
          </Col>
          }
        </Row>
      </Container>
    </section>
  </Helmet>
}

export default Signup