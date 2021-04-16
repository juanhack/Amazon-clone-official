import React from 'react';
import styled from 'styled-components';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import {Link} from "react-router-dom";

function Header() {
    return (
        <Container>
            <HeaderLogo>
                <Link to="/">
                    <img src={"https://i.imgur.com/7I9Was5.png"}/>
                </Link>
            </HeaderLogo>
            <HeaderOptionAddress>
                    <LocationOnIcon/>
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
                    <Link to="/cart">
                        <ShoppingBasketIcon/>
                        <CartCount>8</CartCount>
                    </Link>
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
        width: 96.5px;
        margin-left: 21px;
        padding: 10px 8px 1px 0px;
    }
`

const HeaderOptionAddress = styled.div`
   display:flex;
   padding-left: 9px;
   align-items: center;
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
    margin-left: 4px;
    background-color: white;
    :focus-within{
        box-shadow: 0 0 0 3px #f90;
    }
`

const HeaderSearchInput = styled.input`
    flex-grow: 1;
    border: 0;
    :focus{
        outline: none;
    }    
`

const HeaderSearchIconContainer = styled.div`
    background-color:rgb(254,189,105);
    width: 45px;
    color: black;
    display: flex;
    align-items: center;
    justify-content: center;`

const HeaderNavItems = styled.div`
    display: flex;
    padding-left: 15px;
`

const HeaderOption = styled.div`
    padding: 10px 12px 10px 12px;
    font-size: 13px;
`

const HeaderOptionCart = styled.div`
    display: flex;
    a {
        display: flex;
        align-items: center;
        padding-right: 9px;
        color: white;
        text-decoration: none;
    }
`

const CartCount = styled.div`
    padding-left: 4px;
`