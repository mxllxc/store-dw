import styled from "styled-components";

export const Container = styled.div`
    width: fit-content;
    border-radius: 8px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 20px;
    margin: auto;

    button {
        border: none;
        outline: none;
        background-color: transparent;
        padding: 3px;
    }
    .add-product {
        margin-top: -33px;
        margin-right: -75%;
    }
 
    h1 {
        font-family: 'Poppins', sans-serif;
        font-weight: 300;
        font-size: large;
        height: 20px;
        text-align: center;
        cursor: default;

    }
    h2 {
        font-family: 'Poppins', sans-serif;
        font-weight: bold;
        font-size: large;
        cursor: default;
        padding-bottom: 10px;
    }
    img {
        height: 170px;
        margin: 10px;
        border-radius: 15px;
        box-shadow: var(--gray300) 0px 10px 10px;
    }
    .card {
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        border: solid white 5px;
        transition: 0.5s;
        max-width: 210px;
        min-width: 210px;
        min-height: 260px;
        max-height: 260px;

        &:hover {
            background-color: var(--gray200);
        }
    }
`