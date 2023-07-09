import { useNavigate, useParams } from "react-router-dom";
import { Container, Row, Col, Image, Badge, Button } from 'react-bootstrap';
import { FaMoneyBillAlt, FaArrowLeft } from 'react-icons/fa';
import { CartContext } from "../context/CartContext";
import { useContext, useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../services/db";
import LoadingSpinner from "./LoadingSpinner";

const ItemDetailContainer = () => {

  const { productId } = useParams();
  const [product, setProduct] = useState({})
  const navigate = useNavigate()
  const { onAddToCart } = useContext(CartContext)

  useEffect(() => {
    const itemDb = doc(db, 'productos', productId)
    getDoc(itemDb)
      .then(product => {
        if (product.exists()) {
          setProduct({ id: product.id, ...product.data() })
        }
      })
  }, [productId])


  return (
    <Container className="my-5 py-5 bg-white rounded shadow-lg" >
      <Row>
        <Col md={6}>
          {product.img ? <Image src={product.img} fluid /> : <LoadingSpinner></LoadingSpinner>}
        </Col>
        <Col md={6} className="d-flex flex-column justify-content-center">
          <h2>{product.name}</h2>
          <h3>
            <Badge pill className='bg-dark'>
              {product.price} {product.change}
            </Badge>
            {' '}
            <FaMoneyBillAlt />
          </h3>
          <p>{product.description}</p>
          <Button onClick={() => onAddToCart(product)} variant="success">Agregar al carrito</Button>
          <Button variant="light" className="ml-3" onClick={() => navigate(-1)}>
            <FaArrowLeft /> Volver
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ItemDetailContainer;
