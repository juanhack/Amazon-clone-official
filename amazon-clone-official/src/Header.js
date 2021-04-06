import React from 'react';
import styled from 'styled-components';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import LocationOnIcon from '@material-ui/icons/LocationOn';

function Header() {
    return (
        <Container>
            <HeaderLogo>
                <img src={"https://i.imgur.com/7I9Was5.png"}/>
            </HeaderLogo>
            <HeaderOptionAddress>
                <HeaderAddressIconContainer>
                    <LocationOnIcon/>
                </HeaderAddressIconContainer>
                <HeaderOption>
                <OptionLineOne>Hello</OptionLineOne>
                <OptionLineTow>Select your address</OptionLineTow>
                </HeaderOption>
            </HeaderOptionAddress>
            <HeaderSearch>
                <HeaderSearchInput type='text'/>
                <HeaderSearchIconContainer>
                    <SearchIcon/>
                </HeaderSearchIconContainer>
            </HeaderSearch>
            <HeaderNavItems>
                <HeaderOption>
                    <OptionLineOne>Hello, Juan David</OptionLineOne>
                    <OptionLineTow>Account & Lists</OptionLineTow>
                </HeaderOption>
                <HeaderOption>
                    <OptionLineOne>Returns</OptionLineOne>
                    <OptionLineTow>& Orders</OptionLineTow>
                </HeaderOption>
                <HeaderOptionCart>
                    <ShoppingBasketIcon/>
                    <CartCount>8</CartCount>
                </HeaderOptionCart>
            </HeaderNavItems>
        </Container>
    );
}

export default Header;

const Container = styled.div`
    height: 60px;
    background-color: #0F1111;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #ffffff;
`

const HeaderLogo = styled.div`
    img {
        width: 100px;
        margin-left: 11px;
        padding: 10px 8px 0px 0px;
    }
`

const HeaderOptionAddress = styled.div`
   display:flex;
`
const HeaderAddressIconContainer = styled.div`

`

const OptionLineOne = styled.div`

`
const OptionLineTow = styled.div`
    font-weight: 700;
`
const HeaderSearch = styled.div`
    display: flex;
    height: 40px;
    flex-grow: 1;
    border-radius: 5px;
    overflow: hidden;
`

const HeaderSearchInput = styled.input`
    flex-grow: 1;
    border: 0;
`

const HeaderSearchIconContainer = styled.div`
    background-color:rgb(254,189,105);
    width: 45px;
    color: black;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 0;
`

const HeaderNavItems = styled.div`
    display: flex;
`

const HeaderOption = styled.div`
    padding: 10px 9px 10px 9px;
`

const HeaderOptionCart = styled.div`
    display: flex;
`

const CartCount = styled.div`

`