import styled from "styled-components";

export const StyledLanding = styled.div`
    width: 100vh;
    height: 100v;

    
    canvas {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 2;
    }
`;

export const Image = styled.img`
    height: 100%;
    width: 0;
    position: relative;
    z-index: -1;
`;

export const Detail = styled.div`
    position: absolute;
    top: 10vw;
    left: 15vw;
    font-family: 'arial';
    width: 20%;
    display: flex;
    flex-direction: column;
    z-index: 3;

    @media (max-width: 841px) {
        top: 15vw;
    }

    @media (max-width: 515px) {
        top: 20vw;
    }
`;

export const Label = styled.div`
    letter-spacing: 4px;
    font-size: 12px;
    color: gray;
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const Bar = styled.span`
    width: 30px;
    height: 2.5px;
    background-color: gray;
`;