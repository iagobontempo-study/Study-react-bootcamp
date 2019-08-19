import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    p {
        padding: 10px;
    }
    
    div {
        padding: 10px;
        margin: 5px;
        display: flex;
        flex-direction:column;
        justify-content: center;
        align-items: center;
        border: 2px solid;
    }
`;
