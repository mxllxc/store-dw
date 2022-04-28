import styled from "styled-components";


export const Container = styled.div`

    .cart-close {
        display: none;
    }

    .cart-open {
        display: block;
        max-height: 80vh;
        max-width: 350px;
        min-width: 350px;
        overflow: auto;
        position: absolute;
        z-index: 1;
        right: 10px;
        top: 60px;
        background-color: white;
        padding: 20px;
        -webkit-box-shadow: 0px 2px 7px -3px rgba(0,0,0,0.75);
        -moz-box-shadow: 0px 2px 7px -3px rgba(0,0,0,0.75);
        box-shadow: 0px 2px 7px -3px rgba(0,0,0,0.75);  
    }

    .cart-product {
        
        display: flex;
        flex-wrap: wrap;
        height: 80px;
        gap: 10px;
        align-items: center;
        justify-content: space-between;

        button {
            outline: none;
            border: none;
            background-color: transparent;
        }

    }
    h1 {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 400;
        font-size: 15px;
        cursor: default;
    }


    .img-value {
        height: 80px;
        display: flex;
        gap: 10px;
        img {
            height: 70px;
        }
    }

    .final-cart {
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin-top: 10px;

         button {
            outline: none;
            border: none;
            background-color: var(--gray700);
            color: white;
            font-family: 'Poppins';
            font-style: normal;
            font-weight: 400;
            font-size: 15px;
            padding: 8px 40px;
        }
    }
`