import React, { useState } from 'react';
import { useEffect } from 'react';
import styled from 'styled-components';
import Product from './Product';
import { db }  from './firebase';

function Home() {
    const [products, setProducts] = useState([]);

    const getProducts = () => {
        db.collection('products').onSnapshot((snapshot) =>{
            let tempProducts = []
            tempProducts = snapshot.docs.map((doc) => (
                {
                    id: doc.id,
                    product: doc.data()
                }
            ));
            setProducts(tempProducts);
        });
    };

    /* La siguiente funcion se utiliza para poder hacer el llamado de la funcion getProducts solo una vez, cuando la pagina se refresca la primera vez. */
    useEffect(() => {
        getProducts();
    }, []);
  
    return (
        <Container>
            <Banner>
            </Banner>
            <Content>
                {
                    /* Aqui vamos a mapear todo el listado que viene de la coleccion de productos, y posteriormente la enviamos al componente por
                    medio de los props, para este caso particular enviamos dato por dato de cada documento */
                    products.map((data) => (
                        <Product
                            title = {data.product.name}
                            price = {data.product.price}
                            rating = {data.product.rating}
                            image = {data.product.image}
                        >
                        </Product>
                    ))
                }
            </Content>
        </Container>
    )
}

export default Home

const Container = styled.div`
/* Para poder centrar el contenido de este contenedor y llevalo a un maximo de 1500px debemos seguir las siguientes indicaciones */
    max-width: 1500px;
    margin: 0 auto;
`

const Banner = styled.div`
    background-image: url("https://i.imgur.com/SYHeuYM.jpg");
    min-height: 700px;
    background-position: center;
    background-size: cover;
    z-index: 1;
    mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
`

const Content = styled.div`
    padding-left: 10px;
    padding-right: 10px;
    margin-top: -400px;
    display: flex;
`