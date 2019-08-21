import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 20px;
    position: relative;

    div {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

export const CardItem = styled.img`
    position: absolute;
    top: 50px;
`
