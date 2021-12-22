import styled from "styled-components";

export const StyledHeader = styled.div`
    position: fixed;
    width: 100vw;
    height: 60px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0px 10%;
    z-index: 10;
    background-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/123024/menutexture.png);
`;

export const Logo = styled.div`
    background-color: white;
    height: 90px;
    width: 75px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 15px;
`;

export const Image = styled.img`
    margin-top: 8px;
    height: 40px;
    width: 70px;
`;

export const Text = styled.span`
    font-family: 'arial';
    letter-spacing: 2px;
    font-size: 11px;
    margin-left: 20px;
    cursor: pointer;
    color: grey;

    &:hover {
        color: white;
    }
`;

export const Donate = styled.span`
    font-family: 'arial';
    letter-spacing: 2px;
    font-size: 11px;
    margin-left: 20px;
    cursor: pointer;
    color: white;
    border-bottom: 1px solid grey;
    padding-bottom: 5px;
`;