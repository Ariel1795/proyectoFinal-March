import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';

export const OrderConfirmed = () => {
  const { orderId } = useParams();
  const navigate = useNavigate();

  return (
    <Container className="d-flex flex-column align-items-center justify-content-center" style={{ minHeight: '100vh', color: 'white' }}>
      <h2 className="mb-1">Orden Confirmada</h2>
      <h6 className="mb-4">¡Muchas gracias por tu compra!</h6>
      <p className="mb-5">ID de la orden: {orderId}</p>
      <Button variant="primary" onClick={() => navigate('/')}>
        Volver
      </Button>
    </Container>
  );
};
