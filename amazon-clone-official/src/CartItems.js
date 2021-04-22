import React from 'react';
import styled from 'styled-components';
import CartItem from './CartItem';

function CartItems() {
    return (
        <Container>
            <Title>Shopping Cart</Title>
            <hr/>
            <ItemContainer>
                <CartItem/>
            </ItemContainer>

        </Container>
    )
}

export default CartItems

const Container = styled.div`
    height: 300px;
    flex: 0.8;
    padding: 20px;
    margin-right: 25px;
    background-color: white;
`
const Title = styled.p`
    font-size: 40px;
    font-weight: 60;
`
const ItemContainer = styled.div`

`