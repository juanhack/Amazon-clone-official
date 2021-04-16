import React from 'react'
import styled from 'styled-components';

function Product() {
    return (
        <Container>
            <Title>
            Cartucho de tinta HP original 63&nbsp;negro
            </Title>
            <Price>
             COP $635,037.17
            </Price>
            <Rating>    
            ⭐⭐⭐⭐⭐
            </Rating>
            <Image src="https://images-na.ssl-images-amazon.com/images/I/41nV177MSfL.jpg">
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