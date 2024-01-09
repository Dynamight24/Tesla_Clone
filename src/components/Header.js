import React from 'react'
import styled from 'styled-components'
import { FaBars } from "react-icons/fa";

const Header = () => {
  return (
    <Container>
        <a>
            <img src="/images/logo.svg" alt="" />
        </a>
        <Menu>
            <p><a href="#">Model S</a></p>
            <p>  <a href="#">Model 3</a></p>
            <p>  <a href="#">Model X</a></p>
            <p>  <a href="#">Model Y</a></p> </Menu>

        <RightMenu>
            <a href="#">Shop</a>
            <a href="#">Tesla Account</a>
            <CustomMenu/>
        </RightMenu>
    </Container>
  )
}

export default Header

const Container = styled.div`
min-height: 60px;
position: fixed;
display: flex;
align-items: center;
padding: 0 20px;
width: 100%;
top: 0;
left: 0;
right: 0;
justify-content: space-between;
img{
    cursor:pointer;
}

`

const Menu = styled.div`
display: flex;
align-items: center;
justify-content: center;
p{
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
    justify-content: space-between;
    margin-left: 10px;
}
font-weight: 500;
text-decoration: none;
padding: 0 10px;

@media(max-width: 768px){
    display: none;
}
`

const RightMenu = styled.div`
display: flex;
align-items: center;
a{
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 10px;
}

`

const CustomMenu = styled(FaBars)`
cursor: pointer;`