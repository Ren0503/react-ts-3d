import React from 'react';
import { Logo, StyledHeader, Image, Text, Donate } from './Header.styled';
import logo from 'assets/images/logo.jpg';

const Header = () => {
    return (
        <StyledHeader>
            <Logo>
                <Image src={logo} alt="Logo" />
            </Logo>
            <div>
                <Text>BREEDS</Text>
                <Text>ABOUT US</Text>
                <Text>OUR WORK</Text>
                <Text>GET INVOLVED</Text>
            </div>
            <Donate>Donate</Donate>
        </StyledHeader>
    )
};

export default Header;