import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    background-image: radial-gradient(circle 248px at center, #16d9e3 0%, #30c7ec 47%, #46aef7 100%);
    font-family: sans-serif;
    padding: 5% 0;

    h1 {
        color: white;
        text-align: center;
        margin-bottom: 3%;
    }
`

export const List = styled.div`
    color: #fff;
    display:flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: space-around;
`

export const Card = styled.div`
    width: 16%;
    border: 1px solid white;
    margin-bottom: 3%;
    padding: 2%;
    border-radius: 12px;
    overflow: hidden;

    @media (max-width: 768px) {
        width: 90%;
        margin-bottom: 5%;
    }
`
