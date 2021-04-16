import React from 'react'
import styled from 'styled-components';
import Product from './Product';
/* import { db }  from './firebase';
 */
function Home() {
    /* const [products, setProducts] = useState([]); */

    return (
        <Container>
            <Banner>

            </Banner>
            <Content>
                <Product></Product>
                <Product></Product>
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