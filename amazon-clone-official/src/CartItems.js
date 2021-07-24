import React from 'react';
import styled from 'styled-components';
import CartItem from './CartItem';

function CartItems({cartItems}) {
    return (
        <Container>
            <Title>Shopping Cart</Title>
            <hr/>
            <ItemContainer>
                {
                    cartItems.map((item) => (
                        <CartItem
                            id = {item.id}
                            item = {item.product}                       
                        > 
                        </CartItem>
                    ))
                }
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
    font-size: 35px;
    font-weight: 700;
    margin-bottom: 8px;
`
const ItemContainer = styled.div`

`