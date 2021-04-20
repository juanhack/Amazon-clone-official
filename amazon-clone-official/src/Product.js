import React from 'react'
import styled from 'styled-components';

function Product(props) {
    console.log(props)
    return (
        <Container>
            <Title>
            {props.title}
            </Title>
            <Price>
             US ${props.price}
            </Price>
            <Rating> 
                {
                    Array(props.rating)
                    .fill()
                    .map(rating => <p>⭐</p>)
                }
            </Rating>
            <Image src={props.image}>
            </Image>
            <ActionSection>
                <AddToCartBotton>
                    Add to Cart 
                </AddToCartBotton>
            </ActionSection>
        </Container>
    )
}

export default Product

const Container = styled.div`
    background-color: white;
    max-height: 400px;
    flex: 1;
    padding: 20px;
    margin: 10px;
    z-index: 2;
    display: flex;
    flex-direction: column;
`
const Title = styled.span`

`
const Price = styled.span`
    font-weight: 650;
    margin-top: 3px;

`
const Rating = styled.div`
    display: flex;
    flex-direction: row;
`
const Image = styled.img`
    max-height: 200px;
    object-fit: contain;
`

const ActionSection = styled.div`
    display: grid;
    place-items: center;
    padding-top: 5px;
`

const AddToCartBotton = styled.button`
    width: 100px;
    height: 30px;
    background-color: #f0c14b;
    border-radius: 2px;
    border: 1px solid #a88734;
    :hover{
        background-color:  #e5b431;
        cursor: pointer;
    }
`