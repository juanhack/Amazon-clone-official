/* Esta librerira permite el manejo del estado */
import React,{useState} from 'react'
import { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Cart from './Cart'
import Home from './Home'
/* Esta libreria permite hacer uso de las rutas del enrutador enmascarado, 
lo que permitira resolver la URL sin que esto signifique exponer al publico la ruta por archivo y 
carpetas */
import {BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
/* Importacion de la libreria de Componentes de estilo */
import styled from "styled-components"
/* Esta importacion sera de la base de datos */
import { db } from './firebase'

function App() {
  /* Aqui hacemos uso de la libreria useState y useEffect con el fin de traer la data de la coleccion cartitems, y poder pasarla por PROPS al componente Cart */
  const [cartItems, setCartItems] = useState([]);

  const getCartItems = () =>{
    db.collection('cartitems').onSnapshot((snapshot) =>{
      const tempItems = snapshot.docs.map((doc) => ({
        id: doc.id,
        product: doc.data()
      }))
      setCartItems(tempItems);
    });
  };

  useEffect(() => {
    getCartItems();
  }, [])

  return (
    <Router>
      <Container>
        <Header/>
        <Switch>
          <Route path="/cart">
            {/*Asi se pasan datos por props*/}
            <Cart cartItems = {cartItems}/>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}

export default App;

const Container = styled.div`
  background-color: #eaeded;
`