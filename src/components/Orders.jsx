import React, { useEffect, useState } from 'react';
import { Container, Table, Modal, Button } from 'react-bootstrap';
import { db } from '../services/db';
import { collection, getDocs } from 'firebase/firestore';

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const ordersCollection = collection(db, 'ordenes');
        const querySnapshot = await getDocs(ordersCollection);
        const ordersData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setOrders(ordersData);
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };

    fetchOrders();
  }, []);

  const handleOrderClick = (order) => {
    setSelectedOrder(order);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const calculateTotalPrice = () => {
    const products = selectedOrder.data.products;
    let totalPrice = 0;

    for (const product of products) {
      totalPrice += product.price * product.quantity;
    }

    return totalPrice;
  };

  return (
    <Container style={{ backgroundColor: '#333' }} className="vh-100">
      <h1 style={{ color: 'white' }}>Lista de órdenes</h1>
      <Table striped bordered>
        <thead>
          <tr>
            <th>ID de Orden</th>
            <th>Fecha</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr
              key={order.id}
              onClick={() => handleOrderClick(order)}
              style={{ cursor: 'pointer' }}
            >
              <td>{order.id}</td>
              <td>{order.data.fecha}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      {selectedOrder && (
        <Modal show={showModal} onHide={closeModal}>
          <Modal.Header closeButton>
            <Modal.Title>Detalles de la Orden</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h5>ID de Orden: {selectedOrder.id}</h5>
            <p>Fecha: {selectedOrder.data.fecha}</p>
            <h6>Productos:</h6>
            <Table striped bordered>
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Precio</th>
                  <th>Cantidad</th>
                </tr>
              </thead>
              <tbody>
                {selectedOrder.data.products.map((product, index) => (
                  <tr key={index}>
                    <td>{product.name}</td>
                    <td>${product.price}</td>
                    <td>{product.quantity}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
            <p>Precio Total: ${calculateTotalPrice()}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={closeModal}>
              Cerrar
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </Container>
  );
};

export default Orders;
