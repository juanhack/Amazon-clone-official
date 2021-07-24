import React from 'react';
import styled from "styled-components";

function CartItem({ id, item }) {
    return (
        <Container>
            {/* Una vez analizado el diseño se puede apreciar que contiene tres columnas y dentro de la segunda columna existen dos filas, de las cuales la segunda contiene dos columnas;
            por lo que se pretende diseniar de esta manera los componentes correspondientes, asi mismo es importante aclarar que esta es la tecnica que se debe emplear para analizar los
            disenios en general (FILAS Y COLUMNAS QUE COMPONEN EL DISENIO) */}
            <ImageContainer>
                <img src={item.image}/>
            </ImageContainer>
            <CartItemInfo>
                <CartItemInfoTop>
                    <h2>{item.name}</h2>
                </CartItemInfoTop>
                <CartItemInfoBottom>
                    <CartItemQuantityContainer>{item.quantity}</CartItemQuantityContainer>
                    <CartItemDeleteContainer>Delete</CartItemDeleteContainer>
                </CartItemInfoBottom>
            </CartItemInfo>
            <CartItemPrice>
                ${item.price}
            </CartItemPrice>

        </Container>
    )
}

export default CartItem

const Container = styled.div`
    padding-top: 12px;
    padding-bottom: 12px;
    display: flex;
`
const ImageContainer = styled.div`
    width: 200px;
    height: 200px;
    /* Esta propiedad (flex-shrink) liminta el encogimiento del elemento, por lo tanto al colocarla en 0 se entiende que no se debe enconger por ninguna razon*/
    flex-shrink: 0;
    /* Esta propiedad (flex-grow) limita el crecimiento, por lo que al colocarla en 0 se evitara que el elemento crezca nunca*/
    flex-grow: 0;
    margin-right: 16px;
    img{
        object-fit: contain;
        /* la anterior caracteristica funcionara si y solo si, establezco para la imagen cual sera su porcentaje de tamaño dentro del contenedor */
        height: 100%;
        width: 100%;
    }
`
const CartItemInfo = styled.div`

`
const CartItemInfoTop = styled.div`
    color: #007185;
    h2{
        font-size: 18px;
    }
`
const CartItemInfoBottom = styled.div`
    display: flex;
`
const CartItemQuantityContainer = styled.div`

`
const CartItemDeleteContainer = styled.div`
    color: #007185;
    margin-left: 16px;
    cursor: pointer;
`
const CartItemPrice = styled.div`
    font-size: 18px;
    font-weight: 700;
    margin-left: 16px;
`
