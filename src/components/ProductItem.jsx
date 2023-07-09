import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'

const ProductItem = ({ name, price, img, id, categorie }) => {
  const navigate = useNavigate();
  const { onAddToCart } = useContext(CartContext);
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const product = {
    categorie: categorie,
    img: img,
    name: name,
    price: price,
    id: id,
  };

  const handleAddToCart = () => {
    onAddToCart(product);
    setIsButtonClicked(true);
    setTimeout(() => {
      setIsButtonClicked(false);
    }, 250);
  };

  return (
    <Card className="cardStyle">
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{price} $</Card.Text>

        <Button
          className={`btn-success ${isButtonClicked ? "btn-clicked" : ""}`}
          onClick={handleAddToCart}
          style={{
            backgroundColor: isButtonClicked ? "lightblue" : "",
            transition: "background-color 0.2s",
          }}
        >
          Agregar
        </Button>

        {' '}

        <Button variant="primary" onClick={() => navigate(`/item/${id}`)}>
          Ver Detalle
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProductItem;
