import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    div {
        display: flex;

        div {
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: #250;
            color: #fff;
            width: 50px;
            height: 50px;
            margin: 10px;
            border-radius: 25px;
        }
    }
`;
