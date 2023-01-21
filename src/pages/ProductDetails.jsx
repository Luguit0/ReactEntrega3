import React, {useState} from 'react'
import {Container, Row, Col} from 'reactstrap'
import { useParams } from 'react-router-dom'
import products from '../assets/data/products'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/CommonSection'
import '../styles/product-details.css'
import {motion} from 'framer-motion'
import { useDispatch } from 'react-redux'
import {cartActions} from '../redux/slices/cartSlice'
import {toast} from 'react-toastify'

const ProductsDetails = () => {

  const [tab,setTab] = useState('desc')

  const {id} = useParams()
  const product = products.find(item=> item.id === id)

const dispatch = useDispatch()

  const{imgUrl, productName, price, avgRating, reviews, description, shortDesc} = product

  const addToCart =()=>{
    dispatch(cartActions.addItem({
      id,
      image: imgUrl,
      productName,
      price,
    }))
    toast.success('Producto agregado a la Perfeccion!')
  }

  return <Helmet title={productName}>
    <CommonSection title={productName} />
    <Container>
      <Row>
        <Col lg='6'>
          <img src={imgUrl} alt="" />
        </Col>
        <Col lg='6'>
          <div className="products__details">
            <h2>{productName}</h2>
            <div className="product__rating">
              <div>
                <span><i class="ri-star-s-fill"></i></span>
                <span><i class="ri-star-s-fill"></i></span>
                <span><i class="ri-star-s-fill"></i></span>
                <span><i class="ri-star-s-fill"></i></span>
                <span><i class="ri-star-half-sline"></i></span>
              </div>
              <p>(<span>{avgRating}</span> estrellas)</p>
            </div>
            <span className='product__price'>${price}</span>
            <p>{shortDesc}</p>

            <motion.button whileTap={{scale:1.2}} className="buy__btn" onClick={addToCart}>Agregar al Carro</motion.button>
          </div>
        </Col>
      </Row>
    </Container>
    <section>
      <Container>
        <Row>
          <Col lg='12'>
            <div className="tab__wrapper d-flex align-items-center gap-5">
              <h6 className={`${tab === "desc" ? "active__tab" : ""}`} onClick={()=> setTab('desc')}>Descripcion</h6>
              <h6 className={`${tab === "rev" ? "active__tab" : ""}`} onClick={()=> setTab('rev')}>Reseñas ({reviews.length})</h6>
            </div>

            {
              tab === 'desc' ? <div className="tab__content mt-5">
              <p>{description}</p>
            </div> : <div className='product__review'>
              <div className="review__wrapper">
                <ul>
                  {reviews?.map((item,index)=>(<li key={index}>
                    <span>{item.rating}</span>
                    <p>{item.text}</p>
                  </li>))

                  }
                </ul>
              </div>
            </div>
            }
          </Col>
        </Row>
      </Container>
    </section>
  </Helmet>
}

export default ProductsDetails