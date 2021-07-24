import React from 'react';
import styled from 'styled-components';
import CartItems from './CartItems';
import CartTotal from './CartTotal';

/* Ahora, para recibir los datos que nos envia el App.js existen dos maneras de recibir dicha informacion, la primera seria:
    function Cart(props) {
        return (
y la segunda forma es la siguiente>
*/
function Cart({cartItems}){
    return (
        <Container>
            {/* Ahora pasaremos la data recibida desde App.js al componente CartItems (Tambien por Props) */}
            <CartItems cartItems = {cartItems} />
            <CartTotal />
        </Container>
    )
}

export default Cart

const Container = styled.div`
    display: flex;
    padding: 35px 25px 0 25px;
`