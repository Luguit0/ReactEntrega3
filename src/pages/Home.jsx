import React, { useState, useEffect} from 'react'

import { Link } from 'react-router-dom'
import {motion} from 'framer-motion'
import products from '../assets/data/products'

import Helmet from '../components/Helmet/Helmet'
import '../styles/home.css'

import { Container, Row, Col } from 'reactstrap';
import heroImg from '../assets/images/hero-img.png'

import Services from '../services/Services';
import ProductsList from '../components/UI/ProductsList';

import Clock from '../components/UI/Clock'
import counterImg from '../assets/images/counter-timer-img.png'



const Home = () => {


  const [trendingProducts,setTrendingProducts] = useState([])
  const [bestSalesProducts,setBestSalesProducts] = useState([])
  const [mobileProducts,setMobileProducts] = useState([])
  const [wirelessProducts,setWirelessProducts] = useState([])
  const [popularProducts,setPopularProducts] = useState([])


  useEffect(()=>{
    const filteredTrendingProducts = products.filter((item) => item.category === "chair");
    const filteredBestSalesProducts = products.filter((item) => item.category === "sofa");
    const filteredMobileProducts = products.filter((item) => item.category === "mobile");
    const filteredWirelessProducts = products.filter((item) => item.category === "wireless");
    const filteredPopularProducts = products.filter((item) => item.category === "watch");

    setTrendingProducts(filteredTrendingProducts);
    setBestSalesProducts(filteredBestSalesProducts);
    setMobileProducts(filteredMobileProducts);
    setWirelessProducts(filteredWirelessProducts);
    setWirelessProducts(filteredWirelessProducts);
    setPopularProducts(filteredPopularProducts);
  },[]);
  
  const year = new Date ().getFullYear()
  return <Helmet title = {"Home"}>
    <section className="hero__section">
      <Container>
        <Row>
          <Col lg='6' md='6'>
          <div className="hero__content">
            <p className="hero__subtitle">Trending procduct in {year}</p>
            <h2>Productos Stanley originales</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur optio placeat eum, vitae libero unde!</p>
            <motion.button whileTap={{scale: 1.2}} className="buy__btn"><Link to='/shop'>COMPRAR</Link></motion.button>
          </div>
          </Col>
          <Col lg='6' md='6'>
            <div className="hero__img">
              <img src={heroImg} alt="" />
            </div>
          </Col>

        </Row>
      </Container>
    </section>
    <Services/>
    <section className="trending__products">
      <Container>
        <Row>
          <Col lg='12' className='text-center'>
            <h2 className="section__tittle">Tendencia</h2>
          </Col>
          <ProductsList data={trendingProducts} />
        </Row>
      </Container>
    </section>
    <section className="best__sales">
      <Container>
      <Row>
          <Col lg='12' className='text-center'>
            <h2 className="section__tittle">Mas vendidos</h2>
          </Col>
          <ProductsList data={bestSalesProducts} />
        </Row>
      </Container>
    </section>
    <section className="timer__count">
      <Container>
        <Row>
          <Col lg='6'md='6'>
            <div className="clock__top-content">
              <h4 className='text-white fs-6 mb-2'>Oferta Limitada</h4>
              <h3 className='text-white fs-5 mb-3'>Calidad Clasico</h3>
            </div>
            <Clock/>
            <motion.button whileTap={{scale: 1.2}} className="buy__btn store__btn"><Link to="/shop">Visit Store</Link></motion.button>
          </Col>
          <Col lg='6'md='6' className='text-end'>
            <img src={counterImg} alt="" />
          </Col>
        </Row>
      </Container>
    </section>
    <section className="new__arrivals">
      <Container>
        <Row>
        <Col lg='12' className='text-center mb-5'>
            <h2 className="section__tittle">Recien Llegados</h2>
          </Col>
          <ProductsList data={mobileProducts} />
          <ProductsList data={wirelessProducts} />
        </Row>
      </Container>
    </section>
    <section className="new__arrivals">
      <Container>
        <Row>
        <Col lg='12' className='text-center mb-5'>
            <h2 className="section__tittle">Mas Vendidos</h2>
          </Col>
          <ProductsList data={popularProducts} />
        </Row>
      </Container>
    </section>
  </Helmet>;
};

export default Home