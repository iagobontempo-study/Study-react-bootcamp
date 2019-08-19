import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 100px;

    @keyframes shake {
        10%, 90% {
            transform: translate3d(-1px, 0, 0);
        }
        
        20%, 80% {
            transform: translate3d(2px, 0, 0);
        }

        30%, 50%, 70% {
            transform: translate3d(-4px, 0, 0);
        }

        40%, 60% {
            transform: translate3d(4px, 0, 0);
        }
        }

    div {
        display: flex;

        .shaking {
        animation: shake 0.82s cubic-bezier(.36,.07,.19,.97) both;
        transform: translate3d(0, 0, 0);
        }
    }

    button {
        width: 150px;
        height: 40px;
        margin-top: 40px;
    }

    div div {
        height: 200px;
        width: 200px;
        background-color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 10px;
        border-radius: 30px;
    }
`;
