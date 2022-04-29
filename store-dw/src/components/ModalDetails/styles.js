import styled from "styled-components";

export const Container = styled.div`

    display: flex;
    text-align: center;
    justify-content: center;
    gap: 40px;

    .img-product {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    .info-product {
        display: flex;
        flex-direction: column;
        text-align: center;
        align-items: center;
    }

    .info-det {
        height: 200px;
        overflow: auto;
    }

    .coment {
        overflow: auto;
        max-height: 250px;
        width: 100%;

        &::-webkit-scrollbar {
            width: 12px;             
        }
        
        &::-webkit-scrollbar-track {
            border-radius: 20px;
            background: var(--gray200);      
        }

        &::-webkit-scrollbar-thumb {
            background-color: var(--gray300);   
            border-radius: 20px;      
            border: 3px solid var(--gray200);  
        }
    }


    img {
        height: 300px;
    }

   

`