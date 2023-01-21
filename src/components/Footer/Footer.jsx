import './footer.css'
import React from 'react'
import {Container, Row, Col, ListGroup, ListGroupItem} from 'reactstrap'
import { Link } from 'react-router-dom'

const Footer = () => {
  return <footer className="footer">
    <Container>
      <Row>
        <Col lg='4'>
        <div className="logo">
          <div>
            <h1 className='text-white'>BlackStanley</h1>
          </div>
        </div>
        <p className="footer__text mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum aliquid fuga corporis harum a ullam laboriosam quae recusandae perferendis quisquam.
            </p>
        </Col>
        <Col lg='3'>
          <div className="footer__quick-links">
            <h4 className="quick__links-title">Top Categories</h4>
            <ListGroup className='mb-3'>
              <ListGroupItem className='ps-0 border-0'>
                <Link to='#'>Stanley Termos
                </Link>
              </ListGroupItem>
              <ListGroupItem className='ps-0 border-0'>
                <Link to='#'>Stanley Botellas
                </Link>
              </ListGroupItem>
              <ListGroupItem className='ps-0 border-0'>
                <Link to='#'>Celulares
                </Link>
              </ListGroupItem>
              <ListGroupItem className='ps-0 border-0'>
                <Link to='#'>Relojes
                </Link>
              </ListGroupItem>
            </ListGroup>
          </div>
        </Col>
        <Col lg='2'>
        <div className="footer__quick-links">
            <h4 className="quick__links-title">Enlaces</h4>
            <ListGroup className='mb-3'>
              <ListGroupItem className='ps-0 border-0'>
                <Link to="/shop">Shop
                </Link>
              </ListGroupItem>
              <ListGroupItem className='ps-0 border-0'>
                <Link to="/cart">Cart
                </Link>
              </ListGroupItem>
              <ListGroupItem className='ps-0 border-0'>
                <Link to="/login">Login
                </Link>
              </ListGroupItem>
              <ListGroupItem className='ps-0 border-0'>
                <Link to='#'>Politicas Privadas
                </Link>
              </ListGroupItem>
            </ListGroup>
          </div>
        </Col>
        <Col lg='3'>
        <div className="footer__quick-links">
            <h4 className="quick__links-title">Contacto</h4>
            <ListGroup className='footer__contact'>
              <ListGroupItem className='ps-0 border-0 d-flex align-item-center- gap-2'>
              <span><i class="ri-map-pin-line"></i></span>
              <p>El Malambo 800, Ezeiza, Argentina</p>
              </ListGroupItem>
              <ListGroupItem className='ps-0 border-0 d-flex align-item-center- gap-2'>
              <span><i class="ri-phone-line"></i></span>
              <p>+54 011 1234 5678</p>
              </ListGroupItem>
              <ListGroupItem className='ps-0 border-0 d-flex align-item-center- gap-2'>
              <span><i class="ri-mail-line"></i></span>
              <p>claudiomlugo07@gmail.com</p>
              </ListGroupItem>
            </ListGroup>
          </div>
        </Col>
      </Row>
    </Container>
  </footer>
}

export default Footer